import React from 'react'
import '../src/screen.css'
import react1 from '../src/assets/react1.png'
import node from '../src/assets/node.png'
import mysql from '../src/assets/mysql.png'
import java from '../src/assets/java.png'
import express1 from '../src/assets/express1.png'
import HTML from '../src/assets/HTML.png'
import css from '../src/assets/css.png'

const Skills = () => {
  return (
    <div className="welcome">
    <div className="details" > 

       <div>
        <p className="tags">{"</html>"}</p>
        <p className=" tags ml-10">{"</body>"} </p>
      </div>

       <p className="tags-sm">{"<section>"}</p>
      <div className="logos">

        <div className="container">
          <p className="tags-sm">{"<img>"}</p> 
        
          <img className="skill-logo" src={java} alt="" />
           <p className="tags-sm">{"</img>"}</p>
         
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img className="skill-logo" src={mysql} alt="" /
          >
             <p className="tags-sm">{"</img>"}</p>
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img className="skill-logo" src={express1} alt="
          " />
           <p className="tags-sm">{"</img>"}</p>
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img className="skill-logo" src={node} alt="" />
           <p className="tags-sm">{"</img>"}</p>
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img  className="skill-logo" src={react1} alt="" /
          >
             <p className="tags-sm">{"</img>"}</p>
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img className="skill-logo" src={HTML} alt="" />
           <p className="tags-sm">{"</img>"}</p>
        </div>

         <div className="container">
           <p className="tags-sm">{"<img>"}</p>
          <img className="skill-logo" src={css} alt="" />
           <p className="tags-sm">{"</img>"}</p>
        </div>

      </div>
<p className="tags-sm">{"</section>"}</p>
            <div>
              <p className=" tags ml-10">{"</body>"} </p>
        <p className="tags">{"</html>"}</p>
        
      </div>
 
      </div>
    </div>
  )
}

export default Skills
