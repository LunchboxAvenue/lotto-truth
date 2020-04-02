const pickFiveNumbers = [
  {
    // (a 3-win if 3 of your numbers are drawn)
    id: '10',
    name: '3-win if 3',
    numbers: 9,
    combinations: 12,
    structure: [
      [1, 2, 3, 7, 8],
      [1, 2, 4, 7, 9],
      [1, 2, 5, 6, 7],
      [1, 3, 4, 5, 6],
      [1, 3, 4, 8, 9],
      [1, 5, 6, 8, 9],
      [2, 3, 4, 5, 8],
      [2, 3, 5, 7, 9],
      [2, 3, 6, 8, 9],
      [2, 4, 6, 7, 8],
      [3, 4, 6, 7, 9],
      [4, 5, 7, 8, 9]
    ]
  },
  {
    // (a 3-win if 3 of your numbers are drawn)
    id: '11',
    name: '3-win if 3 (double)',
    numbers: 9,
    combinations: 18,
    structure: [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 6, 9],
      [1, 2, 4, 6, 7],
      [1, 2, 4, 8, 9],
      [1, 2, 5, 7, 8],
      [1, 3, 4, 7, 9],
      [1, 3, 5, 8, 9],
      [1, 3, 6, 7, 8],
      [1, 4, 5, 6, 8],
      [1, 5, 6, 7, 9],
      [2, 3, 4, 6, 8],
      [2, 3, 5, 6, 7],
      [2, 3, 7, 8, 9],
      [2, 4, 5, 7, 9],
      [2, 5, 6, 8, 9],
      [3, 4, 5, 6, 9],
      [3, 4, 5, 7, 8],
      [4, 6, 7, 8, 9]
    ]
  }
]

export default pickFiveNumbers