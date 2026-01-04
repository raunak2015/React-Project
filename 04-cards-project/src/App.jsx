import React from 'react'

import Card from './copmonent/card.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "2 months ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 62,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 57,
    location: "Mumbai, India"
  }
];

// export default jobOpenings;

  return (
    <div className='parent'>
      {jobOpenings.map((element,id)=>{
        return  <div key={id}>
          <Card company={element.companyName} logo={element.brandLogo} date={element.datePosted} role={element.post} tag1={element.tag1} tag2={element.tag2}  pay={element.pay} location={element.location}/>
        </div>
      })}
    </div>
  )
}

export default App
