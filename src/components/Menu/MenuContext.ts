import React from 'react';

interface MenuContextValue {
  close: () => void;
}

const MenuContext = React.createContext<MenuContextValue>({
  close: () => {}
});
export default MenuContext;
