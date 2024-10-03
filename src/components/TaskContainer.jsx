import ToDo from "./ToDo";

function TaskContainer(){
    return(
        <div id="taskContainer">
            <div id="taskTop">
                <h5>Monday</h5>
                <h6>12-March-2024</h6>
            </div>
            <div id="taskMiddle">
                <ToDo/>
                <ToDo/>
                <ToDo/>
            </div>
            <div id="taskBottom">
                <p class="note" id="noteHeader">Notes:</p>
                <p class="task">Dont forget to use perfume cause the special occasion</p>
            </div>
        </div>
    )
}


export default TaskContainer;