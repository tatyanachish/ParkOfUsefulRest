import { useState } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { data } from "./data";



function Slides(){
    const [event,setEvent] = useState(0)
    const {image,title,description} = data[event]

    const nextEvent = () => {
        setEvent(event => {
            event++;
            if(event > data.length -1) {
                event=0
            }           
            return event;
    })
    }
    const previousEvent = () => {
        setEvent(event => {
            event --;
            if (event < 0) {
                event = data.length -1
            }
            return event
        })
    }
    return(
        <div>
 <div className="question">
                <h2 className="storyHeadliner">WHY YOU SHOULD VISIT OUR GREENHOUSE?</h2>
            </div>
            <div  className="slides">
                <p className="titleSlides">{title}</p>
                <div className="carusel">
                    <button className='btn-slides' onClick={previousEvent} ><IoArrowUndoOutline /></button>
                    <img src={image} alt='photo' width='300px'/> 
                    <button className='btn-slides' onClick={nextEvent}><IoArrowRedoOutline /></button>
                    </div>
                <p className="textStory">{description}</p>
            </div>
        </div>
    )
}
export default Slides;