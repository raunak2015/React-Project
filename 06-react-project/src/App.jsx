import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const user = [
    { 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: '', 
      color:'blue',
      tag: 'Satisfied' 
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
      intro: '', 
      color:'pink',
      tag: 'Underserved' 
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: '', 
      color:'lightgreen',
      tag: 'underbanked' 
    },
    { 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: '', 
      color:'yellow',
      tag: 'Satisfied' 
    }
    
  ]
  return (
    <div>
      <Section1  user={user}/>
      <Section2 />
    </div>
  )
}

export default App
