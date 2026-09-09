import React, { createContext, useContext, useState } from 'react';
import { MenuItem } from '../types';

interface MenuContextValue {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  // This array is the single source of truth for the menu, shared
  // between the Home Screen (displays it) and the Manage Menu Screen
  // (adds to it) -- matching Figure 4's "Menu item saved to menu array" step.
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (newItem: Omit<MenuItem, 'id'>) => {
    const itemWithId: MenuItem = { ...newItem, id: Date.now().toString() };
    setItems((prev) => [...prev, itemWithId]);
  };

  return (
    <MenuContext.Provider value={{ items, addItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu(): MenuContextValue {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
