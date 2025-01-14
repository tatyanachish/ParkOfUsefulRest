import { useParams,useNavigate, data } from "react-router-dom";
import { dataHome } from "./dataHome";
import Footer from "../Footer";
function EachStory(){
    const navigate = useNavigate()
    const { path } = useParams()
    return(
        <div>
           {dataHome.filter((story)=>story.path === path).map((elem,index)=> {
            return(
                <div key={index} className="elem">
                    <h2 className="storyHeadliner">{elem.title}</h2>
                    <img src={elem.image} alt='nature' width='300'/>
                    <p className="textStory">{elem.description}</p>
                    <button className="btn-restaurant" onClick={()=>navigate(-1)}>Go Back</button>

                </div>
            )
           })}
           <Footer/>
        </div>
    )
}
export default EachStory;