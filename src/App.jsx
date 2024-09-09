import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="barcode">
        <h1 className="title">학생증의 바코드를<br/>리더기로 스캔해주세요.</h1>

        <div className="box">

          <div className="keyPad">

            <div className="fir-pin">
              <span className="number">1</span>
              <span className="number">2</span>
              <span className="number">3</span>
            </div>
            <div className="sen-pin">
              <span className="number">4</span>
              <span className="number">5</span>
              <span className="number">6</span>
            </div>
              <span className="number">7</span>

            </div>

            <div className="inputs">
              
              <form className="students">
              <h2>학생증번호</h2>
              <input type="password" className="student-number" placeholder="학생증을 리더기에 스캔해주세요"></input>
              </form>

              <form className="pins">
              <h2>PIN 번호</h2>
              <input type="password" className="pin-number" placeholder="PIN 번호를 입력해주세요"></input>
              </form>
              
              <button type="submit" className="submit-button">확인</button>

            </div>
        </div>

        </div>
    </div>
  );
}
export default App;