import './App.css';
import Home from './components/Home/Home';
import SlidingText from './components/SlidingText/SlidingText';
import React, { useRef ,useEffect } from 'react';

function App() {
  const cursorRef = useRef(null);
  const cursorBlurRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBlur = cursorBlurRef.current;
    
    document.addEventListener("mousemove", (e) => {
      // cursor.style.left = e.pageX + "px";
      // cursor.style.top = e.pageY + "px";
      // cursorBlur.style.left = e.pageX-100 + "px";
      // cursorBlur.style.top = e.pageY -100 + "px";

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorBlur.style.left = e.clientX-100 + "px";
      cursorBlur.style.top = e.clientY -100 + "px";
    });
  }, []);
  
  return (
    <>
      <div id="cursor" ref={cursorRef}>
        <div id="cursor-blur" ref={cursorBlurRef}></div>
      </div>
      <Home></Home>
      <SlidingText></SlidingText>
    </>
  );
}

export default App;
