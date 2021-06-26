const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');

router.get('/', async (req, res) => {
    try {
      //const newUserData = await User.findByPk(1,{
 /*       include:[
                {
               model:User,through:{
                 User_name, attributes:[]
                  }
                } 
              ] */
      //});
        res.status(200).json({ message: 'Connected!' });
        //res.status(200).json({ newUserData });
         //console.log(newUserData);
  
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

router.get('/profile', async (req, res) => {
    try {
      //const newUserData = await User.findByPk(1,{
 /*       include:[
                {
               model:User,through:{
                 User_name, attributes:[]
                  }
                } 
              ] */
      //});
        res.status(200).json({ message: 'Connected!' });
        //res.status(200).json({ newUserData });
         //console.log(newUserData);
  
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
