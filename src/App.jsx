import React from "react";
import "./App.css";
// import App2 from "./App2.jsx";

function App() {
  return (
    <div className="container">
      <div className="barcode">
        <h1 className="title">학생증의 바코드를<br/>리더기로 스캔해주세요.</h1>

        <div className="box">

          <div className="keyPad">

            <div className="pin">
              <button className="number">1</button>
              <button className="number">2</button>
              <button className="number">3</button>
            </div>
            <div className="pin">
              <button className="number">4</button>
              <button className="number">5</button>
              <button className="number">6</button>
            </div>
            <div className="pin">
              <button className="number">7</button>
              <button className="number">8</button>
              <button className="number">9</button>
            </div>
            <div className="for-pin">
              <button className="number">0</button>
            </div>

            </div>

            <div className="inputs">
              
              <form className="students">
              <h2>학생증번호</h2>
              <input type="password" className="student-number" placeholder="학생증을 리더기에 스캔해주세요"></input>
              </form>

              <form className="pins">
              <h2>PIN 번호</h2>
              <input type="password" id="pin-number" placeholder="PIN 번호를 입력해주세요"></input>
              </form>
              
              <button type="submit" className="submit-button" onClick={()=>{}}>확인</button>
            {/* <App2/> */}
            </div>
        </div>

        </div>
    </div>
  );
}
export default App;