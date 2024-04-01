import TickList from "./TickList"
import CapitalText from "../Texts/CapitalText";

function ListItems(){
    const table = [
        <CapitalText className="item" text="Lorem ipsum dolor sit amet"/>,
        <CapitalText className="item" text="Ut enim minim veniam, quis noud eat"/>,
        <CapitalText className="item" text="Ut enim minim veniam, quis noud eat"/>,
        <CapitalText className="item" text="Ut enim minim veniam, quis noud eat"/>,
        <CapitalText className="item" text="Ut enim minim veniam, quis noud eat"/>
        
    ]

    return(
        <>
        <div className="tick_list">
            <TickList  items={table}   />
        </div>
        </>
    )
}

export default ListItems;