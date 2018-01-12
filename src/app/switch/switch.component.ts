import {Component, OnInit} from '@angular/core';
import {IScenarioSelected} from '../models/scenario.model';
import {SwitchService} from '../services/switch.service';
import {IPropModel} from '../models/prop.model';

@Component({
  selector: 'gordon-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  properties: IScenarioSelected[] = [
    {title: 'Одно свойство', count: 1, checked: true},
    {title: 'Два свойства', count: 2, checked: false},
    {title: 'Пять свойств', count: 5, checked: false},
    {title: 'Семь свойств', count: 7, checked: false},
    {title: 'Десять свойств', count: 10, checked: false},
  ];

  props: IPropModel[] = [];

  selectedValue = '1';

  constructor(
    private switchService: SwitchService) {
  }

  async ngOnInit() {
    this.props = await this.switchService.getData();
  }

  change() {
    const arg = [];
    for (let i = 0; i < Number(this.selectedValue); i += 1) {
      arg.push(this.props[i]);
    }
    this.switchService.changeCountProp.next(arg);
  }

}
