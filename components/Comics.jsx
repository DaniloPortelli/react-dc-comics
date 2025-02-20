
const Comics = (props) => {

    return (

        props.comics.map((fumetto) => (
            <div className="fumetto" >
                <>
                    <figure>
                        <img className="imgFumetti" src={fumetto.thumb} alt={fumetto.description} />
                    </figure>
                    <div className="textNomeFumetto" >
                        <span className="nomeFumetto" >
                            {fumetto.series}
                        </span>
                    </div>

                </>
            </div>
        ))
    )
}



export default Comics