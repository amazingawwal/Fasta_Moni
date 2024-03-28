import Play from "./Play";
import Market from "./Market";


function MarketPage(){
    return (
            <section className="container">
                <div className="row">
                    <div className="col">
                        <Play/>
                        <Market/>
                    </div>
                </div>
            </section>
    )
};

export default MarketPage;