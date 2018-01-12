import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SliderModule, RadioButtonModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {SwitchComponent} from './switch/switch.component';
import {SwitchService} from './services/switch.service';
import {ScenarioComponent} from './scenario/scenario.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    ScenarioComponent
  ],
  imports: [
    BrowserModule,
    SliderModule,
    FormsModule,
    RadioButtonModule,
    HttpModule
  ],
  providers: [SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
