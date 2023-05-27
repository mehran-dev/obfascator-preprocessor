const generateDictionary = (length) => {
  const dictionary = []
  for (let i = 1; i <= length; i++) {
    dictionary.push(`a${i}`)
  }
  return dictionary
}

const variableRenamerLoader = (source) => {
  let dictionaryIndex = 0
  const variableDictionary = generateDictionary(100) // Change the length as per your requirement

  const transformedCode = source.replace(
    /(\b[a-zA-Z_][a-zA-Z0-9_]*)\b/g,
    (match, variableName) => {
      if (
        variableName === 'function' ||
        variableName === 'var' ||
        variableName === 'let' ||
        variableName === 'const'
      ) {
        return match
      }

      const newVariableName = variableDictionary[dictionaryIndex]
      dictionaryIndex = (dictionaryIndex + 1) % variableDictionary.length
      return newVariableName
    },
  )

  return transformedCode
}

module.exports = variableRenamerLoader
