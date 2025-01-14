import Footer from "../Footer";
import Landscape from "../Landscape";
import { TiArrowForwardOutline } from "react-icons/ti";
import Restaurant from "./Restaurant";
import { useState } from "react";
import { dataRestaurant } from "./dataRestaurant";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import recipe from './photoFood/recipe.png'


function FoodCort(){
    const [restaurant,setRestaurant] = useState(dataRestaurant)
    const chosenRestaurant = (searchTerm) => {
        const newRestaurant = dataRestaurant.filter(cafe => cafe.searchTerm.includes(searchTerm))
        setRestaurant(newRestaurant)
      }  
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
            <Buttons filteredRestaurant={chosenRestaurant} setRestaurant={setRestaurant}/>
            <Restaurant restaurant={restaurant} showTextClick={showTextClick}/>
           
                <div className="foodQuestion">
                    <h2 className="headlineQuestion">TRYING SOMETHING NEW IN YOUR KITCHEN</h2>
                    <Link to='/recipes' target="_blank">
                        <img src={recipe} alt='icon' width='200px'/>
                    </Link>
                </div>
           
            <Footer/>
        </div>
    )
}
export default FoodCort;