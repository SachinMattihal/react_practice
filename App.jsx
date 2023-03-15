import React from "react";
import JSON from "./userdata.json";
import './Global.css'
import Trip from './Trip';

const App = () => {
  return (
   <div>
    <Trip payload={JSON}/>
   </div>
  )
}

export default App