import Header from "../components/main/Header"
import Footer from "../components/main/Footer"
import TaskContainer from "../components/TaskContainer"
import MainTaskContainer from "../components/MainTaskContainer"
import WeatherContainer from "../components/WeatherContainer"
import "../styles/homepage.css"

function Homepage(){
    return(
        <div id="homepage">
            <Header/>
            <div id="listOfTask">
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
                <TaskContainer/>
            </div>

            <button className="showMore">Show More</button>

            <div id="homepageBottom">
                <MainTaskContainer/>
                <WeatherContainer/>
                <MainTaskContainer/>
            </div>
            <Footer/>
        </div>
    )
}


export default Homepage;