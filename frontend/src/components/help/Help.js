import React from 'react'
import "./Help.css"
function Help() {
  return (
    <div>  <main id="main">
    <h1 >Prince Vegeta</h1>
    <br/>
    <figure id="img-div">
      <img id="image" src="https://ovicio.com.br/wp-content/uploads/2021/07/20210718-vegeta-1024x576-1.jpg" alt="Vegeta, the Sayan Prince, in all his glory as he appears in Dragon Ball Super" />
      <figcaption id="img-caption">
        <strong>Vegeta, standing, faces off against Ignorance in the First Knowledge Tournament.</strong>
      </figcaption>
    </figure>
    <section id="tribute-info">
      <h3 id="headline">Vegeta guides you:</h3>
      <ul>
        <li><strong>Quiz</strong> - In this game you have to choose the right answer between for choices and everytime  you hit the target you win a <u>Dragon Ball</u>  </li>
        <li>
          <strong>Guess The Number</strong> - In this game you have to hit the target directly without choices and everytime  you hit the target you win a   <u>Dragon Ball</u> 
        </li>
        <li>
          <strong>Goku Power</strong> - Goku can help you everytime you win 3 <u>Dragon Balls</u>  
        </li>
       
     
      </ul>
      <p>
        <i>"knowledge with action converts adversity into prosperity."</i>
      </p>
      <cite>--Abdul kalam</cite>
      
    </section>
  </main></div>
  )
}

export default Help