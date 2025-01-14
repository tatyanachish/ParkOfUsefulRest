function Souvenirs({souvenirs}){
    return(
        <div className="products">
            {souvenirs.map((item) => {
                const {id,image,title,price,searchTerm} = item
                return(
                    <div>
                        <div key={id} >
                            <img src={image} width='350'/>
                        </div>
                        <div>
                            <p className="product-card">{title} <br/>price:{price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Souvenirs;