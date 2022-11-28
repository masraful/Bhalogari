import React, { useState } from 'react';
import Menu from '../../Menu/Menu';

const BuyNow = () => {
    const [selectedDate, setSelectDate] = useState(new Date())

    return (
        <div>
            <Menu selectedDate={selectedDate}></Menu>
        </div >
    );
};

export default BuyNow;