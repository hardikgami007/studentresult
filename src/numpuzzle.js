import { useEffect, useState } from 'react';
import './App.css';


function Numpuzzle() {
  const [no,setno] = useState([])
  const [a,seta] =useState(0)
  const btn = (e) => {
          // var dd = [...no];
          // dd[n]=(no);
          // setno(no)
          setno(Math.floor(Math.random()*8)+1);    
        }
   
  useEffect(()=>{
    btn();
  },[no])

  // const random = () => {
  //   setno(Math.floor(Math.random()*8)+1);
  // }
 
  return (
    <>
    <div class="puz">
        <button className='btn' id="n1" onClick={() => btn(0)} value={no[0]}>   </button>
        <button className='btn' id="n2" onClick={() => btn(1)} value={no[1]}>{no}</button>
        <button className='btn' id="n3" onClick={() => btn(2)} value={no[2]}>{no}</button>
        <button className='btn' id="n4" onClick={() => btn(3)} value={no[3]}>{no}</button>
        <button className='btn' id="n5" onClick={() => btn(4)} value={no[4]}>{no}</button>
        <button className='btn' id="n6" onClick={() => btn(5)} value={no[5]}>{no}</button>
        <button className='btn' id="n7" onClick={() => btn(6)} value={no[6]}>{no}</button>
        <button className='btn' id="n8" onClick={() => btn(7)} value={no[7]}>{no}</button>
        <button className='btn' id="n9" onClick={() => btn(8)} value={no[8]}>{no}</button>
    </div> 
    {/* <button onclick={restart()} id="restart">Restart</button> */}
   
    
  {/* <h1 id="win"></h1> */}

  
    </>
  );
}

export default Numpuzzle;