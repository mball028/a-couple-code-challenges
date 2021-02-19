module.exports.matchingBrackets = (str) => {
  if (typeof str !== "string") {
    return false
  }

  let [leftBracketCount, rightBracketCount] = [0, 0]

  str.split("").forEach((char) => {
    return char === "{"
      ? leftBracketCount++
      : char === "}" && leftBracketCount > rightBracketCount
      ? rightBracketCount++
      : char === "}" && leftBracketCount <= rightBracketCount
      ? rightBracketCount--
      : null
  })

  return leftBracketCount === rightBracketCount ? true : false
}
