import Play from "./Play";
import Market from "./Market";
import 'bootstrap/dist/css/bootstrap.min.css'
import Professional from "./Professional";


function MarketPage(){
    return (
        <>
            <section className="market_container">
                <div className="market_col">
                    <Play/>
                </div>
                <div className="market_col">
                    <Market/>
                </div>
            </section>
            <div>
                <Professional/>
            </div>
        </>
    )
};

export default MarketPage;