import React from 'react'

const Card = ({amount,imgSrc,checkoutHandler}) => {
  return (
    <div>
        <main>
            <article>
                <img src={imgSrc} alt='product'/>
                <h1>{amount}</h1>
                <button onClick={()=>checkoutHandler(amount)}>Buy Now</button>
            </article>
        </main>
        <hr/>
    </div>
  )
}

export default Card