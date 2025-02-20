
import Comics from "./comics";
import comics from "../data/comics"

const Main = () => {

    return (
        <main>
            <div className="jumbotron" >
            </div>
            <div className="container" >
                <div className="cardsContainer" >
                    <Comics comics={comics} />
                    <div className="loadMore" >
                        <a href="#">
                            LOAD MORE
                        </a>
                    </div>
                </div>
            </div>





            <div className="infoContainer">
                <ul>

                    <div className="infoCards" >
                        <a className="infoIcons" >
                            <img src="../src/assets/img/buy-comics-digital-comics.png" alt="" />
                        </a>
                        <span className="infoText">DIGITAL COMICS</span>
                    </div>

                    <div className="infoCards" >
                        <a className="infoIcons" >
                            <img src="../src/assets/img/buy-comics-merchandise.png" alt="" />
                        </a>
                        <span className="infoText" >DC MERCHANDISE</span>
                    </div>

                    <div className="infoCards" >
                        <a className="infoIcons" >
                            <img src="../src/assets/img/buy-comics-subscriptions.png" alt="" />
                        </a>
                        <span className="infoText" >SUBSCRIPTIONS</span>
                    </div>

                    <div className="infoCards" >
                        <a className="infoIcons" >
                            <img src="../src/assets/img/buy-comics-shop-locator.png" alt="" />
                        </a>
                        <span className="infoText" >COMIC SHOP LOCATOR</span>
                    </div>

                    <div className="infoCards" >
                        <a className="infoIcons" >
                            <img src="../src/assets/img/buy-dc-power-visa.svg" alt="" />
                        </a>
                        <span className="infoText" >DC POWER VISA</span>
                    </div>

                </ul>
            </div>
        </main>
    )
}


export default Main