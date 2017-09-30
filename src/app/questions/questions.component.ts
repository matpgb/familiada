import { Component, OnInit, Injectable } from '@angular/core';
import { QuestionsService } from '../shared/services/questions.service';
import { SoundAlertService } from '../shared/services/sound-alert.service';
import { Question } from '../shared/models/question';
import { Answer } from '../shared/models/answer';
import { Team } from '../shared/models/team';
import { store } from '../store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [ QuestionsService, SoundAlertService ],
  host: {
    "[style.background-color]":"black" 
  }
})
@Injectable()
export class QuestionsComponent implements OnInit {

  constructor( 
    private questionsService : QuestionsService,
    private soundAlertService : SoundAlertService
  ) { }

  ngOnInit() { 
    const state = store.getState();
    let questions = this.removeEmptyAnswers( state.questions );
    this.questions =  this.randomizePeoplesVotes( questions );

    this.currentQuestion = undefined;

  }

  startIntro() {
    this.soundAlertService.intro();
  }

  nextQuestion() : void {
    this.points = 0;
    this.teamA.reset();
    this.teamB.reset();

    this.currentIndex += 1;
    this.currentQuestion = this.questions[this.currentIndex];

    if ( this.currentQuestion == undefined ){
      this.currentIndex = 0;
      this.currentQuestion = this.questions[0];
    }
  }

  addPoints(teamToScore : string) : void {
    switch(teamToScore){
      case 'a':
        this.teamA.points += this.points;
        break;
      case 'b':
        this.teamB.points += this.points;
        break;
    }
    this.points = 0;
  }

  toggleAnswer( index ) : void {
    this.currentQuestion.answers[index].isVisible = !this.currentQuestion.answers[index].isVisible;
    setTimeout( () => { 
      this.currentQuestion.answers[index].isVoteVisible = !this.currentQuestion.answers[index].isVoteVisible;
      this.countPoints();
      this.soundAlertService.goodAnswer();
      },
      Math.floor(Math.random() * 2000) + 100  
    );    
  }

  minorLoss(team : string) : void {
    switch(team){
      case 'a':
        this.teamA.addMinorLoss();
        break;
      case 'b':
        this.teamB.addMinorLoss();
        break;
    }

    this.soundAlertService.badAnswer();
  }

  majorLoss(team : string) : void {
    switch(team){
      case 'a':
        this.teamA.toggleMinorLoss();
        break;
      case 'b':
        this.teamB.toggleMinorLoss();
        break;
    }
    
    this.soundAlertService.badAnswer();
  }

  private countPoints() : void {
    let sum = 0;
    for ( let i = 0 ; i < this.currentQuestion.answers.length ; i++ ){
      if ( this.currentQuestion.answers[i].isVoteVisible ){
        sum += this.currentQuestion.answers[i].numberOfVotes;
      }
    }
    this.points = sum;
  }

  private removeEmptyAnswers( questions : Question[] ) : Question[] {
    let questionsTmp = [];
    for( let i = 0 ; i < questions.length ; i++ ){
      if ( questions[i].text == undefined || questions[i].text == '' ){
        continue;
      }

      let answers = questions[i].answers.filter( a => { 
        return a.text != "" && a.text != undefined ;
      });

      let q = Object.assign({}, questions[i], { answers: answers});
      questionsTmp.push(q);
    }

    return questionsTmp;
  }

  private randomizePeoplesVotes( questions : Question[] ) : Question[] {
    let questionsTmp = [];

    for ( let i = 0 ; i < questions.length ; i++ ) {
      let answers = questions[i].answers;
      let peoplesVotes = Array.from({length: answers.length}, () => Math.floor(Math.random() * 100) + 1)
      .sort();

      for( let j = 0 ; j < answers.length ; j++ ){
        answers[j] = this.setAnswerAttributes( answers[j], peoplesVotes[j] );
      }

      questionsTmp.push( Object.assign({}, questions[i], { answers: answers } ));
    }

    return questionsTmp;
  }

  private setAnswerAttributes( answer : Answer, numberOfVotes : number ){
    answer.isVisible = false;
    answer.isVoteVisible = false;
    answer.numberOfVotes = numberOfVotes;

    return answer;
  }

  points: number = 0;
  currentIndex = -1;
  questions: Question[];
  currentQuestion : Question;
  teamA : Team = new Team();
  teamB : Team = new Team();
}
