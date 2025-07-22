function ItemList({ items, onEdit, onDelete }) {
  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 && <p>No items yet.</p>}
      {items.map((item) => (
        <div className="item" key={item._id}>
          <span>{item.name}</span>
          <div>
            <button onClick={() => onEdit(item)} style={{ marginRight: '0.5rem' }}>Edit</button>
            <button onClick={() => onDelete(item._id)} style={{ backgroundColor: '#f44336' }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
