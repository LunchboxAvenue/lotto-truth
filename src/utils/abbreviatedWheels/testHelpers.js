import { some, difference } from 'lodash'

export const getIncorrectNumbers = (wheel, allPossibleCombinations) => {
  let incorrectNumbers = []
  let usedCombinations = []
  const inverse = wheel.winGuarranteeNumbers < wheel.guessedNumbers
  const numberOffsetFromPickFive = 5 - wheel.winGuarranteeNumbers

  allPossibleCombinations.forEach(combination => {
    const ticketCombinationExists = any(usedCombinations, wheel.structure, ticketComb => {
      return differenceFunction(combination, ticketComb, inverse, numberOffsetFromPickFive)
    })

    if (!ticketCombinationExists) { 
      combination.forEach(number => {
        incorrectNumbers.push(number)
      })
    }
  })

  return {
    incorrectNumbers,
    usedCombinations
  }
}

const differenceFunction = (combination, ticketComb, inverse, numberOffsetFromPickFive) => {
  if (!inverse) {
    return difference(combination, ticketComb).length === 0
  } else {
    // these tests need improvement to show incorrect wheel combination (3if4, 4if5, etc)
    if (numberOffsetFromPickFive === 1) return (difference(ticketComb, combination).length === 1 || difference(ticketComb, combination).length === 0)
    if (numberOffsetFromPickFive === 2) return (difference(ticketComb, combination).length === 2 || difference(ticketComb, combination).length === 1)
  }
}

const any = (usedCombinations, array, callback) => {
  const { length } = array;
 
  for (let index = 0; index < length; index += 1) {
    const value = array[index];
 
    if (callback(value, index, array)) {
      usedCombinations.push(value)
      return true;
    }
  }
 
  return false;
 }


// from github https://gist.github.com/axelpale/3118596
export const k_combinations = (set, k) => {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	// Algorithm description:
	// To get k-combinations of a set, we want to join each element
	// with all (k-1)-combinations of the other elements. The set of
	// these k-sized sets would be the desired result. However, as we
	// represent sets with lists, we need to take duplicates into
	// account. To avoid producing duplicates and also unnecessary
	// computing, we use the following approach: each element i
	// divides the list into three: the preceding elements, the
	// current element i, and the subsequent elements. For the first
	// element, the list of preceding elements is empty. For element i,
	// we compute the (k-1)-computations of the subsequent elements,
	// join each with the element i, and store the joined to the set of
	// computed k-combinations. We do not need to take the preceding
	// elements into account, because they have already been the i:th
	// element so they are already computed and stored. When the length
	// of the subsequent list drops below (k-1), we cannot find any
	// (k-1)-combs, hence the upper limit for the iteration:
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}