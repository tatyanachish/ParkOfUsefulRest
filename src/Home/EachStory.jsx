import { useParams,useNavigate } from "react-router-dom";
import { dataHome } from "./dataHome";
import Footer from "../Footer";
function EachStory(){
    const navigate = useNavigate()
    const { path } = useParams()
    const story = dataHome.find((story) => story.path === path);
    return(
        <div>        
                <div className="elem">
                    <h2 className="storyHeadliner">{story.title}</h2>
                    <img src={story.image} alt='nature' width='300'/>
                    <p className="textStory">{story.description}</p>
                    <button className="btn-restaurant" onClick={()=>navigate(-1)}>Go Back</button>
                </div>
        </div>
    )
}
export default EachStory;