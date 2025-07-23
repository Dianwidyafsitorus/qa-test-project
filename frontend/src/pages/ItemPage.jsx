// src/pages/ItemPage.jsx
import { useEffect, useState } from 'react';
import { getItems, createItem, updateItem, deleteItem } from '../api/api';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';
import './ItemPage.css';

function ItemPage() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (err) {
      console.error('Failed to load items:', err);
    }
  };

  const handleCreate = async (data) => {
    const res = await createItem(data);
    setItems([...items, res.data]);
  };

  const handleUpdate = async (data) => {
    const res = await updateItem(data.id, data);
    const updated = items.map((item) =>
      item.id === data.id ? res.data : item
    );
    setItems(updated);
    setEditItem(null);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditClick = (item) => {
    setEditItem(item);
  };

  return (
    <div className="item-page">
      <h1>Item Manager</h1>
      <ItemForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        editItem={editItem}
      />
      <ItemList
        items={items}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ItemPage;
