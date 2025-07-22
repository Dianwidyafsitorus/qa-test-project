import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function ItemPage() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('http://localhost:3000/items', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setItems(data);
  };

  const handleAddOrUpdate = async (itemData) => {
    if (selectedItem) {
      // update
      await fetch(`http://localhost:3000/items/${selectedItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(itemData),
      });
    } else {
      // create
      await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(itemData),
      });
    }
    setSelectedItem(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchItems();
  };

  return (
    <div>
      <h2>Items Management</h2>
      <ItemForm
        onSubmit={handleAddOrUpdate}
        selectedItem={selectedItem}
        onCancel={() => setSelectedItem(null)}
      />
      <ItemList
        items={items}
        onEdit={(item) => setSelectedItem(item)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ItemPage;
