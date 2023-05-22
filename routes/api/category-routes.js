const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/categories', async (req, res) => {
    // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [Product],

    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching categories');
  }

});

router.get('/categories/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product]

    });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching categories');
  }

});

router.post('/categories', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
    
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while creating the category');
  }
});


router.put('/categories/:id', async (req, res) => {
  // update a category by its id value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id}, 
    });
    res.json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the category');
  }
});

router.delete('/categories/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id},
  
    });
    res.json(deletedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while deleting the   category');
  }

});

module.exports = router;
