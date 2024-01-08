import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Image() {
    const [items,setitems]=useState([])
    const [pagenumber,setpagenumber]=useState(1)
    const getdata=()=>{
        fetch(`https://dummyjson.com/products?limit=96`)
            .then(response => response.json())
            .then(json => setitems(json.products))

            console.log(items)
      };
      useEffect(()=>{
        getdata();
      },[]);
  return (
    <div>
          <div className='container'>
            <div className='row row-cols-4'>
        {
            items.map((item)=>{
                return( 
                    <div className='col border border-dark'>
                <img src={item.images[0]} alt={item.title} className='img-fluid'/>
                </div>
                )
            })
        }
        </div>

</div>    
</div>
  )
}
