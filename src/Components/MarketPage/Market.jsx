import CapitalText from "../Texts/CapitalText";
import PhoneRing from "../../Icons/PhoneRing";

function Market (){
    return(
        <>
            <CapitalText className="market" text="WE'RE LEADING IN THE MARKET" />
            <CapitalText className="lorem" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard" />
            <CapitalText className="years"  text="We have 35+ years of experience. We offer marketing and consulting services." />
            <div className="consulting_container">
                <progress className="progress-bar" value="89" max="100"></progress>
                    <div className="consulting">
                        <h6>CONSULTING</h6>
                        <h6>88%</h6>
                    </div>
            </div>
            <div className="advices_container">
                <progress className="progress-bar" value="68" max="100"></progress>
                    <div className="advices">
                        <h6>ADVICES</h6>
                        <h6>68%</h6>
                    </div>
            </div>
            <div className="call_us">
                <div className="phone_ring">
                    <PhoneRing/>
                </div>
                <div className="call_details">
                    <CapitalText className="question" text="Have any question? Give us a call" />
                    <CapitalText className="phone_number" text="+92 666 888 0000"/>
                </div>
            </div> 
        </>
    )
};

export default Market;