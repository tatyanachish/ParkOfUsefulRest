import imageOne from './photoGreenHouse/one.jpg'
import imageTwo from './photoGreenHouse/two.jpg'
import imageThree from './photoGreenHouse/three.jpg'
import imageFour from './photoGreenHouse/four.jpg'
function GreenHouseNumbers(){
    return (
    <div>
    <div className="numbers">
        <h2 className="headlineQuestion">GREENHOUSE IN NUMBERS</h2>            
    </div>
    <div className='facts'> 
        <div className='container'>                    
            <h2 className='storyHeadliner'>600 plants</h2>
            <img src={imageOne} alt='flower'width='300px'/> 
        </div>
        <div div className='container' >            
            <h2 className='storyHeadliner'>65 countries</h2>
            <img src={imageTwo} alt='flower'width='300px'/>  
        </div> 
        <div div className='container'>          
            <h2 className='storyHeadliner'>100 types</h2>
            <img src={imageThree} alt='flower'width='300px'/>      
        </div> 
        <div div className='container'>    
            <h2 className='storyHeadliner'>5 continents</h2>
            <img src={imageFour} alt='flower'width='300px'/>   
        </div>             
    </div> 
</div>
)
}
export default GreenHouseNumbers;