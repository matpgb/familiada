import { Question } from '../app/shared/models/question'
import { Answer } from '../app/shared/models/answer';

export const QUESTIONS : Question[] = [
    {
      id: 1,
      text: "Wymień elementy stroju Państwa Młodych",
      answers: [
        { id: 1, text: "Biała suknia", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 2, text: "Welon", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 3, text: "Garnitur", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 4, text: "Podwiązka", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 5, text: "Czyste skarpetki", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined },
        { id: 6, text: "Obrączki", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined },
        { id: 7, text: "Sznurówki", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined }
      ]
    },
    {
      id: 2,
      text: "Bez czego nie może się odbyć tradycyjne wesele?",
      answers: [
        { id: 1, text: "Państwa Młodych", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 2, text: "Gości", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 3, text: "Wódeczki", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 4, text: "Zespołu", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 5, text: "Rosołu", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined },
        { id: 6, text: "Tortu", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined }
      ]
    },
    {
      id: 3,
      text: "Wymień miejscowości związane z Para Młodą",
      answers: [
        { id: 1, text: "Brudzice", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 2, text: "Wygoda", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 3, text: "Częstochowa", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 4, text: "Łodz", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 5, text: "Wozniki - sala weselna", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined }
      ]
    },
    {
      id: 4,
      text: "Wymień nazwiska, ktore wystepuja w najblizszej rodzinie Pary Mlodej (kolejnosc alfabetyczna)",
      answers: [
        { id: 1, text: "Blaszczyk", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 2, text: "Bujacz", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 3, text: "Cebula", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 4, text: "Chmielewski", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 5, text: "Cierpial", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
	{ id: 6, text: "Haladaj", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  }
      ]
    },
    {
      id: 5,
      text: "Jakiej piosenki nie może zabraknąć na weselu?",
      answers: [
        { id: 1, text: "Jesteś szalona", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 2, text: "Cudownych rodziców mam", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 3, text: "Miała matka syna", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 4, text: "Rudy się żeni", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 5, text: "Hej sokoły", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 6, text: "Oczy zielone, Zenek Martyniuk", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  },
        { id: 7, text: "Żono moja", numberOfVotes: undefined, isVisible: undefined, isVoteVisible: undefined  }
      ]
    },
    {
      id: 6,
      text: "Koniec",
      answers: []
    }
];
