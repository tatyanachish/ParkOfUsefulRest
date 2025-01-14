import logo from './icons/logo.png'
function Logo(){
    return(
        <div className='header'>
            <div>
                <img src = {logo} alt='logo' width='80' className='logo'/>
            </div>
            <div className='namePark'>
                <h1 className='heading'>Park <br/>of Useful <br/>Rest</h1>      
            </div>  
        </div>
    )
    }
export default Logo;