const { insults, templates } = require('./insultDataSet')
const { descriptor_before,
   descriptor_after,
   subject_in_middle, 
   predicate,
   insult, 
   kicker,
  niceQuotes } = insults

  const getRandomIndex = component => {
    const randomIndex = Math.floor(Math.random() * Math.floor(component.length))
    return randomIndex
  }
  const generateIndexes = () => { // in: -- out: object containing numbers  
    let indexes;
    const insultType = Math.floor(Math.random() * Math.floor(10)) // numberid
    switch (insultType) {
      case 0:
        indexes = {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult)
        }
        break
      case 1: 
        indexes = {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker)
        }
        break
      case 2: 
        indexes = {
          insultType,
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult)
        }
        break
      case 3: 
        indexes = {
          insultType,
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker)
        }
        break
        case 4: 
        indexes = {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult)
        }
        break
        case 5: 
        indexes = {
          insultType,
          descriptorBeforeIndex: getRandomIndex(descriptor_before),
          descriptorAfterIndex: getRandomIndex(descriptor_after),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker)
        }
        break
        case 6: 
        indexes = {
          insultType,
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult)
        }
        break
        case 7: 
        indexes = {
          insultType,
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker)
        }
        break
        case 8: 
        indexes = {
          insultType,
          subjectInMiddleIndex: getRandomIndex(subject_in_middle),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult)
        }
        break
        case 9: 
        indexes = {
          insultType,
          subjectInMiddleIndex: getRandomIndex(subject_in_middle),
          predicateIndex: getRandomIndex(predicate),
          insultIndex: getRandomIndex(insult),
          kickerIndex: getRandomIndex(kicker)
        }
        break
    }
    return indexes 
  }
  const generateId = indexes => { // in: object containing numbers out: string
    let id;
    switch (indexes.insultType) {
      case 0: // descriptor_before-predicate-insult 
        id = '' + indexes.insultType + ',' + 
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 1: // descriptor_before-predicate-insult-kicker
        id = '' + indexes.insultType + ',' + 
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 2://  descriptor_after-predicate-insult 
        id = '' + indexes.insultType + ',' + 
        indexes.descriptorAfterIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 3: //  descriptor_after-predicate-insult-kicker
        id = '' + indexes.insultType + ',' + 
        indexes.descriptorAfterIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break
      case 4: // descriptor_before-descriptor_after-predicate-insult 
        id = '' + indexes.insultType + ',' + 
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 5:  // descriptor_before-descriptor_after-predicate-insult-kicker 
        id = '' + indexes.insultType + ',' +
        indexes.descriptorBeforeIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 6: // predicate-insult
        id = '' + indexes.insultType  + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break 
      case 7: // predicate-insult-kicker 
        id = '' + indexes.insultType  + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break 
      case 8: // subjectInMiddleIndex-predicate-insult
        id = '' + indexes.insultType + ',' +
        indexes.subjectInMiddleIndex + ',' + 
        indexes.predicateIndex + ',' +
        indexes.insultIndex
        break
      case 9: // subjectInMiddleIndex-predicate-insult-kicker
        id = '' + indexes.insultType + ',' +
        indexes.subjectInMiddleIndex + ',' +
        indexes.predicateIndex + ',' +
        indexes.insultIndex + ',' +
        indexes.kickerIndex
        break  
      }
      return id // string
  }
  const encodeId = id => { // in: string out: string
    let hexId = ''
    for (let i = 0; i < id.length; i+=1) {
      hexId += '' + id.charCodeAt(i).toString(16)
    }
    return hexId
  }
  const decodeId = hexId => { // in: string out: string
    let str = ''
    for (let i = 0; i < hexId.length; i +=2) {
      const charCode = parseInt(hexId.substr(i, 2), 16)
      str += String.fromCharCode(charCode)
    }
    return str
  }
  const parseId = (id) => { // in: string out: array of numbers
    const splitId = id.split(',') 
    const parsed = splitId.map(i => parseInt(i))
    return parsed
  }
  const generateCompliment = (formattedName) => { // in: string out: string
    const niceIndex = getRandomIndex(niceQuotes)
    const nice = niceQuotes[niceIndex]
    return formattedName + '! ' + nice
  }
  const formatName = (name) => { // in: string out: string
    const first = name[0].toUpperCase()
    const rest = name.slice(1).toLowerCase()
    return first + rest
  }
  const buildInsultHelper = (indexes, template) => { // in: (array of numbers, array of arrays) out: array of strings
    const phrases = []
    for (let i = 0; i < template.length; i+=1) {
      let key = template[i] // string
      let array = insults[key]
      // console.log('name:', key)
      let generatedIndex = indexes[i] // number
      let phrase = array[generatedIndex]
        phrases.push(phrase)
    }
    if (Array.isArray(phrases[0])) {
      const array = phrases[0]
      const subjectInMiddle1 = array[0]
      const subjectInMiddle2 = array[1]
      phrases.splice(0, 2, subjectInMiddle1, subjectInMiddle2)
      return phrases
    }
    return phrases
  }
  const buildInsult = (name, decodedId) => { // in: (string, string) out: string
    const insultType = decodedId[0] // string
    const indexes = decodedId.slice(2) // string
    const indexesAsNumbers = parseId(indexes) // array of numbers

    if (name === 'Donald' || name === 'Trump') {
      return generateCompliment(name)
    } 
    const phrases = buildInsultHelper(indexesAsNumbers, templates[insultType]) // array of strings
    const insult = insertName(insultType, phrases, name)
    return insult.join('')
}
  const insertName = (insultType, phrases, name) => { //string array out: array of strings
    const nameFirst = ['2', '3', '6', '7']
    if (nameFirst.includes(insultType)) {
      phrases.unshift(name)
      return phrases
    } 
    phrases.splice(1, 0, name)
    return phrases
  }


module.exports = { buildInsult, buildInsultHelper, generateId, generateIndexes, encodeId, decodeId, formatName }