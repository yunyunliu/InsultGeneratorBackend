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
      niceQuotesIndex: getRandomIndex(niceQuotes),
    }
    return indexes
  },
  // generateInsult: indexes => {
  //   const insultType = indexes.type
  //   let insult = ''
  //   switch (insultType) {
  //     case 0: // name + descriptorAfter + predicate...
  //       id += indexesObj.descriptorAfterIndex + indexesObj.predicateIndex + indexesObj.insultIndex
  //       console.log(id)
  //       if (Math.random() > .5) {
  //         id += indexesObj.kickerIndex
  //       }
  //       console.log(id)
  //       return id
  //     case 1: // descriptorBefore + name + predicate ...
  //       id += indexesObj.descriptorBeforeIndex + indexesObj.predicateIndex + indexesObj.insultIndex
  //       if (Math.random() > .5) {
  //         id += indexesObj.kickerIndex
  //         console.log(id)
  //       }
  //       console.log(id)
  //       return id
  //     case 2: // name + predicate + insult
  //       id += indexesObj.predicateIndex + indexesObj.insultIndex
  //       if (Math.random() > .5) {
  //         id += indexesObj.kickerIndex
  //       }
  //       console.log(id)
  //       return id
  //     case 3: // descriptorBefore + name + descriptorAfter + ...
  //       id += indexesObj.descriptorBeforeIndex + indexesObj.descriptorAfterIndex + indexesObj.predicateIndex + indexesObj.insultIndex 
  //       if (Math.random() > .5) {
  //         id += indexesObj.kickerIndex
  //       }
  //       console.log(id)
  //       return id
  //     case 4: // subjectInMiddle[0] + name + subjectInMiddle[1] + ...
  //       id += indexesObj.subjectInMiddleIndex + indexesObj.predicateIndex + indexesObj.insultIndex
  //       if (Math.random() > .5) {
  //         id += indexesObj.kickerIndex
  //       }
  //       console.log(id)
  //       return id
  //   }
  // },
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