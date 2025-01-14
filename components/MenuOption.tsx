// components/MenuOption.tsx
import React from 'react';

interface MenuOptionProps {
  title: string;
  content: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default MenuOption;