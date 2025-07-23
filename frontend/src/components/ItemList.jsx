// src/components/ItemList.jsx
import './ItemList.css';

export default function ItemList({ items, onEdit, onDelete }) {
  if (!items.length) {
    return <p className="empty-message">No items yet.</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item-card" key={item.id} data-cy={`item-${item.id}`}>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="actions">
            <button
              className="edit-btn"
              onClick={() => onEdit(item)}
              data-cy={`edit-button-${item.id}`}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(item.id)}
              data-cy={`delete-button-${item.id}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
