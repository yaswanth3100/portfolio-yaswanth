import React, { useState } from 'react'
import Carosol from './Carosol'

import lhome from '../src/LunchBox/ln-home.PNG'
import lone from '../src/LunchBox/ln-1.PNG'
import ltw from '../src/LunchBox/ln-2.PNG'
import lth from '../src/LunchBox/ln-3.PNG'
import lfo from '../src/LunchBox/ln-4.PNG'
import lfi from '../src/LunchBox/ln-5.PNG'
import ls from '../src/LunchBox/ln-6.PNG'

import chome from '../src/chatApp/chome.PNG'
import ctwo from '../src/chatApp/ch-1.PNG'

import kpo from '../src/KeepApp/kpO.PNG'

import gone from '../src/Gtv/gone.jpeg'
import gtwo from '../src/Gtv/gtwo.jpeg'
import gth from '../src/Gtv/gth.jpeg'

const Experience = () => {
  const [lunch,setLunch]=useState([lhome,lone,ltw,lth,lfo,lfi,ls]);
/* eslint no-unused-vars : "off" */
  const [chat,setChat]=useState([chome,ctwo])
  /* eslint no-unused-vars : "off" */
  const [keep,setKeep]=useState([kpo]);
  /* eslint no-unused-vars : "off" */
  const [gtv,setGtv]=useState([gone,gtwo,gth]);
  return (
    <div className="welcome">
      <div className="details" >

        <div>
        <p className="tags">{"</html>"}</p>
        <p className=" tags ml-10">{"</body>"} </p>
      </div>

        <div className="caro-wrap">
          <div>
            {/* <img className="projectpics" src="https://images.pexels.com/photos/5981783/pexels-photo-5981783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> */}
            <Carosol pics={lunch}/>
          </div>
          <div className="ml">
            <p className=" tags-sm ">{"<h1>"} </p>
            <h1 className="title">LuNCH BoX</h1>
            <p className=" tags-sm">{"<h1>"} </p>
            <div className="texts">
              <p className=" tags-sm">{"<article>"} </p>
             <p>Fullstack restaurant application,with following functionalities</p> 
             <p>1.login and signup</p>
             <p>2.displays menu with categories</p>
             <p>3.check each food item in detail and post reviews</p>
             <p>4.add to cart</p>
             <p>5.checkout with Paypal</p>
             <p>6.responsive design</p>
             <p className=" tags-sm">{"</article>"} </p>
            </div>
          </div>
        </div>

        <div className="caro-wrap">
          <div className="img-hold">
            {/* <img className="projectpics" src="https://images.pexels.com/photos/5981783/pexels-photo-5981783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> */}
             <Carosol pics={chat}/>
          </div>
          <div className="ml">
            <p className=" tags-sm ">{"<h1>"} </p>
            <h1 className="title">LuNCH BoX</h1>
            <p className=" tags-sm">{"<h1>"} </p>
            <div className="texts">
              <p className=" tags-sm">{"<article>"} </p>
             <p>Fullstack restaurant application,with following functionalities</p> 
             <p>1.login and signup</p>
             <p>2.displays menu with categories</p>
             <p>3.check each food item in detail and post reviews</p>
             <p>4.add to cart</p>
             <p>5.checkout with Paypal</p>
             <p>6.responsive design</p>
             <p className=" tags-sm">{"</article>"} </p>
            </div>
          </div>
        </div>

         <div className="caro-wrap">
          <div className="img-hold">
            {/* <img className="projectpics" src="https://images.pexels.com/photos/5981783/pexels-photo-5981783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> */}
             <Carosol pics={keep}/>
          </div>
          <div className="ml">
            <p className=" tags-sm ">{"<h1>"} </p>
            <h1 className="title">LuNCH BoX</h1>
            <p className=" tags-sm">{"<h1>"} </p>
            <div className="texts">
              <p className=" tags-sm">{"<article>"} </p>
             <p>Fullstack restaurant application,with following functionalities</p> 
             <p>1.login and signup</p>
             <p>2.displays menu with categories</p>
             <p>3.check each food item in detail and post reviews</p>
             <p>4.add to cart</p>
             <p>5.checkout with Paypal</p>
             <p>6.responsive design</p>
             <p className=" tags-sm">{"</article>"} </p>
            </div>
          </div>
        </div>

        <div className="caro-wrap">
          <div className="img-hold">
            {/* <img className="projectpics" src="https://images.pexels.com/photos/5981783/pexels-photo-5981783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> */}
             <Carosol pics={gtv}/>
          </div>
          <div className="ml">
            <p className=" tags-sm ">{"<h1>"} </p>
            <h1 className="title">LuNCH BoX</h1>
            <p className=" tags-sm">{"<h1>"} </p>
            <div className="texts">
              <p className=" tags-sm">{"<article>"} </p>
             <p>Fullstack restaurant application,with following functionalities</p> 
             <p>1.login and signup</p>
             <p>2.displays menu with categories</p>
             <p>3.check each food item in detail and post reviews</p>
             <p>4.add to cart</p>
             <p>5.checkout with Paypal</p>
             <p>6.responsive design</p>
             <p className=" tags-sm">{"</article>"} </p>
            </div>
          </div>
        </div>

         <div>
         <p className=" tags ml-10">{"</body>"} </p>
        <p className="tags">{"</html>"}</p>
        
      </div>
      </div>
    </div>
  )
}

export default Experience
