// import Navbar from "./component/Navbar";
// import NavbarCBC from "./component/NavbarCBC";
// import States from "./states/fbc/States";
// import Counter from "./states/Counter"
// import Test from "./states/fbc/Test";
// import StatesINCBC from "./states/cbc/StatesINCBC";
// import { Parent } from "./props/Parent";
// import { PropsDrillingParent } from "./propsdrilling/PropsDrillingParent";

import { useState } from "react";
// import { LifeCycle } from "./LIfecycle/LifeCycle";
// import SideEffects from "./useeffect/SideEffects";
// import { SideEffects2 } from "./useeffect/SideEffects2";
// import { FechApi } from "./useeffect/FechApi";
// import { FetchApi2 } from "./useeffect/FetchApi2";
import { ContextParent } from "./context/ContextParent";


// import { UnControlledForms } from "./forms/UnControlledForms";
// import { TodoWrapper } from "./todoApp/TodoWrapper";

// import { ControlledForm2 } from "./forms/ControlledForm2";

// import { ControlledForms1 } from "./forms/ControlledForms1";

// import { Profile } from "./images/Profile";
// import { Footer } from "./reactCss/Footer";
// import { FlipkartNav } from "./task1/FlipkartNav";
// import { Component } from 'react';
// InlineCSS from "./reactCss/InlineCSS";



const App = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      {/* <Navbar/>
        <h2> I am App component</h2>,
        <NavbarCBC/>

        <h2>states</h2>
        <States/>
        <Counter/> */}

      {/* <Test/> */}
      {/* <StatesINCBC></StatesINCBC> */}
      {/* <Parent/> */}

      {/* <h1>Propsdriling </h1> */}
      {/* <PropsDrillingParent/> */}
      {/* <h1>Css in React</h1> */}

      {/* <InlineCSS/> */}
      {/* <h2>CSS  module</h2> */}
      {/* <Footer/>

        <Profile/> */}

      {/* <FlipkartNav/> */}
      {/* <ControlledForms1/> */}

      {/* <ControlledForm2/> */}
      {/* <TodoWrapper/> */}
      {/* <UnControlledForms /> */}
      {/* <button onClick={() => setToggle(!toggle)} style={{ background: "red" }}>
        {" "}
        toggle switch
      </button> */}
      {/* {toggle ? <LifeCycle /> : <h1>No Component</h1>} */}

      {/* <SideEffects/> */}

      {/* <button onClick={()=>setToggle(!toggle)}>toggle me</button>
      {toggle ? <SideEffects2/>:<h1>No Component</h1>} */}
{/* <FechApi/> */}
{/* <FetchApi2/> */}
<ContextParent/>

    </div>
  );
};

export default App;
