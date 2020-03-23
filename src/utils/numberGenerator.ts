import { Random, MersenneTwister19937 } from "random-js"

const engine = MersenneTwister19937.autoSeed()
const random = new Random(engine)

const getRandomNumberSample = (from: number, to: number, pickSize: number): number[] => {
  let possibleLotteryNumbers: number[] = [];

  for (let i = from; i <= to; i++) {
    possibleLotteryNumbers.push(i)
  }

  return random.sample(possibleLotteryNumbers, pickSize)
}

export default getRandomNumberSample