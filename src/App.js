import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react'

function App() {










  const [on, setOn] = React.useState(false)
  const styles={height:"400px",
  width:on? "400px":"0px", display:"block",
  transition:"height",
  duration:"2s"
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





  return (
    <div>
      
<div className='uppersection'>

<div className='navmain'>

  
<h1>code of wisdom</h1>

<div className='menubar' onClick={open}><li><div></div></li>
<li><div></div></li>
<li><div></div></li>
</div>

</div>







<nav>
<div className='menuitems' style={styles}>
            <button  style={listitems} id='closemenu' onClick={close}>X</button>
            
            <div style={listitems}>
         <ul>
<li>contact</li>
<li>About</li>
<li>projects</li>
<li>skills</li>
</ul> 
</div>
         </div>

         </nav>


<h3> Hello, my name is</h3>
<img className="devimage"src="dev.png"></img>
<h7>DEIMO </h7>
<h2>  DORGU</h2>
  

<h4>Am an enthuasiastic web  developer, 
passionate about building amaizing tech poducts.. </h4>
<button  href="deimodorgucvv" download="cv"> Resume</button>
</div>

<br/>
<div className="semilowersection">





<h1 id="about">About me</h1>
<h3>
Am a fullstack developer with 4 yearsof experience in the tech industry,
i specialize in building of scalable and seemless tech products.
some major industry technologies i use are as follows..
</h3>
<h1>technical skills</h1>
<img className='devimage' src='Hacker.png'></img>


<div className="skills">
<li> <img src="html.png" alt="Html" />  <img src="css.png" alt="Html" />  <img src="javascript.png" alt="Html" /></li>
<<<<<<< HEAD
<li> <img src="react.png" alt="react" /> <img src="node.png" alt="node" /> <img src="dev.png" alt="Html" /></li>
=======
<li> <img src="react.png" alt="react" /> <img src="nodejs.png" alt="nodejs" /> <img src="dev.png" alt="Html" /></li>
>>>>>>> 38caf1f840e5eec3ea9c684aacbc1cd873a40076

</div>
</div>
<br/>
<br/>
<br/>
<br/>
  
<br/>
<div className='projects'>
<div> <div className='projecttittle'>project1</div> <img src="css.png" /> <div><span>Repo</span> <span> view live</span></div><h5>poject description</h5></div>
<div> <div className='projecttittle'>project1</div> <img src="css.png" /><div><span>Repo</span> <span> view live</span></div><h5>poject description</h5></div>
<div> <div className='projecttittle'>project1</div> <img src="css.png" /> <div><span>Repo</span> <span> view live</span></div> <h5>poject description</h5></div>
<div> <div className='projecttittle'>project1</div> <img src="css.png" /> <div className='golivecon'><span className="golive">Repo</span> <span className="golive">  view live</span></div><h5>poject description</h5></div>
</div>


<div className="contact">
<h6>HIRE ME</h6>
<h7>i am available for fulltime and part time jobs
</h7>
<a target='_blank' href='mailto:deimodorgutech@gmail.com'><button>Email</button></a>

</div>



<footer className="footer">
<br/>
<div className="social">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img src="darkface.png" /></a>
      <a  target="_blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img src="darkinst.png" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img src="darkowit.png" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img src="darkwats.png" /></a>

</div>
<div className="deimo">Dorgu Deimo page</div>
<div className="copywrite">@copywrite All rights reserved..</div>
</footer>
    </div>
  );
}

export default App;
