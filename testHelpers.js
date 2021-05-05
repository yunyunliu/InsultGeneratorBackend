const { buildInsult, buildInsultHelper, generateId, generateIndexes, encodeId, decodeId } = require('./helpers')
const { templates } = require('./insultDataSet')


const indexesObject = generateIndexes()

const idStr = decodeId('302c34362c36302c3130')
const hex = encodeId(idStr)

/*[ "All ", " does is go on television is talk, talk, talk, but incapable of doing anything. " ]*/

const insult = buildInsult('yunyun', idStr) 

console.log('id:', idStr, 'encode', hex, 'decode again', decodeId(hex),'insult:', insult)







