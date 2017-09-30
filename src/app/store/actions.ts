import { Question } from '../shared/models/question';

export const INITIALIZE_QUESTIONS = 'questions/INITIALIZE';
export function initializeCourses(){
    return {
        type: INITIALIZE_QUESTIONS,
    };
}

export const UPDATE_QUESTIONS = 'questions/UPDATE';
export function updateQuestions( questions : Question[] ){
    return {
        type: UPDATE_QUESTIONS,
        data: questions
    }
}