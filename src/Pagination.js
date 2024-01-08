import React,{useEffect, useState} from 'react'
import './my.css'

export default function Pagination() {

    
    const [items,setitems]=useState([])
    const [pagenumber,setpagenumber]=useState(1)
    const getdata=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => setitems(json))
      };
      useEffect(()=>{
        getdata();
      },[]);
      let totalpage=items.length/10;

      const paginate=(page)=>{
        //console.log(page);
        setpagenumber(page);
      }
  return (

    <div>
        
      
        <h1>{items.slice(pagenumber*10-10,pagenumber*10).map((item)=>{
            return <pre>{item.id} {item.title}</pre>
        })}</h1>

        <ul>
            {
            [...Array(totalpage).keys()].map((_,i)=>{

                return <li key={i+1} onClick={()=>{paginate(i+1)}}>{i+1}</li>
            })
            
            }
        
        </ul>
    </div>
  )
}
