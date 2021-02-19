const sumMultiples = require("./sumMultiples").sumMultiples

test("Sum Multiples of 3 and 5 < 10", () => {
    expect(sumMultiples(3,5,9,0)).toBe(23)
})
test("Sum Multiples of 3 and 5 < 1000", () => {
  expect(sumMultiples(3, 5, 999, 0)).toBe(233168)
})
