import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import {IPropModel} from '../models/prop.model';
import * as _ from 'lodash';

@Injectable()
export class SwitchService {

  changeCountProp: Subject<any> = new Subject<any>();

  constructor(private http: Http) {
  }

  async getData(): Promise<IPropModel[]>{
    const res = await this.http.get('../../assets/props.json').toPromise();
    const result: IPropModel[] = [];
    _.each(JSON.parse(res['_body']), (item) => {
      const obj: IPropModel = {
        id: Number(item['id']),
        elements: Number(item['elements']),
        res: Number(item['res']),
        value: Number(item['value'])
      };
      result.push(obj);
    });
    return result;
  }

}
