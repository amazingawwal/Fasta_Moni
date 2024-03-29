import CapitalText from "../Texts/CapitalText";
import { ArrowLeft, ArrowRight } from "../../Icons/ArrowIcon";

export function Talking_About(){
    return(
        <section className="talk_tile">
            <CapitalText className="talk_about" text="WHAT THEY ARE TALKING ABOUT?"/>
            <CapitalText className="trusted_by" text="Trusted by more than 4,200 customers"/>
            <div className="arrow">
                <ArrowLeft/>
                <ArrowRight/>
            </div>

        </section>
    )
};


export function Customer_feedback(){
    return(
        <div className="customer_tile">
            <CapitalText className="customer_words" text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"/>
            <CapitalText className="customer_name" text="TODD HIGGINS"/>
            <CapitalText className="customer_title" text="Customer"/>
        </div>
    )
}