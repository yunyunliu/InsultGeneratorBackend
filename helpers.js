const { descriptor_after, descriptor_before, subject_in_middle, predicate, insult, kicker, niceQuotes } = require('./trump')


const helpers = {
  getRandomIndex: component => {
    const randomIndex = Math.floor(Math.random() * Math.floor(component.length))
    return randomIndex.toString()
  },
  generateIndexes: () => {
    const insultType = Math.floor(Math.random() * Math.floor(10))
    switch (insultType) {
      case 0:
        return {
          insultType,
          descriptorBeforeIndex: helpers.getRandomIndex(descriptor_before),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult)
        }
      case 1: 
        return {
          insultType,
          descriptorBeforeIndex: helpers.getRandomIndex(descriptor_before),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult),
          kickerIndex: helpers.getRandomIndex(kicker)
        }
      case 2: 
        return {
          insultType,
          descriptorAfterIndex: helpers.getRandomIndex(descriptor_after),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult)
        }
      case 3: 
        return {
          insultType,
          descriptorAfterIndex: helpers.getRandomIndex(descriptor_after),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult),
          kickerIndex: helpers.getRandomIndex(kicker)
        }
        case 4: 
        return {
          insultType,
          descriptorBeforeIndex: helpers.getRandomIndex(descriptor_before),
          descriptorAfterIndex: helpers.getRandomIndex(descriptor_after),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult)
        }
        case 5: 
        return {
          insultType,
          descriptorBeforeIndex: helpers.getRandomIndex(descriptor_before),
          descriptorAfterIndex: helpers.getRandomIndex(descriptor_after),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult),
          kickerIndex: helpers.getRandomIndex(kicker)
        }
        case 6: 
        return {
          insultType,
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult)
        }
        case 7: 
        return {
          insultType,
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult),
          kickerIndex: helpers.getRandomIndex(kicker)
        }
        case 8: 
        return {
          insultType,
          subjectInMiddleIndex: helpers.getRandomIndex(subject_in_middle),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult)
        }
        case 9: 
        return {
          insultType,
          subjectInMiddleIndex: helpers.getRandomIndex(subject_in_middle),
          predicateIndex: helpers.getRandomIndex(predicate),
          insultIndex: helpers.getRandomIndex(insult),
          kickerIndex: helpers.getRandomIndex(kicker),
        }
    }
  },
  generateId: indexes => {
    let id;
    switch (indexes.insultType) {
      case 0:
        id = indexes.insultType + ',' +
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 1:
        id = indexes.insultType + ',' +
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 2:
        id = indexes.insultType + ',' +
        indexes.descriptorAfterIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 3:
        id = indexes.insultType + ',' +
        indexes.descriptorAfterIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break
      case 4:
        id = indexes.insultType + ',' +
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 5:
        id = indexes.insultType + ',' +
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 6:
        id = indexes.insultType  + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break 
      case 7:
        id = indexes.insultType  + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 8:
        id = indexes.insultType + ',' +
        indexes.subjectInMiddleIndex + ',' + 
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 9:
        id = indexes.insultType + ',' +
        indexes.subjectInMiddleIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break  
      }
      return id
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
  generateCompliment: (formattedName) => {
    const niceIndex = helpers.getRandomIndex(niceQuotes)
    const nice = niceQuotes[niceIndex]
    return formattedName + '! ' + nice
  },
  parseId: (id) => {
    const splitId = id.split(',') 
    const parsed = splitId.map(i => parseInt(i))
    return parsed
  },

  formatName: (name) => {
    const first = name[0].toUpperCase()
    const rest = name.slice(1).toLowerCase()
    return first + rest
  },
  buildInsultHelper: (indexes, template) => {
    const phrases = []
    for (let i = 0; i < template.length; i+=1) {
      let array = template[i]
      let index = indexes[i]
      let phrase = array[index]
      phrases.push(phrase)
    }
    console.log(phrases)
    return phrases

  },
  buildInsult: (name, decodedId) => {
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
    const insultType = decodedId[0] // string
    const insultTemplate = templates.insultType
    const indexes = decodedId.slice(1)
    const indexesAsNumbers = helpers.parseId(indexes)

    if (name) {
      const formatted = helpers.formatName(name)
      if (formatted === 'Donald' || formatted === 'Trump') {
        return helpers.generateCompliment(formatted)
      } 
      return helpers.buildInsultHelper(indexesAsNumbers, insultTemplate)
    
   

  
      // console.log('phrases', phrases)
      // phrases.splice(0, 1, name)
      // const insult = phrases.join()
      // console.log('insult', insult)
    // } else {
    //   console.log('no name given')
    // }
   
  } else {
    console.log('no name given')
  }

  }
}

module.exports = helpers