const express = require('express')
const router = express.Router()
const Utils = require('./../utils')
const User = require('./../models/User')

// GET- get all photographers ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  User.find({ accessLevel: 2 })
    .then(users => {
      if(users == null){
        return res.status(404).json({
          message: "No photographer found"
        })
      }
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting photographer"
      })
    })  
})

// export
module.exports = router
