import BrainstormingIcon from "../../Icons/Brainstorming"
import CapitalText from "../Texts/CapitalText"

export function Solution_Card(){
    return(
        <div className="solution_card">
            <BrainstormingIcon/>  
            <CapitalText className="four_twenty" text="420" /> 
            <CapitalText className="consulting_solutions" text="CONSULTING SOLUTIONS" /> 
        </div>
    )
}