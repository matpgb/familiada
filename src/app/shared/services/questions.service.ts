import { Injectable } from '@angular/core';
import { Question } from '../models/question';

import { QUESTIONS } from '../../../assets/questions';

@Injectable()
export class QuestionsService {

  constructor() { }

  getQuestions() : Promise<Question[]>{
    return Promise.resolve(QUESTIONS);
  }

  
}
