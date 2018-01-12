import { Component } from '@angular/core';
import {SwitchService} from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loader = true;

  constructor(private switchService: SwitchService) {
    this.switchService.setData.subscribe((data) => {
      this.loader = false;
    });
  }
}
