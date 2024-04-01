import CapitalText from "../../Texts/CapitalText"
import Business from "./BusinessGrowth";
import MissionStatement from "../../Mission/Mission";

function Case(){
    return(
        <>
            <CapitalText className="new_case" text="NEW CASE STUDIES" />
            <CapitalText className="clients" text="We help our clients renew their business" />
            <div className="business_container">
                <Business/>
                <Business/>
                <Business/>
            </div>
            <MissionStatement/>
        </>
    )
}

export default Case;