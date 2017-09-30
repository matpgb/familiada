import { Question } from '../shared/models/question';
import { Team } from '../shared/models/team'; 

export interface IAppState {
    teamA : Team;
    teamB : Team;
    questions : Question[];
}