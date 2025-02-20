// Continuate a lavorare nella stessa repo di ieri, creando un array 
// di link nell’header e sfruttandolo in maniera dinamica. 
// Una volta fatto, provate a centralizzare i dati in App.jsx e a 
// passarli come prop.


const Links = (props) => {
    return (
        <ul>
            {props.links.map((link, index) => (
                <li key={index}><a href={link.href} >{link.text}</a></li>
            ))}
        </ul>
    )
}


export default Links


{/* <a>CHARACTERS</a>
                <a>COMICS</a>
                <a>MOVIES</a>
                <a>TV</a>
                <a>GAMES</a>
                <a>COLLECTIBLES</a>
                <a>VIDEOS</a>
                <a>FANS</a>
                <a>NEWS</a>
                <a>SHOP</a> */}