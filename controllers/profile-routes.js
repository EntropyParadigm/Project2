const router = require('express').Router();
const { Exercise, User, Workout } = require('../models');

router.get('/', async (req, res) => {
    try {
      const newUserData = await User.findByPk(1);
      if (!newUserData) {
      res.status(404).json({ message: 'No profile with ID found' });
      return;
    }
    const profile = newUserData.get({ plain: true });
    res.render('profile', { profile, loggedIn: true });
    
    const profile = profileData.map((user) => user.get({ plain: true }));

    res.render('profile', { profile, loggedIn: true });
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
