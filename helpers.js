const { descriptor_after, descriptor_before, subject_in_middle, predicate, insult, kicker, niceQuotes } = require('./trump')

const helpers = {
  getRandomIndex: component => {
    return Math.floor(Math.random() * Math.floor(component.length))
  },
  generateInsult: name => {
    const randomDescriptorAfter = descriptor_after[helpers.getRandomIndex(descriptor_after)]
    const randomDescriptorBefore = descriptor_before[helpers.getRandomIndex(descriptor_before)]
    const randomPredicate = predicate[helpers.getRandomIndex(predicate)]
    const randomInsult = insult[helpers.getRandomIndex(insult)]
    const randomKicker = kicker[helpers.getRandomIndex(kicker)]
    const randomSubjectInMiddle = subject_in_middle[helpers.getRandomIndex(subject_in_middle)]
   
    if (name) {
      console.log(name)
      const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
      console.log(formattedName)
      let generatedInsult;
      if (formattedName === 'Donald' || formattedName === 'Trump') {
        generatedInsult = niceQuotes[helpers.getRandomIndex(niceQuotes)]
      } else {
        const insultType = Math.floor(Math.random() * Math.floor(4))
        console.log(insultType)
     
        switch (insultType) {
          case 0:
            generatedInsult =  formattedName + randomDescriptorAfter + randomPredicate + randomInsult
            if (Math.random() > .5) {
                generatedInsult += randomKicker
              }
            break
          case 1:
            generatedInsult = randomDescriptorBefore + formattedName + randomPredicate + randomInsult
            if (Math.random() > .5) {
              generatedInsult += randomKicker
            }
            break
          case 2:
            generatedInsult = formattedName + randomPredicate + randomInsult
            if (Math.random() > .5) {
              generatedInsult += randomKicker
            }
            break
          case 3:
            generatedInsult = randomDescriptorBefore + formattedName + randomDescriptorAfter + randomPredicate + randomInsult
            if (Math.random() > .5) {
              generatedInsult += randomKicker
            }
            break
          case 4: 
            generatedInsult = randomSubjectInMiddle[0] + formattedName + randomSubjectInMiddle[1] + formattedName + randomPredicate + randomInsult
            if (Math.random() > .5) {
              generatedInsult += randomKicker
            }
            break
        }
        return generatedInsult
      } 
    } else {
      console.log('no name given')
    }
  }
}


module.exports = helpers