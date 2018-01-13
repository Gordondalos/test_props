import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import {IPropModel} from '../models/prop.model';
import * as _ from 'lodash';

@Injectable()
export class SwitchService {

  changeCountProp: Subject<any> = new Subject<any>();
  setData: Subject<any> = new Subject<any>();

  shot = 1;

  constructor(private http: Http) {
    this.setData.subscribe((data) => {
      this.changeCountProp.next([data[0]]);
    });
  }

  async getData() {
    try {
      let response: any;
      if (this.shot < 5) {
        response = await this.http.get('../../assets/props.jsons').toPromise();
      } else {
        response = await this.http.get('../../assets/props.json').toPromise();
      }
      if (response.status === 200) {
        const result: IPropModel[] = [];
        _.each(JSON.parse(response['_body']), (item) => {
          const obj: IPropModel = {
            id: Number(item['id']),
            elements: Number(item['elements']),
            res: Number(item['res']),
            value: Number(item['value'])
          };
          result.push(obj);
        });
        console.log(result);
        this.setData.next(result);
        return result;
      }
    } catch (e) {
      if (this.shot < 6) {
        setTimeout(() => {
          console.log(2000 * this.shot);
          this.shot *= 2;
          this.getData();
        }, 2000 * this.shot);
      } else {
        throw new Error();
      }
    }

  }
}
