
import './App.css';
import ClassifiedList from './Pages/ClassifiedList';
import AddClassified from './Components/AddClassified';
import { useState } from 'react';


function App() {

  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick} style={{padding:"5px",margin:"20px" ,width:"20%" ,backgroundColor :"#37d2dd"}}>
        {isClicked ? 'Show Shoes' : 'Add Shoes'}
      </button>
      {
        isClicked? <AddClassified/>:<ClassifiedList/>
      }
       
    </div>
  );
}

export default App;
