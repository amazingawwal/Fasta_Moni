import CapitalText from "../Texts/CapitalText";
import Service_text from "../Header/Services/Service_text";


function MissionStatement (){
    return(
        <>
            <div className="mission">
                <div className="mission_card">
                    <div className="mission_stat_container">
                        <CapitalText className="mission_statement" text="MISSION IS TO PROTECT YOUR BUSINESSES & MUCH MORE" />
                    </div>
                    <div className="discover_more_container">
                        <Service_text className="discover_more" name = "DISCOVER MORE" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default MissionStatement;