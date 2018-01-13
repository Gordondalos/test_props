import {Component, OnInit} from '@angular/core';
import {SwitchService} from '../services/switch.service';
import * as _ from 'lodash';
import {IPropModel} from '../models/prop.model';

@Component({
  selector: 'gordon-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  lock = true;
  countElement = 0;
  countProperties = 0;
  oldProps: IPropModel[] = [];
  props: IPropModel[] = [];


  constructor(private switchService: SwitchService) {
    this.switchService.changeCountProp.subscribe((arg) => {
      this.setCountScenario(arg);
    });
  }

  ngOnInit() {

  }


  setCountScenario(arg) {
    this.props = _.cloneDeep(arg);
    this.countProperties = arg.length;
    this.countElement = 0;
    _.each(this.props, (prop, index) => {
      this.countElement += prop.elements;
      if (index === 0) {
        prop.value = 100;
      } else {
        prop.value = 0;
      }
    });
    this.props[0].res = this.countElement;
    this.oldProps = _.cloneDeep(this.props);
  }

  changePropValue(value, prop) {
    prop.res = this.roundTo(value) / (Math.ceil(100 / (this.countElement)));
    this.changeAnotherElement(prop);
  }

  changeAnotherElement(prop) {
    const old = _.find(this.oldProps, (o) => {
      return o.id === prop.id;
    });
    const changeValue = old.value - prop.value;
    const changePropRes = old.res - prop.res;
    if (this.props.length > 1) {
      const element = this.getTheSmalestOrBiggerElement(changeValue < 0, prop.id);
      this.addOrRemoveValueInELement(element, changeValue, changePropRes);
    }
    this.oldProps = _.cloneDeep(this.props);
  }

  changePropElements(event, prop) {
    prop.value = Number((100 / this.countElement).toFixed(2)) * event;
    this.changeAnotherElement(prop);
  }

  addOrRemoveValueInELement(element, valueChange, changePropRes) {
    element.value += Number(valueChange.toFixed(2));
    element.res += changePropRes;
    if (element.res < 0) {
      element.res = 0;
    }
    if (element.value < 0) {
      element.value = 0;
    }
  }

  getTheSmalestOrBiggerElement(bigger, id) {
    const clone = _.cloneDeep(this.props);
    _.each(clone, (item, index) => {
      if (item && item['id'] === id) {
        clone.splice(index, 1);
      }
    });
    const sort = _.sortBy(clone, (elem) => {
      return elem['value'];
    })[bigger ? clone.length - 1 : 0];

    return _.find(this.props, (elem) => {
      return elem.id === sort.id;
    });
  }

  roundTo(num) {
    return Math.round(num / (Math.ceil(100 / this.countElement))) * (Math.ceil(100 / this.countElement));
  }


}
