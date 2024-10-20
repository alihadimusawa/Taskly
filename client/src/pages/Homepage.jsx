import Header from "../components/main/Header"
import Footer from "../components/main/Footer"
import TaskContainer from "../components/TaskContainer"
import MainTaskContainer from "../components/MainTaskContainer"
import WeatherContainer from "../components/WeatherContainer"
import "../styles/homepage.css"
import React, { useState, useRef, useEffect} from "react"
import axios from "axios";

function Homepage() {

    // -------- Change Overflow --------
    const [isOverflow, setOverflow] = useState("hidden");
    const [writings, setWritings] = useState("Scroll");
    const listRef = useRef(null); // Create a reference for #listOfTask

    function changeOverflow() {
        if (isOverflow === "hidden") {
            setWritings("Back To Top");
            setOverflow("scroll");
        } else {
            setWritings("Show More");
            setOverflow("hidden");

            // Scroll back to the top when changing to "hidden"
            if (listRef.current) {
                listRef.current.scrollTo({
                    top: 0, // Scroll to the top
                    behavior: "smooth" // Add smooth scrolling effect
                });
            }
        }
    }

    // -------- Change Background Color --------
    const [backgroundColor, setBackgroundColor] = useState("");
    const [shadowColor, setShadowColor] = useState([
        "#004643", "#5b0302", "#654f02", "#530119"
    ]);


    // -------- Getting Data from The Backend --------
    const [listOfTasks, setListOfTasks] = useState();
    const [listOfTodos, setListOfTodos] = useState();
    
    // Getting Task and Todos
    const fetchApi = async()=> {
        var response = await axios.get("http://localhost:3000/tasksAndTodos");
        
        response = response.data;;
        
        console.log(response[0]);
        console.log(response[1]);
    };

    fetchApi();

    // useEffect(() => {
    //     fetchApi()
    // }, []);

    return (
        <div id="homepage">
            <Header />
            <div
                id="listOfTask"
                style={{ overflowY: isOverflow }}
                ref={listRef} // Attach the ref to #listOfTask
            >
                {/* List of TaskContainer */}
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
            </div>

            <button className="showMore" onClick={changeOverflow}>
                {writings}
            </button>

            <div id="homepageBottom">
                <MainTaskContainer />
                <WeatherContainer />
                <MainTaskContainer />
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
