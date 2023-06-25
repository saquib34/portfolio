import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <div className='left'>{props.title}</div>
        <div className='right'>
            <ul>
                <li>
                    <a href='#'>Home</a></li>
                  <li>  <a href='#'>About</a></li>
                   <li> <a href='#'>Services</a></li>
                  <li>  <a href='#'>Contact Me</a> </li>
            </ul>
</div>
      </nav>
    </div>
  )
}
