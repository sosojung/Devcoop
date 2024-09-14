import "./Check.css";
import accept1 from './accept1.png'

function Check() {
  return (
    <div className="container">

      <div className="check-box">
        <img src={accept1}/>
        <h1 className="check1">2108 이예흔 학생</h1>
        <h1 className="check2">잔액 3,780 원 조회되었습니다</h1>
      </div>

    </div>
  );
}
export default Check; 