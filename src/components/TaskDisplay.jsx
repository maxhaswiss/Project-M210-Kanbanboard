import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function TaskDisplay({ boardId }) {
    const [tasks, setTasks] = useState([]);
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

    const groupedTasks = {
        "to-do": tasks.filter((task) => task.task_status === "to-do"),
        "in-progress": tasks.filter((task) => task.task_status === "in-progress"),
        "done": tasks.filter((task) => task.task_status === "done"),
      };
      return (
        <div>
            <h2>Tasks for Board</h2>
            {error && <p style={{ color: "red"}}>{error}</p>}
            <div style={{ display: "flex", gap: "20px" }}>
            {Object.keys(groupedTasks).map((status) => (
            <div key={status}>
                <h3>{status.toUpperCase()}</h3>
                <ul>
                {groupedTasks[status].map((task) => (
                    <li key={task.task_id}>
                    <strong>{task.task_name}</strong>
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