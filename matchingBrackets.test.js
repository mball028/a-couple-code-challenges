const matchingBrackets = require("./matchingBrackets").matchingBrackets

test("'{}' pair of brackets returns true.", () => {
  expect(matchingBrackets("{}")).toBe(true)
})
test("'}{' unclosed brackets returns false.", () => {
  expect(matchingBrackets("}{")).toBe(false)
})
test("'{{}' one pair unclosed returns false.", () => {
  expect(matchingBrackets("{{}")).toBe(false)
})
test("'' empty string returns true.", () => {
  expect(matchingBrackets("")).toBe(true)
})
test("'{ Outside Brackets { Inside Brackets} }' two full sets of brackets returns true.", () => {
  expect(matchingBrackets("")).toBe(true)
})
test("'{{extra bracket on the right side of string.}}}' extra bracket at the end of string returns false.", () => {
  expect(
    matchingBrackets("{{extra bracket on the right side of string.}}}")
  ).toBe(false)
})
test("'}{}{}{}{' equal numbers but unclosed brackets returns false.", () => {
  expect(matchingBrackets("}{}{}{}{")).toBe(false)
})
test("'{{}{{{{{}}}}}}}' returns false", () => {
  expect(matchingBrackets("{{}{{{{{}}}}}}}")).toBe(false)
})
