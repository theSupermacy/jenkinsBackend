const _ = require('lodash')
const chance = require('chance');


module.exports = {
    allUserController: function(req, res, next) {
      const Chance = new chance() 
      const query = req.query
      const limit = _.get(query, ['limit'], 10)
      const userProfileInformation = {
          name: Chance.name({middle: true}),
          id: Chance.fbid(),
          mobile: Chance.phone({ country: "in", mobile: true })
          ,
          profession: Chance.profession(),
          email: Chance.email(),
          avatar: Chance.avatar(),
          dob: Chance.date()
      }
      const userProfileInformationArray = _.times(limit, userProfileInformation)
      req.data = userProfileInformationArray
      req.status = 200

      return next()

    }
}