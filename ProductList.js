import React, {useRef, useState} from 'react';
import Product from './Product';
// import dummy from './db/product.json';
import './css/style.css';
import CreateProduct from './CreateProduct';

function ProductList() {

  const [products, setProducts] = useState ([
    {
      id:1, 
      image:"img1.png", name:"[핫플레이스관광] 괌 리가로얄라구나 오션뷰룸", 
      price:"699,000",
      content:"괌 호텔. 가장 저렴한 숙소를 찾아보세요. 최저가 보장. 빠르고 간편하게, 지금 바로 호텔스컴바인으로 최저가 검색하고 예약하세요! "
    },
    {
      id:2,
      image:"img2.png",name:"사이판 크라운 플라자 리조트 스탠다드 마운틴뷰 4/5/6일",
      price:"878,600",
      content:"모던한 인테리어로 레노베이션한 스탠다드 마운틴 뷰 룸에서 투몬 시내와 마운틴 뷰를 감상해 보시기 바랍니다. 지금 예약하세요!"
    },
    {
      id:3,
      image:"img3.png",
      name:"괌 두짓타니 디럭스오션프론트 3박4일",
      price:"1,136,000",
      content:"아고다 두짓타니 괌 리조트 특가 상품. 투숙하고 싶었던 빌라 실제 이용후기 확인하기!"
    },
    {
      id:4,
      image:"img4.jpg",
      name:"괌 PIC - 괌최대워터파크이용 4/5/6일",
      price:"929,000",
      content:"이용시간은 오전10시부터 오후5시까지 운영하며 매주 수요일은 휴무입니다. 입장 시 지급해 드리는 손목밴드(Wristband)는 항상 차고 계셔야 합니다. 외부 음식 반입은 금지이며, 타자 워터파크내 위치한 Tarzana 레스토랑을 이용해주시면 됩니다."
    },
    {
      id:5,
      image:"img5.png",
      name:"사이판 월드리조트 슈페리어룸 4/5일 무제한 워터파크",
      price:"626,800",
      content:"월드리조트의 객실은 슈페리어룸 < 디럭스룸 < 로얄 디럭스룸 < 스위트룸 오늘은 그 중에서도 가장 기본객실인 '슈페리어 객실'을 돌아보려고 합니다."
    },
    {
      id:6,
      image:"img6.png",
      name:"괌 온워드 4/5/6일",
      price:"644,000",
      content:"지금 바로 아고다®에서 예약하고 요금 대폭 할인받기! 베스트 요금 보장. 여행 중 곤란한 상황이 오더라도 연중무휴 이용 가능한 고객 서비스. 최대 80% 할인."
    },
    {
      id:7,
      image:"img7.png",
      name:"사이판 그랜드 브리오리조트 타가 스탠다드룸 4/5일",
      price:"676,800",
      content:"아고다에서 그랜드브리오 리조트 사이판 (Grandvrio Resort Saipan)의 실제 투숙객 이용후기 및 할인 특가를 확인하세요! 최저가 보장제 및 예약 무료 취소 가능."
    },
    {
      id:8,
      image:"img8.png",
      name:"코럴 오션 리조트 사이판 디럭스룸 4/5일",
      price:"709,000",
      content:"사이판 코럴 오션 리조트 디럭스룸 4일 (제주항공·티웨이항공) · 특전1. COR풀파티 포함 · 특전2. NO팁! · "
    },
    {
      id:9,
      image:"img9.png",
      name:"괌 온워드 4/5/6일",
      price:"644,4000",
      content:"온 워드 비치 리조트는 '치유 x 활성화'를 모두 이루어질 호텔입니다. 워터 파크는 마이크로 최대급! 다양한 해양 스포츠를 활성화, 해양 스포츠를 즐긴 후에 느긋한"
    },
    {
      id:10,
      image:"img10.png",
      name:"괌 더 츠바키타워 4/5/6일",
      price:"1,233,000",
      content:" 괌의 역사와 전설에 영감을 받은 더 츠바키 타워는 괌의 다양한 면모를 담고 있습니다. 괌 전통성과 맞닿은 고급스러움, 스토리텔링"
    },
    {
      id:11,
      image:"img11.png",
      name:"괌 두짓타니 2박 + 츠바키 2박",
      price:"1,496,000",
      content:"아고다에서 두짓타니 괌 리조트 (Dusit Thani Guam Resort)의 실제 투숙객 ... 객실 크기: 153m²; 전망: 오션뷰; 더블베드 2개 & 킹베드 1개"
    },
    {
      id:12,
      image:"img12.png",
      name:"괌 두짓타니 4/5/6일",
      price:"956,000",
      content:"괌 두짓타니 리조트 호텔 정보제공 및 예약 전문사이트. ... 세계적인 두짓타니 그룹의 호텔로 괌의 호텔 중 최신식의 현대적이고 깔끔"
    }
  ]);

  const nextId = useRef(12);

  //입력상자에서 사용할 값을 state로 관리
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    price: "",
    content:""
  });

  const onRemove =(id) =>{
    setProducts(products.filter((product) => product.id !== id));
  }

  //비구조화 할당 - state값을 각각 변수에 담기
  const { image, name, price,content} = inputs;

  //데이터 변경함수
  const onDataChange = (e) => {
    //여기서의 name과 value는 값이 변경되는 input태그의 속성을 비구조화할당
    const { name, value } = e.target;

    //state값 변경
    setInputs({
      ...inputs, //변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴
      [name]: value //내부에서 밖의 변수를 속성명으로 사용시 [변수명]
    });
  };

  const onCreate=() => {
    //새롭게 배열 데이터를 추가하는 함수
    const product = {
      id: nextId.current,
      image,
      name,
      price,
      content
    };
    setProducts([...products, product]);

    setInputs({
      image: "",
      name: "",
      price: "",
      content:""
    });
    nextId.current += 1;
  };

  

  return (
    <>
    <section>

    <div className='header'>

    <div className='create'>
    <h2>상품 데이터 입력/출력/삭제 하기</h2>
    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} id="logo" />
      <CreateProduct 
        image={image} 
        name={name} 
        price={price} 
        content={content}
        onDataChange={onDataChange} 
        onCreate={onCreate} 
        />
        </div>
        </div>

      {/* 1번 방법 */}
      {products.map( product => (
        <Product product={ product } key={ product.id } onRemove={onRemove} />
      ))}

      {/* 2번방법 */}
    {/* {dummy.products.map((product, index) => (
        <Product product={product} key={index}/>
      ))} */}

    </section>
    </>
  );
}

export default ProductList;