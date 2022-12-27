import React, { useState } from 'react'
import "./style.scss"
import PropTypes from 'prop-types';
import 'boxicons';

function IzyFloat(props) {
  const [status, setStatus] = useState(false)

  function handleClick() {
    setStatus(prevStats => !prevStats);
  }

  function checkStatus() {
    return status ? `appear button-styling-display ${props.basecolor}` : 'hidden';
  }
  return (
    <>
        <div className={`float-container ${props.direction}`}>
      <div className="wrapper">
        <div onClick={handleClick} className={status ? `rotate button-styling-hidden ${props.basecolor} ` : `normal  button-styling-hidden ${props.basecolor}`}>
          <box-icon name='plus' className= {`icon-style ${props.basecolor}`}></box-icon>
        </div>
        {props.locations.map((item) => (
            <div className={checkStatus()} key={item.key} onClick={props.onClick}>
              <a href={item.page}>
                {
                  props.basecolor=="white" ? 
                  <box-icon name={`${item.icon}`} style={{fill:"black"}} ></box-icon> : 
                  <box-icon name={`${item.icon}`} style={{fill:"white"}} ></box-icon>
                }
              </a>
            </div>
          ))}
      </div>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>
    </>
  )
}

IzyFloat.defaultProps={
  direction:'bottom-right',
  basecolor:"dark",
  locations:[
    {key: 1, title: 'Home', page: '/home', icon:'home'},
    {key: 2, title: 'Contact',page: '/contact', icon:'headphone'}
  ]
}

IzyFloat.propTypes={
  locations:PropTypes.array.isRequired,
  onClick:PropTypes.func.isRequired,
}

export default IzyFloat