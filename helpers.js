const { descriptor_after, descriptor_before, subject_in_middle, predicate, insult, kicker, niceQuotes } = require('./trump')

const templates = {
  0: [descriptor_before, predicate, insult],
  1: [descriptor_before, predicate, insult, kicker],
  2: [descriptor_after, predicate, insult],
  3: [descriptor_after, predicate, insult, kicker],
  4: [descriptor_before, descriptor_after, predicate, insult],
  5: [descriptor_before, descriptor_after, predicate, insult, kicker],
  6: [predicate, insult],
  7: [predicate, insult, kicker],
  8: [predicate, insult, kicker],
  9: [predicate, insult, kicker],
}
const helpers = {
  generateIndexes: () => {
    const insultType = Math.floor(Math.random() * Math.floor(10))
    const getRandomIndex = component => {
      const randomIndex = Math.floor(Math.random() * Math.floor(component.length))
      return randomIndex.toString()
    }
    switch (insultType) {
      case 0:
        return {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
      case 1: 
        return {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
      case 2: 
        return {
          insultType,
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
      case 3: 
        return {
          insultType,
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 4: 
        return {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 5: 
        return {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 6: 
        return {
          insultType,
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 7: 
        return {
          insultType,
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 8: 
        return {
          insultType,
          subjectInMiddleIndex: getRandomIndex(subject_in_middle),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
        case 9: 
        return {
          insultType,
          subjectInMiddleIndex: getRandomIndex(subject_in_middle),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker),
          niceQuotesIndex: getRandomIndex(niceQuotes)
        }
    }
  },
  generateId: indexes => {
    let id;
    switch (indexes.insultType) {
      case 0:
        id = `${indexes.insultType},
        ${indexes.descriptorBeforeIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.niceQuotesIndex}`
        break
      case 1:
        id = `${indexes.insultType},
        ${indexes.descriptorBeforeIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.kickerIndex},
        ${indexes.niceQuotesIndex}`
        break 
      case 2:
        id = `${indexes.insultType},
        ${indexes.descriptorAfterIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.niceQuotesIndex}`
        break
      case 3:
        id = `${indexes.insultType},
        ${indexes.descriptorAfterIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.kickerIndex},
        ${indexes.niceQuotesIndex}`
        break
      case 4:
        id = `${indexes.insultType},
        ${indexes.descriptorBeforeIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.niceQuotesIndex}`
        break
      case 5:
        id = `${indexes.insultType},
        ${indexes.descriptorBeforeIndex},
        ${indexes.descriptorAfterIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.kickerIndex},
        ${indexes.niceQuotesIndex}`
      break 
      case 6:
        id = `${indexes.insultType},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.niceQuotesIndex}`
        break 
      case 7:
        id = `${indexes.insultType},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.kickerIndex},
        ${indexes.niceQuotesIndex}`
        break 
      case 8:
        id = `${indexes.insultType},
        ${indexes.subjectInMiddleIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.niceQuotesIndex}`
        break
      case 9:
        id = `${indexes.insultType},
        ${indexes.subjectInMiddleIndex},
        ${indexes.predicateIndex},
        ${indexes.insultIndex},
        ${indexes.kickerIndex},
        ${indexes.niceQuotesIndex}`
        break  
      }
  },
  encodeId: id => {
    let hexId = ''
    for (let i = 0; i < id.length; i+=1) {
      hexId += '' + id.charCodeAt(i).toString(16)
    }
    return hexId
  },
  decodeId: hexId => {
    let str = ''
    for (let i = 0; i < hexId.length; i +=2) {
      const charCode = parseInt(hexId.substr(i, 2), 16)
      str += String.fromCharCode(charCode)
    }
    return str
  },
  buildInsult: (name, decodedId) => {
    const id = decodedId.split(',') // array
    const numbers = id.map(i => parseInt(i))
    const indexes = numbers.slice(1)
    
    let insult;
    if (name) {
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
      if (name === 'Donald' || name === 'Trump') {
        const niceIndex = numbers.length - 1
        insult = name + niceQuotes[niceIndex]
        return insult
      } 
    }
   
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