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
    let id;
    
    if (includesKicker) {
      switch (type) {
        case 0:
          id = '' +
          type +
          descriptorAfterIndex + 
          predicateIndex + 
          insultIndex +
          kickerIndex
          break
        case 1: 
          id = '' +
          type + 
          descriptorBeforeIndex +
          predicateIndex + 
          insultIndex +
          kickerIndex
          break
        case 2: 
          id = '' +
          type + 
          predicateIndex + 
          insultIndex +
          kickerIndex
          break
        case 3:
          id = '' +
          type + 
          descriptorBeforeIndex +
          descriptorAfterIndex + 
          predicateIndex + 
          insultIndex +
          kickerIndex
          break
        case 4: 
          id = '' +
          type + 
          subjectInMiddleIndex +
          predicateIndex + 
          insultIndex +
          kickerIndex
          break
      }
    } else {
      switch (type) {
        case 0:
          id = '' +
          type + 
          descriptorAfterIndex + 
          predicateIndex + 
          insultIndex 
          break
        case 1:
          id = '' +
          type + 
          descriptorBeforeIndex +
          predicateIndex + 
          insultIndex 
          break
        case 2:
          id = '' +
          type + 
          predicateIndex + 
          insultIndex 
          break
        case 3:
          id = '' +
          type + 
          descriptorBeforeIndex +
          descriptorAfterIndex + 
          predicateIndex + 
          insultIndex
          break
        case 4:
          id = '' +
          type + 
          subjectInMiddleIndex +
          predicateIndex + 
          insultIndex 
          break
        }
      }
      return id
    },
  generateInsult: (name, indexes) => {
    if (name) {
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase()

      let generatedInsult;
      if (name === 'Donald' || name === 'Trump') {
        generatedInsult = name + niceQuotes[indexes.niceQuotesIndex]
        return generatedInsult
      } 
      if (indexes.type === 0) {
        generatedInsult = formattedName
        + descriptor_after[indexes.descriptorAfterIndex]
        + predicate[indexes.predicateIndex]
        + insult[indexes.insultIndex] 

        return Math.random() > .5 ? generatedInsult += kicker[indexes.kickerIndex] : generatedInsult
      }
      if (indexes.type === 1) {
        generatedInsult = descriptor_before[indexes.descriptorBeforeIndex] 
        + formattedName
        + predicate[indexes.predicateIndex]
        + insult[indexes.insultIndex]  

        return Math.random() > .5 ? generatedInsult += kicker[indexes.kickerIndex] : generatedInsult
      } 
      if (indexes.type === 2) {
        generatedInsult = formattedName 
        + predicate[indexes.predicateIndex]
        + insult[indexes.insultIndex]  

        return Math.random() > .5 ? generatedInsult += kicker[indexes.kickerIndex] : generatedInsult
      }
      if (indexes.type === 3) {
      generatedInsult = descriptor_before[indexes.descriptorBeforeIndex] 
      + formattedName
      + descriptor_after[indexes.descriptorAfterIndex]
      + predicate[indexes.predicateIndex]
      + insult[indexes.insultIndex] 

      return Math.random() > .5 ? generatedInsult += kicker[indexes.kickerIndex] : generatedInsult
      }
      if (indexes.type === 4) {
        const subjInMiddle = subject_in_middle[indexes.subjectInMiddleIndex]

        generatedInsult = subjInMiddle[0] 
        + formattedName
        + subjInMiddle[1]
        + predicate[indexes.predicateIndex]
        + insult[indexes.insultIndex] 

        return generatedInsult
    } 
  } else {
    console.log('no name given')
  }
}
}


module.exports = helpers