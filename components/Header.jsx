// Continuate a lavorare nella stessa repo di ieri, creando un array 
// di link nell’header e sfruttandolo in maniera dinamica. 
// Una volta fatto, provate a centralizzare i dati in App.jsx e a 
// passarli come prop.


const arrayLinks = [
    { id: 1, text: "CHARACTERS", href: "#" },
    { id: 2, text: "COMICS", href: "#" },
    { id: 3, text: "MOVIES", href: "#" },
    { id: 4, text: "TV", href: "#" },
    { id: 5, text: "GAMES", href: "#" },
    { id: 6, text: "COLLECTIBLES", href: "#" },
    { id: 7, text: "VIDEOS", href: "#" },
    { id: 8, text: "FANS", href: "#" },
    { id: 9, text: "NEWS", href: "#" },
    { id: 10, text: "SHOP", href: "#" }
  ];
  

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