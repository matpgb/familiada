import { Team } from '../shared/models/team';
import { Question } from '../shared/models/question';
import { IAppState } from './IAppState';
import { INITIALIZE_QUESTIONS, UPDATE_QUESTIONS } from './actions';

const initialState: IAppState = {
    teamA : new Team(),
    teamB : new Team(),
    questions : []
}

function initializeCourses(state, action) : IAppState{
    return Object.assign({}, state);
}

function updateQuestions(state, action) : IAppState{
    return Object.assign({}, state, {
        questions: [ ...action.data ]
    });
}

export function reducer ( state = initialState, action ){
    switch(action.type){
        case INITIALIZE_QUESTIONS:
            return initializeCourses(state, action);
        case UPDATE_QUESTIONS:
            return updateQuestions(state, action);
        default:
            return state;
    }
}