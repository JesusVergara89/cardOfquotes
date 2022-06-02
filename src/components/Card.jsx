import React from 'react'



const Card = ({ quoteRandom1, colorRandom1, colorRandomX, clickButton1 }) => {


  return (
    <article className='card' style={{ backgroundColor: colorRandomX, color: colorRandom1  }}>
      <div className='div-1' >
        <h2 className='simbol' >&#8220;</h2>
        <h2>{quoteRandom1.quote}</h2>
      </div>
      <h2 className='author1' >{quoteRandom1.author}</h2>
      <button onClick={clickButton1} style={{ backgroundColor: colorRandom1 }} className='card-btn' >&#62;</button>
    </article>
  )
}

export default Card