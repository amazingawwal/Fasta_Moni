import CapitalText from "../Texts/CapitalText"
import AccordionSection from "./Accordion";
import MyAccordion from "./AccordionCard";

function QuestionPage (){
    return(
            <div>
                <CapitalText className="question_answer" text="QUESTION ANSWERS"/>
                <CapitalText className="help_business" text="We help our clients renew their business"/>
                <AccordionSection/>
                <MyAccordion/>
            </div>
    )
};

export default QuestionPage;