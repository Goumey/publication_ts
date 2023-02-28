import React from 'react'
import { PostData } from '../interfaces/'
import {useNavigate} from 'react-router-dom'
interface propsList{
    post :PostData[]|null,
}
const Post: React.FC<propsList>=({post})=> {
  const navigate=  useNavigate()
  return (
    <div className='row '>
        {post?.map((item,keys)=>(<div className="card col-4 my-2" key={keys}>
  <h5 className="card-header"> Poste: {+item.id}</h5>
  <div className="card-body">
    <h5 className="card-title">{item.title} </h5>
    <p className="card-text">{item.body} </p>

    <button  className="btn btn-primary" onClick={()=>navigate(`/${item.id}`)}>Plus de details</button>
  </div>
</div>))} 
        </div>
  )
}

export default Post