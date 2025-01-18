import { useState } from "react";
import { v4 as uuid } from "uuid";
import Landscape from "../Landscape";
import { dataStore } from "./dataStore";
import Souvenirs from "./Souvenirs";
import AllButtons from "../Buttons";


function Store(){
    const [souvenirs,setSouvenirs] = useState(dataStore)
    const storeButtons = [
        { label: "calendars", value: "calendar", id: uuid() },
        { label: "cups", value: "cup", id: uuid() },
        { label: "beverages", value: "beverage", id: uuid() },
        { label: "souvenirs", value: "souvenir", id: uuid() },
        { label: "for children", value: "for children", id: uuid() },
        { label: "clothes", value: "clothes", id: uuid() },
        { label: "accessories", value: "accessory", id: uuid() },
        { label: "show all", value: "all", id: uuid() }
    ];
    const chosenItems = (searchTerm) => {
        if (searchTerm === "all") {
            setSouvenirs(dataStore); 
        } else {
            const newSouvenirs = dataStore.filter((item) => item.searchTerm.includes(searchTerm)
            );
            setSouvenirs(newSouvenirs);
        }
    };

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
            <AllButtons buttons={storeButtons} choice={chosenItems}/>  
            <Souvenirs souvenirs={souvenirs}/>
        </div>
    )
}
export default Store;