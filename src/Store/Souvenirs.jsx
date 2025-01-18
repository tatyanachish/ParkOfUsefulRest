function Souvenirs({souvenirs}){
    return(
        <div className="products">
            {souvenirs.map((item) => {
                const {id,image,title,price,searchTerm} = item
                return(
                    <div key={id}>
                        <div  >
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