import './App.css';
import React, { useState } from 'react';

const Tictactae = () => {
    const [no ,setno] = useState(['','','','','','','','',''])
    const [a,seta] =useState(0)
    const [result ,setr]=useState()
 

    const btn = (n) => {
     seta(a =>a+ 1 );
        // console.log(a);
        if(a%2==0){
            var dd = [...no];
            dd[n]='X';
            // alert(n)
            setno(dd)
        }
        else{
            var dd = [...no];
        dd[n]='O';
        // alert(n)
        setno(dd)
        }; 
        win();      
    }
    const win = () => {
        if(no[0]=='X' && no[1]=='X' && no[2]=='X' ||
           no[3]=='X' && no[4]=='X' && no[5]=='X' ||
           no[6]=='X' && no[7]=='X' && no[8]=='X' ||
           no[0]=='X' && no[3]=='X' && no[6]=='X' ||
           no[1]=='X' && no[4]=='X' && no[7]=='X' ||
           no[2]=='X' && no[5]=='X' && no[8]=='X' ||
           no[0]=='X' && no[4]=='X' && no[8]=='X' ||
           no[2]=='X' && no[4]=='X' && no[6]=='X' )
        {
            setr('Player X winner')
        }
        else if(no[0]=='O' && no[1]=='O' && no[2]=='O' ||
           no[3]=='O' && no[4]=='O' && no[5]=='O' ||
           no[6]=='O' && no[7]=='O' && no[8]=='O' ||
           no[0]=='O' && no[3]=='O' && no[6]=='O' ||
           no[1]=='O' && no[4]=='O' && no[7]=='O' ||
           no[2]=='O' && no[5]=='O' && no[8]=='O' ||
           no[0]=='O' && no[4]=='O' && no[8]=='O' ||
           no[2]=='O' && no[4]=='O' && no[6]=='O' )
        {
            setr('Player O winner')
        }
    
    }
    const reastart = () => {
        setno(' ')
    }
    
    return(
        <>
            {/* <h2 id="h2">Player {no}  turn</h2> */}
            <div class="row">
                <input type="button" id="btn1"  class="btn" onClick={() => btn(0)} value={no[0]}/>
                <input type="button" id="btn2"  class="btn" onClick={() => btn(1)} value={no[1]}/>
                <input type="button" id="btn3"  class="btn" onClick={() => btn(2)} value={no[2]}/>
                <input type="button" id="btn4"  class="btn" onClick={() => btn(3)} value={no[3]}/>
                <input type="button" id="btn5"  class="btn" onClick={() => btn(4)} value={no[4]}/>
                <input type="button" id="btn6"  class="btn" onClick={() => btn(5)} value={no[5]}/>
                <input type="button" id="btn7"  class="btn" onClick={() => btn(6)} value={no[6]}/>
                <input type="button" id="btn8"  class="btn" onClick={() => btn(7)} value={no[7]}/>
                <input type="button" id="btn9"  class="btn" onClick={() => btn(8)} value={no[8]}/>
            </div>
            <h1>{result}</h1>
            <br/>
        <button value="Restart" class="restart" id="restart" onClick={reastart()}> Restart</button>
       
        </>
    );
}


export default Tictactae;