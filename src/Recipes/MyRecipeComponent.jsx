function MyRecipeComponent ({label,image,cusine,ingredient,calories}) {
    return (
        <div className="container-recipe">
                <h2>{label}</h2>
                <img className='image-recipe' src={image} alt='food'/>
                <h3>{cusine} cusine</h3>
                <ul className='container'>
                {ingredient.map((item, index)=> (
                    <li className='text-recipe' key = {index}>{item}</li>
                ))}              
                </ul>
                <p className='text-recipe'>{calories.toFixed()} calories</p>
                
        </div>
        
    )
}
export default MyRecipeComponent;