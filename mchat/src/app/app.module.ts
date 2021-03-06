import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {QaTemplate} from './qa-template';
import {QaFormServiceService} from './qa-form-service.service';


import { AppComponent } from './app.component';
import { QaFormComponent } from './qa-form/qa-form.component';




@NgModule({
  declarations: [
    AppComponent,
    QaFormComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [QaFormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
