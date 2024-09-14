import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const id = "2023049";
const password = "123456";

function App() {
  const [pinNumber, setPinNumber] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const navigate = useNavigate();

  const handleStudentChange = (e) => {
    setStudentNumber(e.target.value);
  }

  const handlePinChange = (e) => {
    setPinNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    if(studentNumber === id && pinNumber === password){
      navigate("/check");
    }
    else alert("error");
  };

  return (
    <div className="container">
      <div className="barcode">
        <h1 className="title">학생증의 바코드를<br/>리더기로 스캔해주세요.</h1>

        <div className="box">

          <div className="keyPad">

            <div className="pin">
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "1"); }}>1</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "2"); }}>2</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "3"); }}>3</button>
            </div>
            <div className="pin">
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "4"); }}>4</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "5"); }}>5</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "6"); }}>6</button>
            </div>
            <div className="pin">
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "7"); }}>7</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "8"); }}>8</button>
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "9"); }}>9</button>
            </div>
            <div className="for-pin">
              <button className="number" onClick={(e) => { setPinNumber((prevPin)=>prevPin + "0"); }}>0</button>
            </div>

            </div>

            <div className="inputs">
              
              <form className="students">
              <h2>학생증번호</h2>
              <input 
              value={studentNumber}
              onChange={handleStudentChange}
              type="text" 
              className="student-number" 
              placeholder="학생증을 리더기에 스캔해주세요"
              />
              </form>

              <form className="pins">
              <h2>PIN 번호</h2>
              <input 
                value={pinNumber}
                onChange={handlePinChange}
                type="password" 
                id="pin-number" 
                placeholder="PIN 번호를 입력해주세요" 
              />
              </form>
              
              <button 
                type="submit" 
                className="submit-button" 
                onClick={handleSubmit}>확인
              </button>
            </div>
        </div>

        </div>
    </div>
  );
}
export default App;