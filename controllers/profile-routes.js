const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');

router.get('/', async (req, res) => {
    try {
      const newUserData = await User.findOne({
        where: {
            id: id,
        }
      });
      res.status(200).json({ newUserData });
  
    //   req.session.save(() => {
    //     req.session.userId = newUser.id;
    //     // req.session.email = newUser.email;
    //     // req.session.loggedIn = true;
  
    //     res.json(newUser);
    //   });
    } catch (err) { 
    console.log(err)
    res.status(500).json(err+"MeowMix");
    } 
  });

router.get('/profile', async (req, res) => {
    try {
      const newUserData = await User.findOne({
        where: {
            id: id,
        }
      });
      res.status(200).json({ newUserData });
  
    //   req.session.save(() => {
    //     req.session.userId = newUser.id;
    //     // req.session.email = newUser.email;
    //     // req.session.loggedIn = true;
  
    //     res.json(newUser);
    //   });
    } catch (err) { 
    console.log(err)
    res.status(500).json(err+"Meow");
    } 
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
      res.status(200).json({ newUserData });
  
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
