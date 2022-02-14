import React, { useState, useEffect, useRef } from "react";
import ReactPageScroller from 'react-page-scroller';
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Introduce from "./components/Introduce";
import Project from "./components/Project";

function App() {
 return(
   <ReactPageScroller
   animationTimer={700}
   animationTimerBuffer={500}
   pageOnChange={(e)=>{console.log(e)}}>
     <Intro></Intro>
     <Introduce></Introduce>
     <Project></Project>
     <Contact></Contact>
   </ReactPageScroller>
 )
}

export default App;