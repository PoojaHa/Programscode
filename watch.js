import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setCount(0);
    setIsRunning(false);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };


  return (
    <div>
      <div>{count}</div>
    
        <button onClick={start}>Start</button>


          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
      
    </div>
  );
}


import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setCount(0);
    setIsRunning(false);
    setIntervalId(null);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIntervalId(null);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div>
      <div>{count}</div>
      {!isRunning ? (
        <button onClick={start}>Start</button>
      ) : (
        <>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
}
import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutIdRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      runTimeout();
    }
  };

  const reset = () => {
    clearTimeout(timeoutIdRef.current);
    setCount(0);
    setIsRunning(false);
  };

  const stop = () => {
    clearTimeout(timeoutIdRef.current);
    setIsRunning(false);
  };

  const runTimeout = () => {
    timeoutIdRef.current = setTimeout(() => {
      setCount(count => count + 1);
      runTimeout();
    }, 1000);
  };

  return (
    <div>
      <div>{count}</div>
      {!isRunning ? (
        <button onClick={start}>Start</button>
      ) : (
        <>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
}

import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDisabledStart, setIsDisabledStart] = useState(false);
  const [isDisabledStop, setIsDisabledStop] = useState(true);
  const [isDisabledReset, setIsDisabledReset] = useState(true);
  const timeoutIdRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsDisabledStart(true);
      setIsDisabledStop(false);
      setIsDisabledReset(false);
      runTimeout();
    }
  };

  const reset = () => {
    clearTimeout(timeoutIdRef.current);
    setCount(0);
    setIsRunning(false);
    setIsDisabledStart(false);
    setIsDisabledStop(true);
    setIsDisabledReset(true);
  };

  const stop = () => {
    clearTimeout(timeoutIdRef.current);
    setIsRunning(false);
    setIsDisabledStart(false);
    setIsDisabledStop(true);
    setIsDisabledReset(false);
  };

  const runTimeout = () => {
    timeoutIdRef.current = setTimeout(() => {
      setCount(count => count + 1);
      runTimeout();
    }, 1000);
  };

  return (
    <div>
      <div>{count}</div>
      {!isRunning ? (
        <button onClick={start} disabled={isDisabledStart}>
          Start
        </button>
      ) : (
        <>
          <button onClick={stop} disabled={isDisabledStop}>
            Stop
          </button>
          <button onClick={reset} disabled={isDisabledReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count <= 10) {
      const timeoutId = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [count]);

  return <div>{count}</div>;
}


