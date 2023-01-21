import React from "react";
import "../style/BotCollection.css"
import BotProfile from "./botprofile";


function BotCollection({bots,addBot}) {
    let botList = bots.map((bot,index)=>{
        return <BotProfile id = {bot.id} addBot = {addBot} key={index} damage={bot.damage} armor={bot.armor} health={bot.health} phrase={bot.catchphrase} name = {bot.name} image = {bot.avatar_url}/>
    })
    return (  
     <div id="grid">
       {botList}
     </div>
    );
}
export default BotCollection;