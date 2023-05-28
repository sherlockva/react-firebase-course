import React from 'react'


function HelloWorld(props) {

    const greeting = "Hello World";
    const introduction = "My name is Ayush Gupta";
    const link = "http://www.google.com"
  return (
    <>
    <div>{greeting}, {props.name}</div>
    <div>{introduction}</div>
    <div>This number is from props, {props.numberprops}</div>
    <a href={link}>Go to google</a>
    <div className='call-app-css'>call app css</div>
    </>
  )
}

export default HelloWorld