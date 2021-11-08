const router = require('express').Router();
let User = require('../models/user.model');

// Get all users
router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
})

// Add user
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpswd = req.body.userpswd;

    const newUser = new User({username, useremail, userpswd});

    newUser.save()
    .then(users => res.json('User added'))
    .catch(err => res.status(400).json('Error: '+err));
})

// Get an user
router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+err));
})

// Remove an user
router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted'))
    .catch(err => res.status(400).json('Error: '+err));
})

// Update an user
router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.useremail = req.body.useremail;
        user.userpswd = req.body.userpswd;

        user.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;