import express from "express"; // Express backend framework
import pg from "pg"; // PostgreSQL
import axios from "axios"; // For making an API request
import bodyParser from "body-parser"; // For getting the data that was passed by the user in the front end
import env from "dotenv";
import cors from "cors";

env.config();

console.log(process.env.PG_USER);
console.log(process.env.PG_HOST);
console.log(typeof(process.env.PG_DATABASE));
console.log(typeof(process.env.PG_PASSWORD));
console.log(process.env.PG_PORT);

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


// take the task and store it as an array
// take each to do and store it as an array
// convert both to an object, by using task id as the key, and to do as the value

app.get("/tasksAndTodos", async (req, res) => {
    let tasks = await db.query("SELECT * FROM tasks");
    let todos = await db.query("SELECT * FROM todos");

    todos = todos.rows;
    tasks = tasks.rows;

    res.json([tasks, todos]);

    // console.log(`this is the list of todos`);
    // console.log(todos);
    // console.log(`this is the list of tasks`);
    // console.log(tasks);

    let hello = {
        "tasks" : tasks, 
        "todos" : todos,
    };
    console.log(JSON.stringify(hello.tasks));

});

app.listen(port, async()=> {
    console.log(`server is listening on port ${port}`);
});