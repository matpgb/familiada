import { Question } from '../app/shared/models/question'
import { Answer } from '../app/shared/models/answer';

export const QUESTIONS : Question[] = [
    {
      id: 0,
      text: "FAMILIADA",
      answers: [
        { id: 1, text: "...............", numberOfVotes: 0, isVisible: false, isVoteVisible: false },
        { id: 2, text: "...............", numberOfVotes: 0, isVisible: false, isVoteVisible: false },
        { id: 3, text: "...............", numberOfVotes: 0, isVisible: false, isVoteVisible: false },
        { id: 4, text: "...............", numberOfVotes: 0, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 1,
      text: "pytanie pierwsze",
      answers: [
        { id: 1, text: "odp 1", numberOfVotes: 60, isVisible: false, isVoteVisible: false },
        { id: 2, text: "odp 2", numberOfVotes: 30, isVisible: false, isVoteVisible: false },
        { id: 3, text: "odp 3", numberOfVotes: 10, isVisible: false, isVoteVisible: false },
        { id: 4, text: "odp 4", numberOfVotes: 5, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 2,
      text: "pytanie drugie",
      answers: [
        { id: 1, text: "odp 1", numberOfVotes: 20, isVisible: false, isVoteVisible: false },
        { id: 2, text: "odp 2", numberOfVotes: 10, isVisible: false, isVoteVisible: false },
        { id: 3, text: "odp 3", numberOfVotes: 60, isVisible: false, isVoteVisible: false },
        { id: 4, text: "odp 4", numberOfVotes: 3, isVisible: false, isVoteVisible: false }
      ]
    }
];