import landscape from './icons/landscape.jpg'
function Landscape(){
    return(
    <div className='landscape'>   
        <div className='headline'>
            <h1>Park <br/>of Useful <br/>Rest</h1>  
        </div>     
        <img src={landscape} alt = 'photo' className='mainPhoto'/>            
    </div>
    
    )
}
export default Landscape;