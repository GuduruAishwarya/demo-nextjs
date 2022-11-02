import React from "react";
import { useEffect, useState } from "react";
export default function CommentsPage()
{
    const [comments,setcomments]=useState([]);
    const [comm,setcomm]=useState('');
   const show=async()=>
   {
    const res=await fetch('/api/comments');
    const data=await res.json()
    setcomments(data)
   }
   const add=async()=>
   {
    const res=await fetch('/api/comments',
    {
        method:'POST',
        body:JSON.stringify({comm}),
        headers:
        {
            'Content-Type':'application/json'
        }
    });
    const data=await res.json()
    console.log(data)
   }
   const deleting=async(cid)=>
   {
       console.log("delete---"+cid)
    const res=await fetch('/api/comments/'+cid,
    {
        method:'DELETE'
    });
    const data=await res.json()
    console.log(data);
    show()
   }
   return(
       <>
       <input type="text" value={comm} onChange={(e)=>setcomm(e.target.value)}></input>
       <button onClick={add}>Post Comment</button>
       <button onClick={show}>Get Comments</button>
       {
           comments.map((c)=>
           {
               return (
                   <>
                   <div key={c.id}>
                       {c.id}-{c.text}
                   </div>
                   <button id={c.id} onClick={()=>{deleting(c.id)}}>x</button>
                   </>
               )
           })
       }
       </>
   )
}