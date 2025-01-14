import { useState } from "react";
import Footer from "../Footer";
import Landscape from "../Landscape";
import { dataStore } from "./dataStore";
import Souvenirs from "./Souvenirs";
import Buttons from "./Buttons";


function Store(){
    const [souvenirs,setSouvenirs] = useState(dataStore)
    const chosenItems = (searchTerm) => {
        const newSouvenirs = dataStore.filter((item)=>item.searchTerm.includes(searchTerm))
        setSouvenirs(newSouvenirs) 
        }
    return(
        <div>
            <Landscape/>
            <div className='summary'>
                <p className='summaryText'>We invite you to visit our online souvenir shop!
                    Looking for a souvenir to remember your visit to our park? 
                    Discover a world of unique treasures in our online souvenir shop!
                    Browse from the comfort of your home and let us help you create 
                    unforgettable memories. Don't miss out - your next favorite find is just a click away!</p>
            </div>   
            <Buttons chosenItems={chosenItems} setSouvenirs={setSouvenirs}/>
            <Souvenirs souvenirs={souvenirs}/>
            <Footer/>
        </div>
    )
}
export default Store;