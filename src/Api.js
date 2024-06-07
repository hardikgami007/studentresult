import axios from "axios";
import { useEffect, useState } from "react";


const Api = () =>{

    const [data , setdata]=useState('');
    const [rec , setrec]=useState([]);

    function btn()
    {
        // setrec(data);
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response=>{setrec(response.data)})
    }

    useEffect(()=>{
        // console.log(rec)
        axios.get('https://dummyjson.com/products')
        .then(response=>{console.log(response.data.products)})
    },[])

    return(
        <>
            <h1 style={{'color':'black'}}>API calling & useeffect</h1>
            <input type="text" value={data} onChange={(e)=>{setdata(e.target.value)}} />
            <button onClick={btn}>click</button>

            <table width="100%" style={{'width':"100%"}} border={1} cellPadding={5} cellSpacing={0}>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {
                    rec.map((v,i)=>{
                        return(
                            <tr>
                                {/* <td>{i+1}</td>
                                <td>{v.name}</td>
                                <td>{v.phone}</td>
                                <td>{v.address.street} , {v.address.geo.lat}, {v.address.geo.lng}</td> */}
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Api;