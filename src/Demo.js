import React, { useState } from 'react';
import './App.css';

function Demo() {

  var obj = {
        name:'',
        sci:'',
        guj:'',                                                     
        eng:'',
        math:'',
  }

  const [studentdata , setstudentdata] = useState (obj);
  const [data,setdata] = useState([]);
  const [status, setstatus]=useState(false);
  const [id,setid]=useState()


  function record(e)
  {
    // console.log(e.target.value , e.target.name)
    setstudentdata({...studentdata,[e.target.name]:e.target.value})
  }

  function add(){
    if(status){
      var d = [...data];
      d[id]=studentdata;
      setdata(d)
      setstudentdata(obj)
      setstatus(false)
  }else{
      if(studentdata.name !== '' && studentdata.sci !== '' && studentdata.guj !== '' && studentdata.eng !== '' && studentdata.math !== ''){
          setdata([...data,studentdata])
        //   console.log(data)
          setstudentdata(obj)
      }
  }   
}
      const delet = (n) =>{
        const newdata= data.filter((v,i)=>{
            return i!=n;
        });
        setdata(newdata)
      };
      const edit = (i) => {
        setid(i)
        setstudentdata(data[i])
        setstatus(true)
      };
      

  return (
    <>
      
      <div className="App ">
            <div id="mydiv" class="header">
            <h1 className="container"> Todo List</h1>
            
        Name: <input type="text" id="input" value={studentdata.name} name='name' onChange={record}/> <br/>
        sci: <input type="text" id="input" value={studentdata.sci} name='sci' onChange={record}/> <br/>
        Guj: <input type="text" id="input" value={studentdata.guj} name='guj'onChange={record}/> <br/>
        Eng: <input type="text" id="input" value={studentdata.eng} name='eng'onChange={record}/> <br/>
       math: <input type="text" id="input" value={studentdata.math} name='math' onChange={record}/> <br/>
            
                <button type="button" onClick={add}  className="btnadd">{status?"edit":"add"}</button>
                
            </div>

<table border={1}  cellPadding={5} cellSpacing={0} align="center" className="result-table">
            <thead >
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Sci</th>
                    <th>Guj</th>
                    <th>Eng</th>
                    <th>Maths</th>
                    <th>total</th>
                    <th>per%</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody >
                {
                    data.map((studentdata,i)=>{
                        return(
                            <tr id="tr">
                                <td id="td">{i+1}</td>
                                <td id="td">{studentdata.name}</td>
                                <td id="td">{studentdata.sci} </td>
                                <td id="td">{studentdata.guj} </td>
                                <td id="td">{studentdata.eng} </td>
                                <td id="td">{studentdata.math}</td>
                                <td id="td">{parseFloat(studentdata.sci) + parseFloat(studentdata.guj) + parseFloat(studentdata.eng) + parseFloat(studentdata.math)}</td>
                                <td id="td">{(parseFloat(studentdata.sci) + parseFloat(studentdata.guj) + parseFloat(studentdata.eng) + parseFloat(studentdata.math))/4}%</td>
                                <td id="td">
                                    <button className="delete" onClick={() => delet(i)}>Delete</button>
                                </td>
                                 
                                <td id="td">
                                    <button className="update" onClick={() => edit(i)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    </>
  );
}

export default Demo;