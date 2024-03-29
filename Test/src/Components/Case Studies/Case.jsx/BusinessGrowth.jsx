import CarIcon from "../../../Icons/CarIcon";
import CapitalText from "../../Texts/CapitalText";

function Business(){
    return(
        <>
            <div className="business_case">
                <CarIcon/>
                <CapitalText className="leadership" text="THOUGHT LEADERSHIP" />
                <CapitalText className="business_growth" text="BUSINESSES GROWTH" />
            </div>
        </>
    )
};

export default Business;