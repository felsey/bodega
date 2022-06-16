import React, { useContext } from 'react';
import { InventoryContext } from '../context/inventoryContext';

function InventoryItemCard({ item, parentComponent }) {
  const { updateReorderList, removeFromReorderList, deleteItem } =
    useContext(InventoryContext);

  const onButtonClick = () => {
    console.log('deleting');
    deleteItem(item);
    console.log('deleted');
    window.location.reload(false);
  };

  const onCardClick = () => {
    switch (parentComponent) {
      case 'currentInventory':
        updateReorderList(item);
        break;
      case 'reorderList':
        removeFromReorderList(item);
        break;
      default:
        break;
    }
  };

  return (
    <div className='card' onClick={onCardClick}>
      <img src={item.image} alt={item.name}></img>
      <h3>{item.name}</h3>
      <h4>${item.price}</h4>
      <button onClick={onButtonClick}>Delete</button>
    </div>
  );
}

export default InventoryItemCard;
