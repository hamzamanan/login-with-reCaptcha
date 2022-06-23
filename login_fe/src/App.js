import "./App.css";
// import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes/MainRouter.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
