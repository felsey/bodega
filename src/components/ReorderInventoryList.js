import React, { useContext } from 'react';
import { InventoryContext } from '../context/inventoryContext';

function ReorderInventoryList() {
  const { reorder, inventoryItemCardList } = useContext(InventoryContext);

  return (
    <div id='reorder-container'>
      <h2>Reorder</h2>
      <div>{inventoryItemCardList(reorder, 'reorderList')}</div>
    </div>
  );
}

export default ReorderInventoryList;
