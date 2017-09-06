import { Question } from '../app/shared/models/question'
import { Answer } from '../app/shared/models/answer';

export const QUESTIONS : Question[] = [
    {
      id: 0,
      text: "FAMILIADA",
      answers: [
        { id: 1, text: "Start", numberOfVotes: 0, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 1,
      text: "Bedac w przedszkolu, Ania przebierala sie za..",
      answers: [
        { id: 1, text: "Czerwonego kapturka", numberOfVotes: 43, isVisible: false, isVoteVisible: false },
        { id: 2, text: "Kubusia Puchatka", numberOfVotes: 37, isVisible: false, isVoteVisible: false },
        { id: 3, text: "Wrozkę Zębuszke", numberOfVotes: 19, isVisible: false, isVoteVisible: false },
        { id: 4, text: "Sierotke Marysie", numberOfVotes: 9, isVisible: false, isVoteVisible: false },
        { id: 5, text: "czesto", numberOfVotes: 3, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 2,
      text: "Jak pieszczotliwie nazywany byl Mateusz przez swojego meskiego adoratora podczas wyjazdu do Rodowa na mazurach?",
      answers: [
        { id: 1, text: "Blondas", numberOfVotes: 48, isVisible: false, isVoteVisible: false },
        { id: 2, text: "Misiu", numberOfVotes: 32, isVisible: false, isVoteVisible: false },
        { id: 3, text: "Mat", numberOfVotes: 18, isVisible: false, isVoteVisible: false },
        { id: 4, text: "Mateuszek", numberOfVotes: 11, isVisible: false, isVoteVisible: false },
        { id: 5, text: "Mateusz", numberOfVotes: 3, isVisible: false, isVoteVisible: false },
        { id: 6, text: "Meskiego adoratora?", numberOfVotes: 1, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 3,
      text: "Ktore przedmioty mozna znalezc w damskiej torebce?",
      answers: [
        { id: 1, text: "Fachowa instrukcje tabletki gwaltu", numberOfVotes: 73, isVisible: false, isVoteVisible: false },
        { id: 2, text: "Dowody zdrady meza", numberOfVotes: 61, isVisible: false, isVoteVisible: false },
        { id: 3, text: "Podreczna fonoteke Piotra Rubika Symfonicznie", numberOfVotes: 32, isVisible: false, isVoteVisible: false },
        { id: 4, text: "Konstytucje", numberOfVotes: 6, isVisible: false, isVoteVisible: false },
        { id: 5, text: "Szminke", numberOfVotes: 3, isVisible: false, isVoteVisible: false },
        { id: 6, text: "Telefon", numberOfVotes: 2, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 4,
      text: "Gra na ktorym instrumencie wymaga mocnych pluc?",
      answers: [
        { id: 1, text: "gra na instrumencie rozpusty", numberOfVotes: 65, isVisible: false, isVoteVisible: false },
        { id: 2, text: "fletnia meska", numberOfVotes: 51, isVisible: false, isVoteVisible: false },
        { id: 3, text: "wuwuzela", numberOfVotes: 31, isVisible: false, isVoteVisible: false },
        { id: 4, text: "saksofon", numberOfVotes: 6, isVisible: false, isVoteVisible: false }

      ]
    },
    {
      id: 5,
      text: "Jaki jest status waszego zwiazku na FB",
      answers: [
        { id: 1, text: "   ", numberOfVotes: 70, isVisible: false, isVoteVisible: false },
        { id: 2, text: "to skomplikowane", numberOfVotes: 61, isVisible: false, isVoteVisible: false },
        { id: 3, text: "w zwiazku", numberOfVotes: 46, isVisible: false, isVoteVisible: false },
        { id: 4, text: "niewidoczny", numberOfVotes: 23, isVisible: false, isVoteVisible: false }
      ]
    },
    {
      id: 6,
      text: "Ktory owoc dobrze komponuje się z miesem",
      answers: [
        { id: 1, text: "Owoc zdrady Ryszarda Petru", numberOfVotes: 69, isVisible: false, isVoteVisible: false },
        { id: 2, text: "Mandaryna po wystepie w Sopocie", numberOfVotes: 51, isVisible: false, isVoteVisible: false },
        { id: 3, text: "Magdalena Ogorek", numberOfVotes: 48, isVisible: false, isVoteVisible: false },
        { id: 4, text: "Zurawina", numberOfVotes: 23, isVisible: false, isVoteVisible: false },
        { id: 5, text: "Ananas", numberOfVotes: 17, isVisible: false, isVoteVisible: false }

      ]
    },
    {
      id: 7,
      text: "Gdzie można poznać swoja drugą połówkę.",
      answers: [
        { id: 1, text: "W sklepie monopolowym", numberOfVotes: 63, isVisible: false, isVoteVisible: false },
        { id: 2, text: "W lustrze", numberOfVotes: 42, isVisible: false, isVoteVisible: false },
        { id: 3, text: "Na tinderze", numberOfVotes: 40, isVisible: false, isVoteVisible: false },
        { id: 4, text: "Na Maderze", numberOfVotes: 23, isVisible: false, isVoteVisible: false }
      ]
    }
];