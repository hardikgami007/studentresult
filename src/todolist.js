import { useState } from "react";

const Todolist = () =>{
    const [data,setdata] =useState([])
    const [val,setval] =useState('') 
    const [status,setstus]=useState('false') 
    const [id,setid]=useState()  
    function btn(){
        if(status){
            setstus(false)
        }
        else{
            if(val !== ''){
                setdata([...data,val])
                setval('')
            }
        }
        
    }
   const delet = (a) =>{
        const newdata=[];
        for(var j=0;j<data.length;j++){
            if(j!==a){
                newdata.push(data[j])
            }
        }
        setdata(newdata);
      };
    // 
    const update = (a) =>{
       setval=[...data]
    }
       
    
    return(
        <div className="App container">
            <div id="mydiv" class="header">
            <h1> Todo List</h1>
            <input type="text" id="input" onChange={(e) => setval(e.target.value)}/>
            <input type="button" class="btnadd" value={'Add'} onClick={btn}/>
            </div>
        
        <br/>
        <br/>
        <table border={1} cellPadding={5} cellSpacing={0} align="center">
            <thead >
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Delete</th>
                    <th>update</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((v,i)=>{
                        return(
                            <tr id="tr">
                                <td id="td">{i+1}</td>
                                <td id="td">{v}</td>
                                <td id="td">
                                    <button className="delete" onClick={() => delet(i)}>Delete</button>
                                </td>
                                 
                                <td id="td">
                                    <button className="update" onClick={() => update(i)}>update</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </div>
    );
    
}
export default Todolist;