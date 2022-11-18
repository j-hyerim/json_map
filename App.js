import React, { Component } from 'react';
import './ref.css';

class App extends Component {
// input 태그의 처음 상태값은 패스워드가 없는상태, 클릭안한상태, 누른적 없는 상태
  state = {
    password :"",
    clicked : false,
    validated : false
  }
  onInputChange = (e)=> {   //사용자가 패스워드를 입력하면 함수가 동작
    this.setState({ 
      password : e.target.value   //현재 입력한 패스워드가 폼에 나옴
    })
  }

  onInputClick = (e) =>{  //사용자가 버튼을 클릭하면
    this.setState({  //현재 상태값을 만들고
      clicked:true,  //클릭이 된 경우만
      validated:this.state.password==='master' //패스워드를 검사하여 검증한다.
    })
    this.input.focus(); //input태그에 초점을 만든다.
  }

  render() {
    return (
      <>
        <h2>DOM조작을 위한 ref(), useRef() 함수</h2>
      <p>ref() : class형 콤포넌트에서 사용하는 DOM조작을 위한 함수</p>
      <p>useRef() : 함수형 콤포넌트에서 사용하는 DOM조작 함수</p>

      <h3>ref()함수</h3>
      <p>- 바닐라자바스크립트나 제이쿼리에서 DOM을 선택할 때는 [getElementById] 혹은 [querySelector]를 사용합니다.</p>
      <p>- 하지만 리액트의 JSX안에서 DOM에 id를 달면 해당 DOM을 렌더링할 때 그대로 전달됩니다. </p>
      <p>- 컴포넌트가 여러개 생성되는 경우 같은 id가 중복되서 에러가 발생될 수 있습니다.</p>
      <p>- 하지만 ref는 전역적으로 작동하지 않고, 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 발생되지 않습니다.</p>

      <dl>
        <dt>DOM을 꼭 사용해야 하는 상황</dt>
        <dd>특정 input에 포커스 주기</dd>
        <dd>스크롤박스 조작하기</dd>
        <dd>Canvas요소에 그림 그리기</dd>
        <dd>기타.....</dd>
      </dl>

      <h3>실습 - 버튼을 클릭하면 입력양식에 초첨처리하기</h3>
      <p>입력양식을 만들고 사용자가 내용을 입력하여 내용이 일치하면 '초록색', 그렇지 않다면 '주황색'이 나오도록 한다.</p>

      <form name="폼이름" method='get/post' action="받을 서버주소">
        <fieldset>
          <legend>폼그룹제목</legend>
          <input type="password" 
          value={this.state.password}
          onChange={this.onInputChange}
          className={this.state.clicked?(this.state.validated?'success':'failure'):""}
          ref={(ref) => this.input = ref}
          />
          
          <input type="button" value="검증하기" onClick={this.onInputClick}
          />
        </fieldset>
      </form>
      {/* 
          삼항조건연산자
          조건식?참인값:거짓값;
      */}
      </>
    );
  }
}

export default App;