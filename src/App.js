import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import React from 'react'

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
  
  transform: none;
  transition: opacity 3s ease-in-out, width 3s ease-in-out, transform 1.5s ease-in-out;
  margin-left: 70px;  max-width: 550px;
  opacity: 1;max-height: 450px;
}

*/


const[on,setOn]=React.useState(false)
function openmenu(event){
  setOn(prevon=>!prevon)
}



useEffect(()=>{
  window.addEventListener("scroll", handlescroll);
  return ()=>{
    window.removeEventListener("scoll", handlescroll);
  }

},[])



const[scrollposition, setScrollposition]=React.useState(0);

function handlescroll(){
  setScrollposition(window.scrollY + window.innerHeight);
}





const[checkstate, setcheckstate]=React.useState(false);

useEffect( ()=>{
  setInterval(()=>{

    setcheckstate(true)

  }, 18000);
    
  }, [2])


  

 





  return (
    <div>
      <div className="pagecontainer">


<div className='navmain'>
<h1 className='coded_wisdom'>code of wisdom</h1>
<div className='menubar' onClick={openmenu}> <li><div></div></li>
<li><div></div></li>
<li><div></div></li>
</div>
</div>



<div className={on?"showmenuitems":"hidemenuitems"}>       
            <div >
         <ul>
<li>contact</li>
<li>About</li>
<li>projects</li>
<li>skills</li>
</ul> 
</div>
 </div>

         

<div>
<h3> Hello, my name is</h3>
<h1>DEIMO </h1>
<h2>  DORGU</h2>
<img className={scrollposition >=500?'devimageshown1':"devimagehidden1"} src="dev.png"></img>


<h4 className={scrollposition>=1000? "showdesc":"hidedesc"}>Am an enthuasiastic web  developer, 
passionate about building amaizing tech poducts.. </h4>
<button  href="deimodorgucvv" download="cv"> Resume</button>
</div>



<div className="semilowersection">
<div id='about'>About me</div>
<h3 className={scrollposition>=800? "showdesc":"hidedesc"}>
Am a fullstack developer with 4 yearsof experience in the tech industry,
i specialize in building of scalable and <br/>seemless tech products.
some major industry technologies i use are as follows..
</h3>
</div>


<div className="skills">
<h1 id='technical'>technical skills</h1>


<img src="hacker.png" className={scrollposition >=1000? "devimageshown2":"devimagehidden2"}/>

<li> <img src="html.png" alt="Html" />  <img src="css.png" alt="Html" />  <img src="javascript.png" alt="Html" /></li>
<li> <img src="react.png" alt="react" /> <img src="nodejs.png" alt="nodejs" /> <img src="dev.png" alt="Html" /></li>

</div>


<div>
<div className={scrollposition>=1200? "projectsboxshown":"projectsboxhide"}> <div className='projecttittle'>BIKE APP</div> <img className="stacks" src="css.png" /> <div className='golivecon'><span className="golive">Repo</span> <span className="golive"> <a target='_blank' href='http://13.235.74.134'>view live</a></span></div><h5>poject description</h5></div>
<div  className={scrollposition>=1500? "projectsboxshown":"projectsboxhide"}> <div className='projecttittle'>BAAP APP</div> <img src="" /><div className='golivecon'> <span className="golive">Repo</span> <span className="golive"> <a target='_blank' href='
https://play.google.com/store/apps/details?id=baap.app&referrer=utm_source%3Dapps.facebook.com%26utm_campaign%3Dfb4a%26utm_content%3D%257B%2522app%2522%253A0%252C%2522t%2522%253A1671969462%252C%2522source%2522%253Anull%257D
'>view live</a></span></div><h5>poject description</h5></div>
<div  className={scrollposition>=1800? "projectsboxshown":"projectsboxhide"}> <div className='projecttittle'>FOREST CAFE</div> <img src="" /> <div className='golivecon'><span className="golive">Repo</span> <span className="golive"> <a target='_blank' href='https://www.rainforestcafe.com'>view live</a></span></div> <h5>poject description</h5></div>
<div className={scrollposition>=2100? "projectsboxshown":"projectsboxhide"}> <div className='projecttittle'>HOTEL</div> <img  className="stacks" src="css.png" /> <div className='golivecon'><span className="golive">Repo</span> <span className="golive"> <a target='_blank' href='https://hoteltask.com/hoteltask/public/login'>view live</a></span></div><h5>poject description</h5><div>lorem ipsomdfdddefefefefefe<br/> edeefgrgtrgtygtytrgtrgtgtg<br/>rtetrytrhtrhytyhttryuryuyu</div></div>
</div>




</div>

<footer className="footer">

<div className="contact">
<h6>REACH OUT</h6>
<h3 className={scrollposition>=1000? "showdesc":"hidedesc"}>i am available for fulltime and part time jobs
</h3>

<span>
<a  href='mailto:deimodorgutech@gmail.com'><button className='hire_button'>Email</button></a>

<a  href='tel:08164513369'><button className='hire_button'>call me</button></a>
</span>
</div>




<br/>
<div className="social">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img src="" /></a>
      <a  target="_blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img src="" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img src="" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img src="" /></a>
</div>


<div>Dorgu Deimo page<br/>
@copywrite All rights reserved..</div>
</footer>


    </div>
  );
}

export default App;
