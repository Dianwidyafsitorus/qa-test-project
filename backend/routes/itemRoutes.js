const express = require('express');
const router = express.Router();

// Dummy data
let items = [
  { id: 1, name: 'Item A', description: 'Desc A' },
  { id: 2, name: 'Item B', description: 'Desc B' },
];

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// POST new item
router.post('/', (req, res) => {
  const newItem = { ...req.body, id: Date.now() };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// DELETE item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deleted = items.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;
