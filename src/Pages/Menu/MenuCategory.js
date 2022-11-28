import React from 'react';
import { Link } from 'react-router-dom';

const MenuCategory = ({ category }) => {
    console.log(category)

    return (
        <div>
            <li><Link to={`/menus/${category.id}`} className='border mb-2'>{category.Category}</Link></li>
        </div>
    );
};

export default MenuCategory;