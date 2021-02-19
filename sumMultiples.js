module.exports.sumMultiples = (num1, num2, range, sum) => {
  if (range === 0) {
    return sum
  }
  if (range % num1 === 0 || range % num2 === 0) {
    sum += range
  }

  return this.sumMultiples(num1, num2, (range -= 1), sum)
}
