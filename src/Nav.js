import React, { useState } from 'react';
import "../src/screen.css";
import data from './data';
import Welcome from './Welcome';
import Experience from './Experience';
import Skills from './Skills';
import logo from '../src/assets/logo1.jpeg'
import Projects from './Projects';
import MobileNav from './MobileNav';
const Nav = () => {
 const [index,setIndex]=useState(0);
 const [mobile,setMobile]=useState(false);
  return (
    <div className="fix-nav">
        <div className="heading">
          <div>
            <h3>Aspanna Yaswanth's - Portfolio</h3>
          </div>
        </div>
        
        
        <div >

          <div className="social">
            <div>
              <img className="images" src={logo} alt="" />
            </div>
            <div className="links">
                  <span   style={{color:"white"}}>
                     <i  class=" fas fa-envelope fa-2x "></i>
                </span>
            </div>
            <div className="links">
                  <span   style={{color:"white"}}>
                     <i class="fab fa-github fa-2x"></i>
                </span>
            </div>
            <div className="links">
                  <span   style={{color:"white"}}>
                     <i class="fab fa-linkedin fa-2x"></i>
                </span>
            </div>

            <div className="links">
                  <span   style={{color:"white"}}>
                    <i class="fab fa-instagram fa-2x"></i>
                </span>
            </div>
   
          
          </div  >
          <div className="bar">
            {
           data.map(({icon,id,title})=>{
            return(
             <div  onClick={()=>setIndex(id)} 
             className={`nav ${id === index && 'active-btn'}`}
             
             >
               <i className={`space ${icon.class}`}></i>
               <h3>{title}</h3>
              
             </div>
            )

           }
           )
          }
          

          </div>

          <div onClick={()=>setMobile(!mobile)} className="burger">
            {mobile?<h2 >👀</h2>:<h1 >...</h1>}
          </div>
   
          {mobile && <MobileNav index={index} setIndex={setIndex}/>}
       
          
          
          {/* <h1>{index}</h1> */}
        </div>
        {index===0 && <Welcome/> }
        {index===1 && <Experience/>}
        {index===2 && <Skills/>}
        {index===3 && <Projects/>}

      
      
    </div>
  )
}

export default Nav
