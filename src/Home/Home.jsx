import { useState } from "react";
import Footer from "../Footer";
import Landscape from "../Landscape";
import { dataHome } from "./dataHome";
import HomeStories from "./HomeStories";
import Weather from "../Weather";

function Home(){
    
    const [stories,setStories] = useState(dataHome)

    return(
        <div>
            <Landscape/>
            <div className='summary'>
                <p className='summaryText'>Located in the vibrant heart of the city, 
                    this park offers a serene escape from the urban bustle. 
                    With its expansive green lawns, tree-lined paths, and 
                    beautifully landscaped gardens, it's the perfect place to 
                    unwind, take a leisurely stroll, or enjoy a picnic. 
                    Whether you're seeking quiet moments in nature or a space to
                    gather with friends, this central park provides a peaceful 
                    retreat for all</p>
            </div> 
            <HomeStories stories={stories}/>           
            <Footer/>
        </div>
    )
}
export default Home;