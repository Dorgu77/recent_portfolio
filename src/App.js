import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  /*
  const [on, setOn] = React.useState(false)
  const styles={height:"400px",
  width:on? "400px":"0px", display:on?"block":"none",
  transition:"width  2s", 

}


const listitems={
display:on? "block":"none",
}


   //f1 opening state function
  function open(event){
      setOn(prevOn => !prevOn)

  }
  //f2 closing state function
  function close(event){
      setOn(prevOn => !prevOn)

  }


const[active, setactive]=React.useState(false)
function toactivate(event){setactive(prev =>!prevOn)}


  const picfade={ opacity:on?"1":"0", max_width:on?"400px":"0", max_height:on?"600px":"0", display:on?"block":"none"}


  
const fada=function (){
  const sheet={ visibility:"visible"}
  return sheet;
}



.projectsshown{
  


const[checkstate, setcheckstate]=React.useState(false);


  transform: none;
  transition: opacity 3s ease-in-out, width 3s ease-in-out, transform 1.5s ease-in-out;
  margin-left: 70px;  max-width: 550px;
  opacity: 1;max-height: 450px;



<div className="social">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img  src="" /></a>
      <a  target="_blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img  src="" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img  src="" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img  src="" /></a>
</div>



  
<div className="contact">


</h3>

</div>

}

*/

  const [on, setOn] = React.useState(false);

  function openmenu(event) {
    setOn((prevon) => !prevon);
  }

  
  /*
  function closemenu(event) {
    setOn((prevon) => !prevon);
  }
*/

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scoll", handlescroll);
    };
  }, []);

  const [scrollposition, setScrollposition] = React.useState(0);

  function handlescroll() {
    setScrollposition(window.scrollY + window.innerHeight);
  }




  const[my,setmy]=React.useState("");
  const[nami,setnami]=React.useState("");
  const[is,setis]=React.useState("");
const[pic, setpic]=React.useState("dev.png");

useEffect( ()=>{
  
setTimeout(() => {
setmy("my");
}, 1200)


setTimeout(() => {
  setnami("name");
}, 1800);


  setTimeout(() => {
    setis("is");
  }, 2300);    

  }, [])


