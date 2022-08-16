import React from "react";
import Registration from "./components/Registration/Registration";
import User from "./components/User/UserFetc";
import Counter from "./components/useReducer/Counter";



const App: React.FC = () => {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <Registration/> */}
      <Counter/>
    </div>
  );
}

export default App;
