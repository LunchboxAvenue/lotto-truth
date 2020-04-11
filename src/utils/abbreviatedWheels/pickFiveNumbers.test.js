import pickFiveNumbers from './pickFiveNumbers'
import { find, some, uniq, difference, head } from 'lodash'
import { getIncorrectNumbers, k_combinations } from './testHelpers'

describe('pick five numbers wheels tests', () => {
  const setup = (id) => {
    const wheel = head(pickFiveNumbers.filter(x => x.id === id))

    if (wheel) {
      const allPossibleCombinations = k_combinations([...Array(wheel.numbers+1).keys()].slice(1), wheel.guessedNumbers)

      return {
        wheel,
        allPossibleCombinations
      }
    }

    return {}
  }

  it('Wheel with id = 10 guarantees 3-win if 3 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('10')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it.skip('Wheel with id = 11 guarantees 3-win if 3 (double) if 3 numbers are guessed', () => {
    // guarantees multiple tickets, test has to be adjusted
    const { wheel, allPossibleCombinations } = setup('11')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 12 guarantees 4-win if 4 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('12')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 13 guarantees 4-win if 4 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('13')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 14 guarantees 4 win if 4 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('14')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 15 guarantees 4-win if 5 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('15')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)

    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 16 guarantees 4-win if 5 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('16')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 17 guarantees 3-win if 4 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('17')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })

  it('Wheel with id = 18 guarantees 3-win if 4 numbers are guessed', () => {
    const { wheel, allPossibleCombinations } = setup('18')
    expect(wheel).toBeDefined()
    expect(allPossibleCombinations).toBeDefined()
    
    const { incorrectNumbers, usedCombinations } = getIncorrectNumbers(wheel, allPossibleCombinations)
    expect(uniq(usedCombinations).length).toEqual(wheel.combinations)
    expect(uniq(incorrectNumbers)).toEqual([])
  })
})