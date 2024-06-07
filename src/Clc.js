
import React, { useState } from 'react'
function Clc() {

  const [no ,setno] = useState('')
  const [s ,sets] = useState('')
  const [no1 ,setno1] = useState('')

  function btn(e){
    setno(no+e.target.value)
  }

  function oper(a)
  {
    sets(a.target.value)
    setno1(no)
    setno('')
  }

  function total(){
    if(s==='+'){
      var sum = parseFloat(no1) + parseFloat(no);
      setno(sum)
    }
    if(s==='-'){
      var sub = parseFloat(no1) - parseFloat(no);
    setno(sub)
    }
    if(s==='*'){
      var mul = parseFloat(no1) * parseFloat(no);
    setno(mul)
    }
    if(s==='/'){
      var div = parseFloat(no1) / parseFloat(no);
    setno(div)
    }
  }
  function delet(d){
    // setno(no(0,no.length-1))
    setno(no.slice(0,-1))
  }
  function clear(){
    setno('')
  }
  return (
      <>
      <div class="div App">
        
        <input  class="text" type="text" id="text"  value={no}  placeholder="0" disabled/>  <br/>
        <br/>
        <div class="div2">
            <button id="btn1" value="1" onClick={btn}>1</button>
            <button id="btn2" value="2" onClick={btn}>2</button>
            <button id="btn3" value="3" onClick={btn}>3</button>
            <button id="btnsum" value="+" onClick={oper}>+</button><br/>

            <button id="btn4" value="4" onClick={btn}>4</button>
            <button id="btn5" value="5" onClick={btn}>5</button>
            <button id="btn6" value="6" onClick={btn}>6</button>
            <button id="btnsub" value="-"  onClick={oper}>-</button><br/>

            <button id="btn7" value="7" onClick={btn}>7</button>
            <button id="btn8" value="8" onClick={btn}>8</button>
            <button id="btn9" value="9" onClick={btn}>9</button>
            <button id="btnmul" value="*"  onClick={oper}>*</button><br/>

            <button id="btnzero" value="0" onClick={btn}>0</button>
            <button id="btndot" value="clear" onClick={btn}>.</button>
            <button id="btndiv" value="/"  onClick={btn}>/</button>
            <button id="btnequal" value="=" onClick={total}>=</button><br/><br/>

            <button id="btnclear" value="clear" onClick={clear}>clear</button>
            <button id="btnclear" value="delet" onClick={delet}>delete</button>
 
        </div>
    </div></>
  );
}

export default Clc;