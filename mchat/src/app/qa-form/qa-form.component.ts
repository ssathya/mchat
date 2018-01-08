import { QaFormServiceService } from './../qa-form-service.service';
import { QaTemplate, Answers } from './../qa-template';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {PopoverModule} from "ngx-popover";

@Component({
  selector: 'app-qa-form',
  templateUrl: './qa-form.component.html',
  styleUrls: ['./qa-form.component.css']
})
export class QaFormComponent implements OnInit {
  public questAndAns: QaTemplate[];
  public answeredQuestions: number;
  public showAlert: boolean;
  public score: number;
  public showQuestions: number;
  constructor(formService: QaFormServiceService) {
    this.questAndAns = formService.BuildQA();
    this.answeredQuestions = 0;
    this.showAlert = false;
    this.showQuestions = 0;
    this.score = 23;
  }

  public radioChangeHandler(event: any) {
    var id = event.target.id;
    this.score = 23;
    if (this.questAndAns[id].ResponseAnswer === Answers.Undefined) {
      this.answeredQuestions++;
    }
    if (event.target.value === "0") {
      this.questAndAns[id].ResponseAnswer = Answers.No;
    }
    else {
      this.questAndAns[id].ResponseAnswer = Answers.Yes;
    }
    //     console.log(event);
  }
  public Evaluate() {
    for (var i = 0; i < this.questAndAns.length; i++) {
      if (this.questAndAns[i].ExpectedAnswer === this.questAndAns[i].ResponseAnswer) {
        this.score--;
      }
    }
  }
  public ToggleQuestions() {
    this.showQuestions = this.showQuestions === 0 ? 1 : 0;
    this.score = 23;
  }
  public clearInput() {
    this.score = 23;
    for (var i = 0; i < this.questAndAns.length; i++) {
      this.questAndAns[i].ResponseAnswer = Answers.Undefined;
    }
  }
  public allGood(){
    this.score = 23;
    this.answeredQuestions=0;
    for (var i = 0; i < this.questAndAns.length; i++) {
      this.questAndAns[i].ResponseAnswer = Answers.Yes;
    }
    this.answeredQuestions = 23;
  }
  
  ngOnInit() {
  }

}
