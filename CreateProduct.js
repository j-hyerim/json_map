import React from 'react';

function CreateProduct({image, name, price, content, onDataChange, onCreate}) {
  const style = {
    width:'600px',
    margin:'20px',
    padding:'10px',
    border:'3px solid #000'
  }
  return (
    <>
      <div className={style}>
        <p>
        <label for='image_name'>이미지 파일명</label>
        <input type="text" name="image" id="image_name"
          // placeholder="이미지 파일명을 입력하세요. 예) 파일명.확장자"
          onChange={onDataChange}
          value={image}
        />
        </p>

        <p>
        <label for='product_name'>상품명</label>
        <input type="text" name="name" id="product_name"
          // placeholder="상품명을 입력하세요. 예) 괌 4박 5일 PIC골드"
          onChange={onDataChange}
          value={name}
        />
        </p>

        <p>
        <label for="price_info">가격정보</label>
        <input type="text" name="price" id="price_info"
          // placeholder="가격정보를 입력하세요. 예) 999,000"
          onChange={onDataChange}
          value={price}
        />
        </p>
        <p>
        <label for="contents">설명</label>
        <input type="text" name="content" id="contents"
          // placeholder="설명을 입력하세요. 예)  최저가 검색하고 예약하세요!"
          onChange={onDataChange}
          value={content}
        />
        </p>

        <p>
          <input type="button" onClick={onCreate} value="데이터 입력" id='data'/>
        </p>

      </div>
    </>
  );
}

export default CreateProduct;