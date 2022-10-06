import React from 'react'

export default function Die(props) {

  
  const dieStyle = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }
  



  return (
    <div 
          onClick={props.toggle} 
          style={dieStyle} 
          className='die-face'  
          id={props.id}
          >
      <h2  className='die-num' >{props.value}</h2>
    </div>
  )
  
}
