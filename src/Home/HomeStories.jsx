import { Link } from "react-router-dom";
function HomeStories({stories}){
    return(
        <div className="container-story">
            {stories.map((story)=> {
                const {id,title,image,description,learnMore} = story
                return(
                    <div key={id} className="eachStory">                        
                        <h2 className="storyHeadliner">{title}</h2>
                        <img src={image} alt='nature'/>
                        <p className="textStory">{description.substring(0,190) + '...'}</p>
                        <Link to={`/each/${story.path}`}>
                            <button className="show">Learn more</button>  
                        </Link>            
                    </div>
                )
            })}
        </div>
    )
}
export default HomeStories;