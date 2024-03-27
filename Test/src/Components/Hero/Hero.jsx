import CapitalText from "../Texts/CapitalText";
import Service_text from "../Header/Services/Service_text";

const Hero = ()=>{
    return(
      <>
        <section className="hero_section">
            <div className="hero" >
                <CapitalText className="capital_text" text="WELCOME TO CODESHARE"></CapitalText>
                <CapitalText className="big_text" text="CONSULTING FOR EVERY BUSINESS"/>
                <div>
                    <Service_text className="discover" name = "DISCOVER MORE"/>
                </div>
            </div>
        </section>
      </>
    )
};

export default Hero;