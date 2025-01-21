import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function TaskDisplay({ boardId }) {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("to-do");
  const [error, setError] = useState("");

  useEffect(() => {
    if (boardId) {
      getTasks();
    }
  }, [boardId]);

  const getTasks = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("board_id", boardId);

    if (error) {
      setError(error.message);
    } else {
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
    } else {
      setTaskName("");
      setTaskDescription("");
      setTaskStatus("to-do");
      getTasks();
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    const { error } = await supabase
      .from("tasks")
      .update({ task_status: newStatus })
      .eq("task_id", taskId);

    if (error) {
      setError(error.message);
    } else {
      getTasks();
    }
  };

  const moveTask = (taskId, currentStatus, direction) => {
    const statuses = ["to-do", "in-progress", "done"];
    const currentIndex = statuses.indexOf(currentStatus);

    if (direction === "left" && currentIndex > 0) {
      updateTaskStatus(taskId, statuses[currentIndex - 1]);
    }

    if (direction === "right" && currentIndex < statuses.length - 1) {
      updateTaskStatus(taskId, statuses[currentIndex + 1]);
    }
  };

  const groupedTasks = {
    "to-do": tasks.filter((task) => task.task_status === "to-do"),
    "in-progress": tasks.filter((task) => task.task_status === "in-progress"),
    "done": tasks.filter((task) => task.task_status === "done"),
  };

  return (
    <div>
      <h2>Tasks</h2>
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
            <ul style={{ listStyle: "none", padding: 0 }}>
              {groupedTasks[status].map((task) => (
                <li key={task.task_id}>
                  <div
                    style={{
                        padding: "15px",
                        marginBottom: "10px",
                        backgroundColor: "#333", 
                        color: "#fff", 
                        border: "1px solid #444", 
                        borderRadius: "8px", 
                        maxWidth: "300px",
                        maxHeight: "150px",
                        overflow: "auto",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", 
                    }}
                  >
                    <strong>{task.task_title}</strong>
                    <p>{task.task_description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <button
                        onClick={() => moveTask(task.task_id, task.task_status, "left")}
                        disabled={task.task_status === "to-do"}
                        style={{ cursor: task.task_status === "to-do" ? "not-allowed" : "pointer" }}
                      >
                        ←
                      </button>
                      <button
                        onClick={() => moveTask(task.task_id, task.task_status, "right")}
                        disabled={task.task_status === "done"}
                        style={{ cursor: task.task_status === "done" ? "not-allowed" : "pointer" }}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskDisplay;
