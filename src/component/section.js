import React from 'react'
import Saq from './saquib.jpg' 
import Type from './type'

export default function section() {
  return (
    <div>
      <section className='firstSection'>
        <div className='leftSection'>
        Hi, My name is <span className='purple'>Saquib</span> 
        <div>and I am a passionate <div>  <span id="element">
            <Type />
        </span>
</div>    </div>
        </div>
        
            <div className='rightSection'>
            <img src={Saq} alt='Saquib'/>
                </div>
        </section>


          
    </div>
  )
}
