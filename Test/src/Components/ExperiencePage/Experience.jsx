import CapitalText from "../Texts/CapitalText";
import CustomCard from "../Card/Card";
import HR from "../MeetThePartner/HorizontalRule";
import Partners from "../MeetThePartner/Partners";


function ExperiencePage(){
    return (
        <>
            <section className="experience_section">
                <div className="experience">
                    <CapitalText className="experience_heading" text="REAL-WORLD EXPERIENCE"/>
                    <CapitalText className="experience_text" text="The best business consulting firm you can count on!"/>
                </div>
                <div className="wealth">
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                </div>
                <HR/>
                <Partners/>
            </section>

        </>
    )
};

export default ExperiencePage;