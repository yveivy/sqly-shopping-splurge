const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [ { model: Product, as: 'products', through: { model: ProductTag,attributes: []}}] 
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching tags');
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [ { model: Product, as: 'products', through: { model: ProductTag,attributes: []}}] 
    });
    if(!tag) {
      return res.status(404).send('Tag not found');
    }
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching the tag')
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
    
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while creating the tag');
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { tag_id: req.params.id}, 
    });
    res.json(updatedTag);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the tag');
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: { tag_id: req.params.id},
  
    });
    res.json(deletedTag);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while deleting the tag');
  }
});

module.exports = router;
