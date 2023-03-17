import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Single from "./Single";
import Error  from "./Error";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="Single/:id" element={<Single/>} /> */}
          {/* <Route path="*" element={<Error/>}/>  */}
        </Routes>
    </>
  );
}

export default App;
