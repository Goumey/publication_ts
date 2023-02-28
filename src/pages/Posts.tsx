import {useState,useEffect} from 'react'
import { PostData } from '../interfaces';
import Post from './Post';

const Posts=()=> {
   
    const [AllPosts,setAllPosts]=useState<PostData[] | null>(null);

    const [NumberPost,setNumberPost]=useState<number>(5);
    const localOrStateNumber=()=>localStorage.getItem('number')||NumberPost;
    const localOrStateNum=localOrStateNumber();
useEffect(()=>{
const getdata=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`)

const data:PostData[] =await response.json();
setAllPosts(data)


}
getdata();
},[localOrStateNum])
   
const HandleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setNumberPost(+e.target.value);
localStorage.setItem('number',e.target.value)
    
}

  return (
    <div className='container'>
        <div className="input-group">
<label htmlFor="grade" className='form-label'>Nombre de poste: {localOrStateNum} </label>
<input type="range" name="" id="" className='form-range' onChange={HandleChange} max={20}min={1} defaultValue={localOrStateNum} />
<div className="post-container d-flex justufy-content-center w-100">

    <Post  post={AllPosts} />


</div>
        </div>
    </div>
  )
}

export default Posts