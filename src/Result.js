import { useState } from "react";

const Result = () =>{
    const [studentdata , setstudentdata] = useState (obj);
    const [data,setdata] =useState([])
    const[id,setid]=useState()
    // const [val,setval] =useState('') 
    // const [s1,sets1] =useState('')
    // const [s2,sets2] =useState('')
    // const [s3,sets3] =useState('')
    // const [s4,sets4] =useState('')
    const[status, setstatus]=useState(false);
    // const [total,settotal] =useState('')
    
    var obj = {
        name:'',
        sci:'',
        guj:'',
        eng:'',
        math:'',
      }
      function record(e)
    {
        // console.log(e.target.value , e.target.name)
        setstudentdata({...studentdata,[e.target.name]:e.target.value})
    }
  
    function add(){
        if(status){
            var d = [...data];
            console.log(id)
            // d[id]=val;
            setdata(d)
            // setval('')
            setstatus(false)
        }else{
            if(studentdata.name !== '' && studentdata.sci !== '' && studentdata.guj !== '' && studentdata.eng !== '' && studentdata.math !== ''){
                // setdata([...data,val])
                // setval('')
                setdata([...data,studentdata])
                console.log(data)
                setstudentdata(obj)
            }
        }   
    }

    // const delet = (a) =>{
    //     const newdata=[];
    //     // for(var j=0;j<data.length;j++){
    //         if(a){
    //             newdata.push(data[a])
    //         }
    //     // }
    //     setdata(newdata);
    //   };

    //   const edit = (a) =>{
    //     setid(a)
    //     setval(data[a])
    //     setstatus(true)
    // }

    
    return(
        <div className="App ">
            <div id="mydiv" class="header">
            <h1 className="container"> Todo List</h1>
            
                <p>Name:    <input type="text" id="input" value={studentdata.name} name='name' onChange={record}/></p>
                <p>Science: <input type="text" id="input" value={studentdata.sci} name='sci' onChange={record}/></p>
                <p>Gujarati:<input type="text" id="input" value={studentdata.guj} name='guj' onChange={record}/></p>
                <p>English: <input type="text" id="input" value={studentdata.eng} name='eng' onChange={record}/></p>
                <p>Maths:   <input type="text" id="input" value={studentdata.math} name='math' onChange={record}/></p>
            
                <button type="button" onClick={add}  className="btnadd">{status?"edit":"add"}</button>
            </div>
        
       
        <table border={1}  cellPadding={5} cellSpacing={0} align="center" className="result-table">
            <thead >
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>S1</th>
                    <th>S2</th>
                    <th>S3</th>
                    <th>S4</th>
                    <th>total</th>
                    <th>per</th>
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
                                {/* <td id="td">
                                    <button className="delete" onClick={() => delet(i)}>Delete</button>
                                </td>
                                 
                                <td id="td">
                                    <button className="update" onClick={() => edit(i)}>Edit</button>
                                </td> */}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        </div>
    );
}
export default Result;