import CapitalText from "../Texts/CapitalText";

function Professional(){
    return(
        <>
            <section className="professional">
            <div className="professional_container">
                <div className="one">
                    <h6>01</h6>
                </div>
                <div>
                    <CapitalText className="professional_advice" text="GET PROFESSIONAL ADVICE" ></CapitalText>
                    <CapitalText className="trusted" text="There are many variation of available but many have suffered alteration"/>
                </div>
            </div>
            <div className="professional_container">
                <div className="one">
                    <h6>02</h6>
                </div>
                <div>
                    <CapitalText className="professional_advice" text="TRUSTED & PROFESSIONAL" ></CapitalText>
                    <CapitalText className="trusted" text="There are many variation of available but many have suffered alteration"/>
                </div>
            </div>
            </section>
        </>
    )
};

export default Professional;