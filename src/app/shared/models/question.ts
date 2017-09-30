import { Answer } from './answer';

export class Question {
    constructor(){
        this.id = 0;
        this.text = "";
        this.answers = [];
    }

    id: number;
    text: string;
    answers : Answer[];
}