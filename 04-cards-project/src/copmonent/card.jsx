import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <div className="logo">
            <img src={props.logo} alt="logo" />

          </div>
          <div className="save">
            <div className="save1">
              <p>Save</p>
            </div>
            <div className="bookmark">
              <Bookmark size={20}  />
            </div>

          </div>
        </div>
        <div className="middle">
          <div className="heading">
            <div className="name">
              <h3>{props.company}</h3>
            </div>
            <div className="time">
              <p>{props.date}</p>
            </div>
          </div>
          <div className="dtail">
            <h2>{props.role}</h2>
          </div>
          <div className="button">
            <p>{props.tag1}</p>
            <p>{props.tag2}</p>
          </div>

        </div>
        <div className="botom">
          <div className="price">
            <div className="amount">
              <h3>${props.pay}/hr</h3>
            </div>
            <div className="role">
              <p>{props.location}</p>
            </div>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default card
