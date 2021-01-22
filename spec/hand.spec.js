import Hand from '../src/models/hand'

const config = { cards: [1, 2, 3, 4], limit: 7 }

describe('HAND', function () {
  describe('addCard', function () {
    it('Add new Cards ', function () {
      const Card = 5
      let hand = new Hand(config)

      expect(hand.addCard(Card)).toBe(true)
    })

    it('Over limited ', function () {
      const newCard = undefined
      let hand = new Hand(config)

      expect(hand.addCard(newCard)).toBe(false)
    })
  })

  describe('removeCard', function () {
    it('Remove the card ', function () {
      const card = 4
      let hand = new Hand(config)

      expect(hand.removeCard(3)).toEqual(card)
    })

    it('Deck is not empty ', function () {
      const config = { cards: [] }
      let hand = new Hand(config)

      expect(hand.removeCard()).toBe(false)
    })
  })

  describe('getAllCards', function () {
    it('Return the array with cards', function () {
      let hand = new Hand(config)

      expect(hand.getAllCards()).toEqual(jasmine.arrayContaining([2, 3, 1]))
    })
  })

  describe('getCardsCount', function () {
    it(' Return cards ', function () {
      const config = { cards: [1, 2, 3, 4] }
      const card = 4
      let hand = new Hand(config)

      expect(hand.getCardsCount(config)).toEqual(card)
    })
  })
})
