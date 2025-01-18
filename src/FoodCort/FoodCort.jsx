
import Landscape from "../Landscape";
import { TiArrowForwardOutline } from "react-icons/ti";
import Restaurant from "./Restaurant";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { dataRestaurant } from "./dataRestaurant";
import { Link } from "react-router-dom";
import recipe from './photoFood/recipe.png'
import AllButtons from "../Buttons";


function FoodCort(){
    const [restaurant,setRestaurant] = useState(dataRestaurant)
    const buttonsRestaurant = [
        {label: 'show all',value: 'all',id:uuid()},
        {label: 'pizza',  value:'pizza',id:uuid()},
        {label:  'salad', value:'salad',id:uuid()},
        {label:'hamburger',   value:'hamburger',id:uuid()},
        {label:'cake',   value:'cake',id:uuid()},
        {label:'coffee',  value:'coffee',id:uuid()},
        {label: 'cold beverages',  value:'cold beverages',id:uuid()}
    ]
    const chosenRestaurant = (searchTerm) => {
        if(searchTerm === 'all') {
            setRestaurant(dataRestaurant)
        }
        else {
            const newRestaurant = dataRestaurant.filter((cafe) => cafe.searchTerm.includes(searchTerm));
            setRestaurant(newRestaurant)        
        }} 
    const [showText, setShowText] = useState(false);
    const showTextClick = (cafe) => {
        cafe.showMore =!cafe.showMore
        setShowText(!showText)
    }
    return(
        <div>
            <Landscape/>
            <div className='summary'>
            <p className='summaryText'>We offer a few great options to have 
            a tasteful lunch or grabbing a quick bite in the park!<br/> Do you love not only eating delicious food, 
            but also cooking? Especially for you, we offer a collection of recipes from all over the world. 
            Choose your ingredients and immerse yourself in the incredible world of cooking.<Link to='/recipes' target="_blank" className='link'><TiArrowForwardOutline /></Link></p>
        </div> 
            <AllButtons buttons={buttonsRestaurant} choice={chosenRestaurant}/>
            <Restaurant restaurant={restaurant} showTextClick={showTextClick}/>
                <div className="foodQuestion">
                    <h2 className="headlineQuestion">TRYING SOMETHING NEW IN YOUR KITCHEN</h2>
                    <Link to='/recipes' target="_blank">
                        <img src={recipe} alt='icon' width='200px'/>
                    </Link>
                </div>
        </div>
    )
}
export default FoodCort;