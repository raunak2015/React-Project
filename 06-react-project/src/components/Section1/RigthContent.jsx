import React from 'react'
import RigthCard from './RigthCard'

const RigthContent = (props) => {
  console.log(props)
  return (
    <div id='right' className='h-full w-2/3 overflow-x-auto flex gap-10 shrink-0 rounded-2xl'>
      {props.user.map((element,idx)=>{
        return <RigthCard key={idx} id={idx} img={element.img} tag={element.tag} color={element.color} />
      })}
    </div>
  )
}

export default RigthContent
