function Restaurant({restaurant,showTextClick}){
    return(
        <div>
            <div className="question">
                <h2 className="headlineQuestion">CHOOSE WHAT YOU PREFER OR JUST LOOK AT THE LIST OF CAFES</h2>
            </div>
            <div className='foodContainer'>
                {restaurant.map((cafe) => {
                    const {id,image,title,cusine,description,location,showMore} = cafe
                    return (
                        <div key={id}>        
                        <div >                   
                            <p className="titleFood">{title}</p>
                            <div className="foodList">
                                <div className="foodPhoto">
                                    <img src={image} alt='photo' width='170px' height='170px'/>
                                </div>
                                <div className="foodDescription">
                                    <p className="textStory">Location: {location}</p> 
                                    <p className="textStory">Menu: {cusine}</p>                                
                                    <p className="textStory">Description: {showMore ? description : description.substring(0,100)} 
                                    <button className="show" onClick={() => showTextClick(cafe)}>{showMore ? 'Show less': 'Show more'}</button></p>                              
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Restaurant;