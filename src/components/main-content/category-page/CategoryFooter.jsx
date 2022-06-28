import { useState } from "react";

import './styles/categoryFooter.scss';

export const CategoryFooter = () => {
    let numbers = [];

    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }

    const [isActive, setIsActive] = useState(4);

    const handleNumber = (e) => {
        const { id } = e.currentTarget.dataset;

        setIsActive(parseInt(id));
    }

    return (
        <footer className='category-page-numbering'>
            <div className="numbering-container">
                {numbers.map((item) => (
                    <div 
                        key={item} 
                        data-id={item} 
                        className={isActive == item ? 'active-number number' : 'number'}
                        onClick={handleNumber}
                    >
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </footer>
    )
}
