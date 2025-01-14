import './Loader.css'
function Loader() {
    return(
        <div>  
            <p className="correct">Please, enter the correct city name</p>         
            <div className='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        
        </div>
    )
}
export default Loader;