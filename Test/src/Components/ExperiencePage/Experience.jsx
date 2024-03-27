import CapitalText from "../Texts/CapitalText";
import Card from "../Card/Card";

function ExperiencePage(){
    return (
        <>
            <section className="experience_section">
                <div className="experience">
                    <CapitalText className="experience_heading" text="REAL-WORLD EXPERIENCE"/>
                    <CapitalText className="experience_text" text="The best business consulting firm you can count on!"/>
                </div>
                <div className="Wealth">
                    <Card/>

                </div>
            </section>

        </>
    )
};

export default ExperiencePage;