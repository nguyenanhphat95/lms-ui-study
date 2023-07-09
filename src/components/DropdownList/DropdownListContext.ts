import React from 'react';

interface DropdownListContextValue {
  value: any;
  onChange: (value: any, label: string) => void;
}

const DropdownListContext = React.createContext<DropdownListContextValue>(null);
export default DropdownListContext;
