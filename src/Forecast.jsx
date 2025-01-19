function Forecast({temp,humidity,cloud}){
    const date = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let day = days[date.getDay()];    
    let month = months[date.getMonth()]; 
    return(
      
        <div className="forecast"> 
                <p className="date">{day} {date.getDate()} {month} {date.getFullYear()}</p> 
                <p>Temperature {temp.toFixed()}<span>°</span></p>
                <p>Humidity: {humidity}</p>
                <p>{cloud}</p>               
        </div>
    )
}
export default Forecast;