import CapitalText from "../Texts/CapitalText";
import BitbucketLogo from "../../Icons/Bitbucket";
import Service_text from "../Header/Services/Service_text";

function Card(){
    return (
        <div className="card_">
            <CapitalText className="wealth_mgt" text="WEALTH MANAGEMENT"/>
            <div className="read_n_logo">
                <Service_text className="read" name="READ MORE" />
                <BitbucketLogo/>
            </div>
        </div>
    )
};


export default Card;
