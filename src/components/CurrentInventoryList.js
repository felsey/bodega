import React, { useContext } from 'react';
import { InventoryContext } from '../context/inventoryContext';

function CurrentInventoryList() {
  const { currentInventory, inventoryItemCardList } =
    useContext(InventoryContext);

  return (
    <div id='current-inventory'>
      <h2>Current Inventory</h2>
      <div>{inventoryItemCardList(currentInventory, 'currentInventory')}</div>
    </div>
  );
}

export default CurrentInventoryList;
