import { Injectable } from '@angular/core';
import { QaTemplate, Answers } from './qa-template';

@Injectable()
export class QaFormServiceService {
  private qa : QaTemplate;

  buildModule(i: number, question: string): QaTemplate {    
    this.qa= <QaTemplate>{};
    this.qa.QNumber = i;
    this.qa.Question = question.trim();
    this.qa.ExpectedAnswer = Answers.Yes;
    this.qa.ResponseAnswer = Answers.Undefined;
    return this.qa;
  }
  private questAndAns: QaTemplate[];
  constructor() {     
  }

  public BuildQA(): QaTemplate[] {
    this.questAndAns = [];
    this.questAndAns.push(this.buildModule(1, "Does your child enjoy being swung, bounced on your knee, etc.?"));
    this.questAndAns.push(this.buildModule(2, "Does your child take an interest in other children?"));
    this.questAndAns[this.questAndAns.length-1].ExpectedAnswer=Answers.No;
    this.questAndAns.push(this.buildModule(3, "Does your child like climbing on things, such as up stairs?"));
    this.questAndAns.push(this.buildModule(4, "Does your child enjoy playing peek-a-boo/hide-and-seek?"));
    this.questAndAns.push(this.buildModule(5, "Does your child ever pretend, for example, to talk on the phone or take care of a doll or pretend other things?  "));
    this.questAndAns[this.questAndAns.length-1].ExpectedAnswer=Answers.No;
    this.questAndAns.push(this.buildModule(6, "Does your child ever use his/her index finger to point, to ask for something?  "));
    this.questAndAns.push(this.buildModule(7, "Does your child ever use his/her index finger to point, to indicate interest in something?  "));
    this.questAndAns.push(this.buildModule(8, "Can your child play properly with small toys (e.g. cars or blocks) without just mouthing, fiddling, or dropping them? "));
    this.questAndAns.push(this.buildModule(9, "Does your child ever bring objects over to you (parent) to show you something?  "));
    this.questAndAns.push(this.buildModule(10, "Does your child look you in the eye for more than a second or two?"));
    this.questAndAns.push(this.buildModule(11, "Does your child ever seem oversensitive to ise? (e.g., plugging ears)"));
    this.questAndAns.push(this.buildModule(12, "Does your child smile in response to your face or your smile?  "));
    this.questAndAns[this.questAndAns.length-1].ExpectedAnswer=Answers.No;
    this.questAndAns.push(this.buildModule(13, "Does your child imitate you? (e.g., you make a face-will your child imitate it?)  "));
    this.questAndAns.push(this.buildModule(14, "Does your child respond to his/her name when you call?  "));
    this.questAndAns.push(this.buildModule(15, "If you point at a toy across the room, does your child look at it?  "));
    this.questAndAns.push(this.buildModule(16, "Does your child walk?  "));
    this.questAndAns.push(this.buildModule(17, "Does your child look at things you are looking at?  "));
    this.questAndAns.push(this.buildModule(18, "Does your child make unusual finger movements near his/her face?  "));
    this.questAndAns.push(this.buildModule(19, "Does your child try to attract your attention to his/her own activity?  "));
    this.questAndAns.push(this.buildModule(20, "Have you ever wondered if your child is deaf?  "));
    this.questAndAns.push(this.buildModule(21, "Does your child understand what people say?  "));
    this.questAndAns.push(this.buildModule(22, "Does your child sometimes stare at thing or wander with  purpose?  "));
    this.questAndAns.push(this.buildModule(23, "Does your child look at your face to check your reaction when faced with something  unfamiliar? "));
    return this.questAndAns;
  }

}