import { QaFormServiceService } from './../qa-form-service.service';
import { QaTemplate, Answers } from './../qa-template';
import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-qa-form',
  templateUrl: './qa-form.component.html',
  styleUrls: ['./qa-form.component.css']
})
export class QaFormComponent implements OnInit {
  private questAndAns: QaTemplate[];
  private answeredQuestions:number;
  private showAlert : boolean;
  private score : number;
  constructor(formService:QaFormServiceService) {
    this.questAndAns=formService.BuildQA();
    this.answeredQuestions=0;
    this.showAlert=false;
    this.score=23;
   }

   public radioChangeHandler(event: any){
     var id = event.target.id;
     if (this.questAndAns[id].ResponseAnswer === Answers.Undefined){
      this.answeredQuestions++;
     }
     if (event.target.value==="0") {
      this.questAndAns[id].ResponseAnswer= Answers.No;  
     }
     else{
      this.questAndAns[id].ResponseAnswer=Answers.Yes;
     }     
//     console.log(event);
   }
   public Evaluate(){     
     for (var i = 0; i < this.questAndAns.length; i++)
     {
       if (this.questAndAns[i].ExpectedAnswer===this.questAndAns[i].ResponseAnswer){
         this.score--;
       }
     }     
   }
  ngOnInit() {
  }

}
