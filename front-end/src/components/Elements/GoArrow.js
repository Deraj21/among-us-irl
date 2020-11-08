import React from 'react'

function GoArrow(props){
  let {color, backgroundColor, scale} = props

  color           = color           !== undefined ? color             : 'white'
  backgroundColor = backgroundColor !== undefined ? backgroundColor   : 'black'
  scale           = scale           !== undefined ? parseFloat(scale) : 1

  const w = 10 * scale

  // styles
  const leftStyle = {
    borderTop: `${w*2}px solid transparent`,
    borderLeft: `${w}px solid ${backgroundColor}`,
    borderBottom: `${w*2}px solid transparent`,
    transform: `translate(${w-1}px)`
  }
  const rightStyle = {
    borderTop: `${w*2}px solid transparent`,
    borderLeft: `${w*3.5}px solid ${color}`,
    borderBottom: `${w*2}px solid transparent`
  }

  return (
    <div className="GoArrow" >
      <div className="left" style={leftStyle}></div>
      <div className="right" style={rightStyle}></div>
    </div>
  );
}

export default GoArrow