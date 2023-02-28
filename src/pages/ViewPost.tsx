import {useState,useEffect} from 'react'
import {useParams} from'react-router-dom'
import { PostData } from '../interfaces'
type ParamsId={
    id:string
}
const ViewPost=()=> {
const {id} =useParams<ParamsId>();
const [OnePost,setOnePost]=useState<PostData|null >(null)
useEffect(()=>{
    const getdata=async()=>{
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    const data:PostData =await response.json();
    setOnePost(data)
    
    
    }
    getdata();
    },[id])
  return (
    <div className=' d-flex justify-content-center align-items-center'style={{height:'100vh'}}>
   <div className="card  my-2 bg-warning" style={{width:'430px',height:'250PX'}}>
   <h5 className="card-header">Poste: {id}</h5>

<div className="card-body">
<h5 className="card-title">{OnePost?.title} </h5>
<p className="card-text">{OnePost?.body} </p>

</div>
</div >
</div >)
}

export default ViewPost