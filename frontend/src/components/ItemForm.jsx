// src/components/ItemForm.jsx
import { useEffect, useState } from 'react';
import './ItemForm.css';

export default function ItemForm({ onCreate, onUpdate, editItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Jika editItem berubah, isi form-nya
  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setDescription(editItem.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description };

    if (editItem) {
      onUpdate({ ...editItem, ...data });
    } else {
      onCreate(data);
    }

    // Reset form setelah submit
    setName('');
    setDescription('');
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>{editItem ? 'Edit Item' : 'Add New Item'}</h2>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        data-cy="item-name"
      />
      <textarea
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        data-cy="item-description"
      />
      <button type="submit" data-cy="item-submit">
        {editItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
}
