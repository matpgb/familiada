import { Component, OnInit, Injectable } from '@angular/core';
import { QuestionsService } from '../shared/services/questions.service';
import { Question } from '../shared/models/question';
import { Team } from '../shared/models/team';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [ QuestionsService ]
})
@Injectable()
export class QuestionsComponent implements OnInit {

  constructor( private questionsService : QuestionsService) { }

  ngOnInit() { 
    this.questionsService.getQuestions().then( q => {
      this.questions = q;
      this.currentQuestion = q[this.currentIndex];
    })
  }

  nextQuestion(teamToScore) : void {
    switch(teamToScore){
      case 'a':
        this.teamA.points += this.points;
        break;
      case 'b':
        this.teamB.points += this.points;
        break;
    }
    this.points = 0;
    this.currentIndex += 1;
    this.currentQuestion = this.questions[this.currentIndex];

    if ( this.currentQuestion == undefined ){
      this.currentIndex = 0;
      this.currentQuestion = this.questions[0];
    }
  }

  toggleAnswer( index ) : void {
    this.currentQuestion.answers[index].isVisible = !this.currentQuestion.answers[index].isVisible;
    setTimeout( () => { 
      this.currentQuestion.answers[index].isVoteVisible = !this.currentQuestion.answers[index].isVoteVisible;
      this.countPoints();
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

  points: number = 0;
  currentIndex = 0;
  questions: Question[];
  currentQuestion : Question;
  teamA : Team = new Team();
  teamB : Team = new Team();
}
