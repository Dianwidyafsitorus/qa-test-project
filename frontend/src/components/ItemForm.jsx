import { useState, useEffect } from 'react';

function ItemForm({ onSubmit, selectedItem, onCancel }) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
    } else {
      setName('');
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">{selectedItem ? 'Update' : 'Add'} Item</button>
      {selectedItem && (
        <button type="button" onClick={onCancel} style={{ backgroundColor: '#ccc', marginTop: '0.5rem' }}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ItemForm;
