import React from 'react'
import Nav from './Nav'
import Page1Contant from './Page1Contant'

const Section1 = (props) => {
  return (
    <div className=''>
      <Nav />
      <Page1Contant user={props.user} />
    </div>
  )
}

export default Section1
