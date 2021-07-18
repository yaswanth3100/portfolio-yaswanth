import React from 'react';
import "../src/screen.css";
import data from './data';



const MobileNav = ({index,setIndex}) => {

  return (
    
    <div className="drop">
      <div className="drop-bar">
            {
           data.map(({icon,id,title})=>{
            return(
             <div  onClick={()=>setIndex(id)} 
             className={`${id === index && 'active-btn'}`}
             
             >
               <div class="drop-obj">
                <div>
                  <i className={`space ${icon.class}`}></i>
                  </div> 
                  <div>
                   <h3>{title}</h3>
                  </div>
              
               </div>
              
              
             </div>
            )

           }
           )
          }
          

          </div>
    </div>
  )
}

export default MobileNav
