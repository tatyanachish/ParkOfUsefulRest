import { dataRestaurant } from "./dataRestaurant";


function Buttons({filteredRestaurant,setRestaurant}) {
    
    return<div className="btn-container">
        <button className="btn-restaurant" 
                onClick={()=> setRestaurant(dataRestaurant)}>show all</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('pizza')}>pizza</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('salad')}>salad</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('hamburger')}>hamburger</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('cake')}>cake</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('coffee')}>coffee</button>
        <button className="btn-restaurant" 
                onClick={()=> filteredRestaurant('cold beverages')}>cold beverages</button>
       
        
    </div>
}
export default Buttons;