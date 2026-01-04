import React from 'react'
import LeftContent from './LeftContent'
import RigthContent from './RigthContent'

const Page1Contant = (props) => {
  return (
    <div className='pb-10 pt-5 h-[87vh] flex justify-between gap-10 items-center px-18 '>
      <LeftContent />
      <RigthContent user={props.user}/>
    </div>
  )
}

export default Page1Contant
