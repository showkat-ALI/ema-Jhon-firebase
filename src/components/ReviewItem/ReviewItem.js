import React from 'react';

const ReviewItem = (props) => {
    const{name,price,quantity,img,key}= props.product
    const{handleRemove}=props
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />

            </div>
            <div>
            <h2 className="product-name">{name}</h2>
            <p> price: {price}</p>
            <p>quantity: {quantity}</p>
            <button onClick={
                ()=>{
                    handleRemove(key)
                }

            } className="btn btn-regular">Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;