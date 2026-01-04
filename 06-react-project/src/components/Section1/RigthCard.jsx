import React from 'react'
import RigthCardConrtent from './RigthCardConrtent'

const RigthCard = (props) => {
    return (
        <div className='h-full flex gap-10 flex-nowrap '>
            <RigthCardConrtent img={props.img} tag={props.tag} id={props.id} color={props.color} />
            
        </div>
    )
}

export default RigthCard
