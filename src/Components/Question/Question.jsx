import CapitalText from "../Texts/CapitalText"
import AccordionSection from "./Accordion";
import ListItems from "./Items";
import YearsOfExperience from "./Years_Experience";
import { Talking_About, Customer_feedback } from "./Talking_Section";

function QuestionPage (){
    return(
            <>
            <div className="question_page">
                <CapitalText className="question_answer" text="QUESTION ANSWERS"/>
                <CapitalText className="help_business" text="We help our clients renew their business"/>
                <div className="accordion_list">
                    <AccordionSection/>
                    <div className="list_yoe">
                        <ListItems/>
                        <YearsOfExperience/>
                    </div>
                </div>
            </div>
            <div className="feedback_section">
                <Talking_About/>
                <Customer_feedback/>
                <Customer_feedback/>
            </div>
            </>
    )
};

export default QuestionPage;