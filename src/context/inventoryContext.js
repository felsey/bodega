import { createContext, useState, useEffect } from 'react';
import InventoryItemCard from '../components/InventoryItemCard';

export const InventoryContext = createContext({
  inventory: [],
  reorder: [],
});

export const InventoryProvider = ({ children }) => {
  const [currentInventory, setCurrentInventory] = useState([]);
  const [reorder, setReorder] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/inventory')
      .then((response) => response.json())
      .then((data) => {
        setCurrentInventory(data);
      });
  }, []);

  const updateReorderList = (newItem) => {
    const itemCheck = reorder.find((item) => item === newItem);
    if (itemCheck) return;

    const updatedList = [...reorder, newItem];
    setReorder(updatedList);
  };

  const deleteItem = (item) => {
    fetch(`http://localhost:8001/inventory/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    });
  };

  const removeFromReorderList = (item) => {
    const filteredList = reorder.filter((reorderItem) => reorderItem !== item);
    setReorder(filteredList);
  };

  const inventoryItemCardList = (list, parentComponent) => {
    return list.map((item) => (
      <InventoryItemCard
        key={item.id}
        item={item}
        parentComponent={parentComponent}
      />
    ));
  };

  const value = {
    currentInventory,
    setCurrentInventory,
    reorder,
    setReorder,
    updateReorderList,
    inventoryItemCardList,
    removeFromReorderList,
    deleteItem,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};
