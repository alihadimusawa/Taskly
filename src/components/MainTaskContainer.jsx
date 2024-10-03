import ToDo from "./ToDo";

function MainTaskContainer(){
    return (
        <div id="mainTaskContainer">
            <h2 className="mainTaskHeading">
                Daily Routine
            </h2>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <ToDo/>
            <button className="editButton">Edit</button>
        </div>
    )
}

export default MainTaskContainer;