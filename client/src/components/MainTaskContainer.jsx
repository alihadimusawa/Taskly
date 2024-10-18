import ToDo from "./ToDo";

function MainTaskContainer(){
    return (
        <div id="mainTaskContainer">
            <h2 className="mainTaskHeading">
                Daily Routine
            </h2>

            <div className="mainTaskMiddle">
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
            </div>
            <button className="editButton">Edit</button>
        </div>
    )
}

export default MainTaskContainer;