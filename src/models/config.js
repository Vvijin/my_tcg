import DeckConfig from './deck';
import HandConfig from './hand';
import BoardConfig from './board';
import CemetaryConfig from './cemetary';
import PlayerConfig from './player';
import GameConfig from './game';

export default {

    "deck": {
        "class": DeckConfig,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}, {"face":"card-6"}]}'
    },

    "hand": {
        "class": HandConfig,
        "param": '{"limit": 7, "cards":[]}'
    },

    "board": {
        "class": BoardConfig,
        "param": '{"limit": 10, "cards":[]}'
    },

    // "cemetary": {
    //     "class": CemetaryConfig,
    //     "param": '{"cards":[]}'
    // },

    // "player": {
    //     "class": PlayerConfig,
    //     "param": '{}'
    // },

    "game": {
        "class": GameConfig,
        "param": '{}'
    }
}