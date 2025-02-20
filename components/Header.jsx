// Continuate a lavorare nella stessa repo di ieri, creando un array 
// di link nell’header e sfruttandolo in maniera dinamica. 
// Una volta fatto, provate a centralizzare i dati in App.jsx e a 
// passarli come prop.

const arrayLinks = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

import Links from "/components/Links"

const Header = () => {
    return (
        <header>
            <figure>
                <img className="logo" src="../src/assets/img/dc-logo.png" alt="" />
            </figure>
            <Links links={arrayLinks}/>
        </header>
    )
}


export default Header


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