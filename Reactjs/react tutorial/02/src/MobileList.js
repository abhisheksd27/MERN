import React from 'react';
import './MobileList.css'


const MobileList = (props) => {
    const {image,title,price}=props;

   
    return (
        <div className='main'>
            {console.log(props.image)}
            {props.greet}
            <img className='img' src={image}></img>
            <div>
                <h2>{title}</h2>
                <p>${price}</p>
                <button>Add to cart Now</button>
            </div>
        </div>
    );
}

export default MobileList;
