import React from 'react'

function Greet(){
   return(

      <div>
      <div>
      <ul className="top-nav">
      <li className="nav-list"><a href="#">HOME</a></li>
      <li className="nav-list"><a href="#">FRUITS</a></li>
      <li className="nav-list"><a href="#">CONTACT</a></li>
      <li className="nav-list"><a href="#">ABOUT US</a></li>
      </ul>
      </div>
      <h1 className="first-title">This is My First React App of Favourite Cities in Africa</h1>
      <h2 className="fruit-List-Title">Favourite cities</h2>
      <ol className="fruit-List">
         <li>Ethiopia, Addis Ababa </li>
         <li>Eritrea, Asmera </li>
         <li>Kenya, Mombassa </li>
         <li>seychelles, Victoria </li>
         <li>Rwanda, Kigali </li>
         <li>Nigeria, Legos  </li>
      </ol>
      </div>


   ) 
   
}

export default Greet
