
import Landscape from "../Landscape";
import GreenHouseNumbers from "./GreenHouseNumbers";
import Slides from './Slides'


function GreenHouse(){
    return(
        <div>
            <Landscape/>
            <div className='summary'>
                <p className='summaryText'>Our greenhouse is a place of rest and inspiration. It offers a chance to relax, enjoy the beauty of unique plant forms, and take a break from the daily routine. It’s a space you'll want to return to, where each visit brings new discoveries—unexpected shapes, curves, and colors.</p>
            </div>
            <GreenHouseNumbers/>
            <Slides/>
        </div>
    )
}
export default GreenHouse;
