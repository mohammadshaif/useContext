import React from 'react';

const CategoryDetail = (props) => {
    const {img,name}= props.product
    console.log(name);
    return (
        <div >
<img style={{"width":"250px","height":"250px"}} src={img} alt=""/>
<h1>{name} </h1>
        </div>
    );
};

export default CategoryDetail;