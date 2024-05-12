import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [messageFromChild, setMessageFromChild] = useState('');

  // Callback function to receive data from ChildComponent
  const handleDataFromChild = (data) => {
    setMessageFromChild(data);
  };

  return (
    <div>
      <p>Message from Child: {messageFromChild}</p>

      {/* Render the ChildComponent and pass the callback function */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;


//
import React, { useState } from 'react';

function ChildComponent(props) {
  const [inputValue, setInputValue] = useState('');

  // Function to send data to the parent when the button is clicked
  const sendDataToParent = () => {
    props.sendDataToParent(inputValue);
  };

  return (
    <div>
      {/* Input field in the child component */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Button to send data to the parent */}
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
