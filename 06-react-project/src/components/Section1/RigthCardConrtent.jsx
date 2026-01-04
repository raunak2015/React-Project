import React from 'react'

const RigthCardConrtent = (props) => {
    console.log(props.tag)
  return (
   <div className='h-full w-70 bg-red-900 rounded-4xl overflow-hidden relative'>
            <img className='h-full object-cover w-full' src={props.img} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center '>{props.id+1}</h2>
                <div>
                    <p className='leading-normal mb-10 text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa, blanditiis qui optio facere magni.
                    </p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor: props.color}} className=' text-white font-semibold px-5 py-2 rounded-full '>{props.tag}uhu</button>
                        <button style={{backgroundColor: props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-long-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RigthCardConrtent
