import { Component, OnInit, Input } from '@angular/core';
import { store, initializeCourses, updateQuestions } from '../store';
import { Router } from '@angular/router';

import { Question } from '../shared/models/question';
import { Answer } from '../shared/models/answer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router : Router
  
  ) { }

  ngOnInit() {
    this.questions = this.getEmptyQuestions();

    this.updateFromState();
    store.subscribe( () => {
      this.updateFromState();
    } );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    //store.dispatch(initializeCourses());
  }

  updateFromState() : void {
    const allState = store.getState();
    var x = allState.questions;
  }

  startGame() : void {
    store.dispatch(updateQuestions(this.questions));
    this.router.navigate(['./questions']);
  }

  questions : Question[];

  private getEmptyQuestions() : Question[]{
    let questionArray = [];

    for ( let i = 0 ; i < this.QUESTIONS_COUNT ; i++ ){
      let q = new Question();
      q.id = i + 1;
      q.answers = this.getEmptyAnswers(5);

      questionArray.push( q );
    }

    return questionArray;
  }

  private getEmptyAnswers(count : number) : Answer[]{
    let answersArray = [];

    for ( let i = 0 ; i < count ; i++ ){
      let a = new Answer();
      a.id = i + 1;
      
      answersArray.push( a )
    }

    return answersArray;
  }

  QUESTIONS_COUNT : number = 5;
}
