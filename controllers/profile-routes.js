const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');

router.get('/', async (req, res) => {
    
        res.status(200).json({ message: 'Connected!' });
         
  });

router.get('/profile', async (req, res) => {
    
        res.status(200).json({ message: 'Connected!' });
         
  });

  router.get('/Match', async (req, res) => {
    try {
      const newUser = await Match.findAll({where:{liker:1}},{
        include:[
           {
              model:User
           },
           {
            model:User
         }, 
        ] 
      });
      res.status(200).json({ newUser });
  
    //   req.session.save(() => {
    //     req.session.userId = newUser.id;
    //     // req.session.email = newUser.email;
    //     // req.session.loggedIn = true;
  
    //     res.json(newUser);
    //   });
    } catch (err) { 
    console.log(err)
    res.status(500).json(err);
    } 
  });
module.exports = router