useEffect(()=>{


  setInterval(() => {
    
setTimeout(() => {
  setpic("rig_boy.jpg");
}, 7000);


setTimeout(() => {
  setpic("dev.png");
}, 14000);


  }, 14000);



},[])





  







  return (
    <div>
    
    
        <div  className={on ? "showmenuitems" : "hidemenuitems"}>
          
            <ul>
              <li> <a href="#reachcon">contact</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#proj">projects</a></li>
              <li><a href="#technical">skills</a></li>
            </ul>
          
        </div>

      <div className="pagecontainer" >

        <div className="navmain">
       <span><img id="camplogo" src="campfire.png" /></span>
            <span className="coded_wisdom">code of wisdom</span>
            <span className="menubar" onClick={openmenu}>
              
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
              <li>
                <div></div>
              </li>
            </span>
          
        </div>


        <div>
          <h3>Hello, {my} {nami} {is}..</h3>
          <h1>DEIMO </h1>
          <h2> DORGU</h2>
          <div className="slideimagecon">``
          <img
            className={
              scrollposition >= 500 ? "devimageshown1" : "devimagehidden1"
            }
            src={pic}
          ></img></div>

          <h4 className={scrollposition >= 750 ? "showdesc" : "hidedesc"}>
            Am an enthuasiastic web developer, passionate about building
            amaizing tech poducts..{" "}
          </h4>
          
          <a href="`DeimodorguCvv.PDF" download="deimodorgucvv">
          <button>resume</button> </a>
          
        </div>

        <div className="semilowersection">
          <div id="about">About me</div>
          <h3 className={scrollposition >= 800 ? "showdesc" : "hidedesc"}>
            Am a fullstack developer with 4 years of experience in the tech
            industry, i specialize in building of scalable and 
            seemless tech products. some major industry technologies i use are
            as follows..
          </h3>
        </div>

        <div className="skills">
          <h1 id="technical">Technical skills</h1>
<div className="slideimagecon">
          <img
            src="hacker.png"
            className={
              scrollposition >= 1000 ? "devimageshown2" : "devimagehidden2"
            }
          /></div>

<div className="skillgroup">  
          <li>
            {" "}
            <img src="html.png" alt="Html" /> <img src="css.png" alt="Html" />{" "}
            <img src="javascript.png" alt="Html" />
          </li>
          <li>
            {" "}
            <img src="react.png" alt="react" />{" "}
            <img src="node.png" alt="node" />{" "}
            <img src="express.png" alt="express" />
          </li>
          </div>

        </div>

        <div>  <h1 id="proj">My projects</h1>
          <div
            className={
              scrollposition >= 1200 ? "projectsboxshown" : "projectsboxhide"
            }
          >
            {" "}
            <div className="projecttittle">BIKE</div>{" "}
            <img className="projectimage" src="bikepic.jpg" />{" "}
            <div className="golivecon">

              <span>
              <a href="http://13.235.74.134">
                <button className="golive">repo</button>
              </a>

              <a href="http://13.235.74.134">
                <button className="golive">live</button>
              </a>
            </span>

            </div>
            <h5>
            This is a bike purchase site,
            built with  react , css ,javascript and nodejs</h5>
          </div>
          <div
            className={
              scrollposition >= 1500 ? "projectsboxshown" : "projectsboxhide"
            }
          >
            {" "}
            <div className="projecttittle">linkcut</div>{" "}
            <img className="projectimage" src="linkpic.jpg" />
            <div className="golivecon">
  
              <span>
              <a href="https://lincut.vercel.app/#/about">
                <button className="golive">repo</button>
              </a>

              <a href="https://lincut.vercel.app/#/about">
                <button className="golive">live</button>
              </a>
            </span>
            </div>
            <h5>
            This is a link shortener  site, that shortens long web links, 
            built with  react , css ,javascript and nodejs</h5>
          </div>
          <div
            className={
              scrollposition >= 1800 ? "projectsboxshown" : "projectsboxhide"
            } >
            
            <div className="projecttittle"> quiz ninja</div>
            <img className="projectimage" src="quizpic.jpg" />
            <div>
            
              <span id="cafecon">
              <a href="https://quizninja.netlify.app/#/">
                <button className="golive">repo</button>
              </a>

              <a href="https://quizninja.netlify.app/#/">
                <button className="golive">live</button>
              </a>
            </span>
            </div>
            <h5>
            This is a quiz  site for javascript students,
            built with react , css ,javascript and nodejs</h5>
          </div>
          <div
            className={
              scrollposition >= 2100 ? "projectsboxshown" : "projectsboxhide"
            }
          >
            
            <div className="projecttittle">HOTEL</div>{" "}
            <img className="projectimage" src="hotelpic.jpg" />{" "}
            <div className="golivecon">
              
              <span>
              <a href="https://hoteltask.com/hoteltask/public/login">
                <button className="golive">repo</button>
              </a>

              <a href="https://hoteltask.com/hoteltask/public/login">
                <button className="golive">live</button>
              </a>
            </span>
            </div>
            <h5>
            This is a hotel site, for a client business
            built with  react , css ,javascript and nodejs</h5>
            
          </div>
        </div>

          
          

      
          
          <div id="reachcon">
          <h6>Hot Lines</h6>
          <img src="reachpic.jpg" id="logoimage" />
            <span>
              <a href="mailto:deimodorgutech@gmail.com">
                <button className="mail_button">email</button>
              </a></span>
<span> <a href="tel:08164513369">
                <button className="call_button">call me</button>
              </a>
            </span>
          </div>

     

              

    <footer> 

        <div>
            <span className="social">
              <a target="_blank" href="https://www.facebook.com/dorgu.deimo">
                <img className="socialimage" src="freefacebook.png" />
                
              </a>
            
              <a
                target="_blank"
                href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"
              >
                <img className="socialimage" src="instag.png" />
                
              </a>
            
              <a
                target="_blank"
                href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"
              >
                <img className="socialimage" src="twetter.png" />
              
              </a>
            
              <a target="_blank" href="https://whatsapp.com/dl/">
                <img className="socialimage" src="watsapp.png" />
                
              </a>
            </span>
        </div>
          
          
          
          <div id="myname">Dorgu Deimo page</div>
          <div id="copywrite">@copywrite All rights reserved||privacy policy</div>
          </footer>



     </div>
    </div>
  );
}

export default App;
