function Buttons({buttons,choice}){
    return(
        <div className="btn-container">
            {buttons.map((button,id) => (
                <button key={id} className="btn-restaurant"  onClick={() => choice(button.value) }>
                    {button.label}
                </button>
            ))}
        </div>
    )
}
export default Buttons;