import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import Check from "./Check";

function Routing() {
  return (
    <div className="container">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/check" element={<Check/>}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}
export default Routing;