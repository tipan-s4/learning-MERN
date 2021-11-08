const router = require('express').Router();
let Shop = require('../models/shop.model');

router.route('/').get((req,res)=>{
    Shop.find()
    .then(shops => res.json(shops))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/add').post((req,res)=>{
    const shopname = req.body.shopname;
    const shopowner = req.body.shopowner;
    const title = req.body.title;
    const description = req.body.description;
    // const likes = Number(req.body.likes);

    const newShop = new Shop({
        shopname,
        shopowner,
        title,
        description
        // likes
    });

    newShop.save()
    .then(shops => res.json('Shop added'))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/:id').get((req,res) => {
    Shop.findById(req.params.id)
    .then(shop => res.json(shop))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/:id').delete((req,res) => {
    Shop.findByIdAndDelete(req.params.id)
    .then(() => res.json('Shop deleted'))
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/update/:id').post((req,res) => {
    Shop.findById(req.params.id)
    .then(shop => {
        shop.shopname = req.body.shopname;
        shop.shopowner = req.body.shopowner;
        shop.title = req.body.title;
        shop.description = req.body.description;

        shop.save()
        .then(() => res.json('Shop updated'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;