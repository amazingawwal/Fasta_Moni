import { Solution_Card } from "./Solution"
import BusinessGrowth from "./BusinessGrowth"

export default function Consulting (){
    return (
        <>
            <div className="consult_container">
                <div className="consulting_tile">
                    <Solution_Card/>
                    <Solution_Card/>
                    <Solution_Card/>
                    <Solution_Card/>
                </div>
            </div>
            <BusinessGrowth/>
        </>
        
    )
}