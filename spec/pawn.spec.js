import Pawn from '../src/models/pawn';

const life = 200;
const strength = 100;
const def = 100;

// const life2 = 200;
// const strength2 = 100;
// const def2 = 100;

describe('PAWN', function () {
  describe("getLife", function() {

    it("Points :getLife", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getLife(life)).toBe(200);
    });
  });
  
  describe("getStrength", function() {

    it("Points :getStrength", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getStrength(strength)).toBe(100);
    });

  });

  describe("getDef", function() {

    it("Points : getDef", function() {
        let pawn = new Pawn(life,strength,def);

       expect(pawn.getDef(def)).toBe(100);
    });
  });

//   describe('recieveAttack', function () {
//     it("Attaque & defense contre attaque", function () {
//       let pawn1 = new Pawn(life,strength,def);
//       let pawn2 =new Pawn(life2,strength2,def2);
//         expect(pawn1.recieveAttack(pawn2)).toBe(true);
//     });
// });
})