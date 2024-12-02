import Navbar from "./component/Navbar";
import NavbarCBC from "./component/NavbarCBC";
import States from "./states/fbc/States";
import Counter from "./states/Counter"


const App=()=>{
    return (
        <div>
            <Navbar/>
        <h2> I am App component</h2>,
        <NavbarCBC/>

        <h2>states</h2>
        <States/>
        <Counter/>
        


        
    
        </div>
    );

}

export default App;


