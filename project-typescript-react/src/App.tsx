import React from "react";
import Registration from "./components/Registration/Registration";
import User from "./components/User/UserFetc";
import Counter from "./components/useReducer/Counter";
import Index from "./modal";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <Registration/> */}
      {/* <Counter/> */}
      <Index/>
    </div>
  );
}

export default App;
