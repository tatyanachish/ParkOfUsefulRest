import { dataStore } from "./dataStore";

function Buttons({chosenItems,setSouvenirs}){
    return(
        <div className="btn-container">
            <button className="btn-restaurant"onClick={()=>chosenItems('calendar')}>calendars</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('cup')}>cups</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('souvenir')}>souvenirs</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('beverage')}>beverages</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('for children')}>for children</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('clothes')}>clothes</button>
            <button className="btn-restaurant" onClick={()=>chosenItems('accessory')}>accessories</button>
            <button className="btn-restaurant" onClick={()=>setSouvenirs(dataStore)}>show all</button>
        </div>
    )
}
export default Buttons;