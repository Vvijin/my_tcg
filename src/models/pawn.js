import EventManager from '../eventManager';

export default class Pawn extends EventManager{

    constructor(life,strength,def){
        super();
        this.life=life;
        this.strength=strength;
        this.def=def;
    }
    getLife(life){
        if (typeof life == "undefined" || life == null){
            return false;
        }
        else{
            return this.life = life;
        }
    }

    getStrength(strength){
        if (typeof strength == "undefined" || strength == null){
            return false;
        }
        else{
            return this.strength = strength;
        }
    }

    getDef(def){
        if (typeof def == "undefined" || def == null){
            return false;
        }
        else{
            return this.def = def;
        }
    }
    attack(target){
        target.receiveAttack(this);
    }

    receiveAttack(opponent, strikeBack = false){

    }
}