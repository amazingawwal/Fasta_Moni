import CheckCircle from "../../Icons/CheckCircle";
import HSR from "./HighestSuccessRate";
import { HSR2 } from "./HighestSuccessRate";
import HSR_Text from "./HSR_Text";

function SuccessRate(){
    return(
        <div className="HSR_section">
            <div className="HSR_card1">
                <div className="success_rate_tile">
                    <div className="check_circle">
                        <CheckCircle/>
                    </div>
                    <HSR/>
                </div>
                <div className="success_rate_tile">
                    <div className="check_circle">
                        <CheckCircle/>
                    </div>
                    <HSR2/>
                </div>
            </div>
            <div className="HSR_card2">
                <HSR_Text/>
            </div>
            <div className="HSR_card2" >

            </div>
        </div>
        
    )
};

export default SuccessRate;
