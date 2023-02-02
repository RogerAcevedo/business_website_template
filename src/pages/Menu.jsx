import React from 'react'
import '../styles/Menu.css'

// COMPONENTS
import MenuItem from '../components/MenuItem';

// HELPERS
// Use curly braces when we are exporting a variable("const"). to give access
import { MenuList } from '../helpers/MenuList';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu:</h1>
        {/* DISPLAY ALL MENU ITEMS */}
        <div className='menuList'>
            {/* ARRAY THAT LOOPS AND AUTOMATICALLY RENDERS EACH ITEM AS A DIV  */}
            { MenuList.map((menuItem, key) => {
                // PASS PROP VALUES
                return (
                <MenuItem 
                    image={ menuItem.image }
                    name={ menuItem.name}
                    price={menuItem.price} 
                />
                );
            } ) }
        </div>
    </div>
  );
}

export default Menu