import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>Home  Category: <span style={{color:'red'}}>{category}</span>  </h1>
        </div>
    );
};

export default Home;