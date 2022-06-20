import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";

function App() {
const[isClose, setIsClose] =useState(false);
  function onCloseHandler(){
setIsClose(false)
  }
  function onOpenHandler(){
    setIsClose(true)
  }
  return (
    <div>
      <Header onOpen={onOpenHandler}/>
      <Meals/>
    {isClose &&  <Cart onClose ={onCloseHandler}/> }
    </div>
  );
}

export default App;
