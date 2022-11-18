import React from 'react';

function Product({product,onRemove}) {

  return (
    <>
      <ul className="product_list">
        <li>
          <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt=""/>
          <p>상품명 : {product.name}</p>
          <p>가격 : {product.price}</p>
          <p>설명 : {product.content}</p>
          <p><input type="button" value="데이터 삭제" id='clear' onClick={()=>onRemove(product.id)}/></p>
        </li>
      </ul> 
    </>
  );
}

export default Product;