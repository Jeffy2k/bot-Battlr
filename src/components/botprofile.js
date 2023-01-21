import { React,useState }  from "react";
import "../style/botProfile.css"

function BotProfile({id,image,name,phrase,health,armor,damage,addBot}) {
  let [state,setState] = useState('')

    return ( 
        <div onClick={(e)=>{
            addBot(id,name,image,phrase,health,armor,damage)
        }} className = "hi"id = "card"
        >
          <img src = {image}></img>
          <h5 id ="botName">{name}</h5>
          <h7 id = "botPhrase" >{phrase}</h7>
         <span id="abilities" ><i id="health" className="material-icons">healing</i><h5 id="ability">{health}</h5><i id="shield" className="material-icons">shield</i><h5 id="ability">{armor}</h5><i id="bolt" className="material-icons">bolt</i><h5 id="ability">{damage}</h5><button onClick = {(e)=>{
        e.stopPropagation()
        console.log("onClick");
        }}id="delete">X</button></span>
        </div>
     );
} 

export default BotProfile;