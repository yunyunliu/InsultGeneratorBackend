const { descriptor_after, descriptor_before, subject_in_middle, predicate, insult, kicker, niceQuotes } = require('./trump')

const helpers = {
  generateTypeAndIndexes: () => {
    const getRandomIndex = component => {
      const randomIndex = Math.floor(Math.random() * Math.floor(component.length))
      return randomIndex
    }
    const indexes = {
      type: Math.floor(Math.random() * Math.floor(4)),
      descriptorBeforeIndex: getRandomIndex(descriptor_before),
      descriptorAfterIndex: getRandomIndex(descriptor_after),
      predicateIndex: getRandomIndex(predicate),
      insultIndex: getRandomIndex(insult),
      subjectInMiddleIndex: getRandomIndex(subject_in_middle),
      kickerIndex: getRandomIndex(kicker),
      includesKicker: Math.random() > 0.5 ? 1 : 0,
      niceQuotesIndex: getRandomIndex(niceQuotes),
    }
    return indexes
  },
  generateInsultId: ({ type,
     descriptorBeforeIndex,
     descriptorAfterIndex, 
     predicateIndex, 
     insultIndex,
     subjectInMiddleIndex,
     includesKicker,
     kickerIndex,
     niceQuotesIndex }) => {
       const padNums = (num, places) => {
         const numStr = num.toString()
         return numStr.padStart(places, '0')
       }

    return ('' + type +
    padNums(descriptorBeforeIndex, 2) +
    padNums(descriptorAfterIndex, 2) +
    padNums(predicateIndex, 3) + 
    padNums(insultIndex, 2) +
    subjectInMiddleIndex +
    includesKicker +
    padNums(kickerIndex, 2) +
    niceQuotesIndex)
    },
  generateInsult: (name, indexes) => {
    const indexNums = {}
    for (const index in indexes) {
      indexNums[index] = parseInt(indexes[index])
    }

    if (name) {
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
      let generatedInsult;

      if (name === 'Donald' || name === 'Trump') {
        generatedInsult = name + niceQuotes[indexes.niceQuotesIndex]
        return generatedInsult
      } 
      if (indexNums.type === 0) {
        generatedInsult = formattedName
        + descriptor_after[indexNums.descriptorAfterIndex]
        + predicate[indexNums.predicateIndex]
        + insult[indexNums.insultIndex] 

        return Math.random() > .5 ? generatedInsult += kicker[indexNums.kickerIndex] : generatedInsult
      }
      if (indexNums.type === 1) {
        generatedInsult = descriptor_before[indexNums.descriptorBeforeIndex] 
        + formattedName
        + predicate[indexNums.predicateIndex]
        + insult[indexNums.insultIndex]  

        return Math.random() > .5 ? generatedInsult += kicker[indexNums.kickerIndex] : generatedInsult
      } 
      if (indexNums.type === 2) {
        generatedInsult = formattedName 
        + predicate[indexNums.predicateIndex]
        + insult[indexNums.insultIndex]  

        return Math.random() > .5 ? generatedInsult += kicker[indexNums.kickerIndex] : generatedInsult
      }
      if (indexNums.type === 3) {
      generatedInsult = descriptor_before[indexNums.descriptorBeforeIndex] 
      + formattedName
      + descriptor_after[indexNums.descriptorAfterIndex]
      + predicate[indexNums.predicateIndex]
      + insult[indexNums.insultIndex] 

      return Math.random() > .5 ? generatedInsult += kicker[indexNums.kickerIndex] : generatedInsult
      }
      if (indexNums.type === 4) {
        const subjInMiddle = subject_in_middle[indexNums.subjectInMiddleIndex]

        generatedInsult = subjInMiddle[0] 
        + formattedName
        + subjInMiddle[1]
        + predicate[indexNums.predicateIndex]
        + insult[indexNums.insultIndex] 

        return generatedInsult
    } 
  } else {
    console.log('no name given')
  }
}
}


module.exports = helpers