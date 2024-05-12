import React, { useState } from 'react';

function App() {
  // Define a state variable for the input value and its setter function
  const [inputValue, setInputValue] = useState('');
  const [display,setdisplay] =useState(false)
  const [count,setCount] =useState(false)
  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
      if(inputValue.length >= 2){
        setdisplay(true)
      }
  }

  // Function to update the displayedValue when the button is clicked
  const updateDisplayedValue = () => {
     setCount(!count)
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={updateDisplayedValue} disabled={!display}>Display Input Value</button>
       <p>display:{display}</p>
       {count && <input type="text"/>}
    </div>
  );
}

export default App;
