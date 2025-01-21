import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function TaskDisplay({ boardId }) {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("")
    const [taskStatus, setTaskStatus] = useState("to-do")
    const [error, setError] = useState("")

    useEffect(() => {
        if (boardId) {
            getTasks();
        }
    }, [boardId]);

    const getTasks = async () => {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError || !session) {
            setError("User is not logged in")
            setTasks([]);
            return;
        }
        const {data, error} = await supabase.from("tasks").select("*").eq("board_id", boardId);

        if (error) {
            setError(error.message);
        }else {
            setTasks(data);
        }
    };

    const addTask = async () => {
        if (!taskName.trim()) {
            setError("Task name is required");
            return;
        }
        const { error } = await supabase.from("tasks").insert([
            {
                task_title: taskName,
                task_description: taskDescription,
                task_status: taskStatus,
                board_id: boardId,
            },
        ]);
        if (error) {
            setError(error.message);
        }else {
            setTaskName("");
            setTaskDescription("");
            setTaskStatus("to-do");
            getTasks();
        }
    };

    const groupedTasks = {
        "to-do": tasks.filter((task) => task.task_status === "to-do"),
        "in-progress": tasks.filter((task) => task.task_status === "in-progress"),
        "done": tasks.filter((task) => task.task_status === "done"),
      };

      return (
<div>
      <h2>Tasks for Board</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        >
          <option value="to-do">To-Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={addTask} disabled={!taskName.trim()}>
          Add Task
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {Object.keys(groupedTasks).map((status) => (
          <div key={status}>
            <h3>{status.toUpperCase()}</h3>
            <ul>
              {groupedTasks[status].map((task) => (
                <li key={task.task_id}>
                  <strong>{task.task_title}</strong>
                  <p>{task.task_description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
      )
}

export default TaskDisplay;