import {useEffect, useState } from "react";
import { supabase } from '../supabaseClient'

function BoardOverview() {
    const [boards, setBoards] = useState([]);
    const [boardName, setBoardName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        getBoards();
    }, []);

    const getBoards = async () => {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
        if (sessionError || !session) {
          setError("User is not logged in");
          setBoards([]);
          return;
        }
      
        const user = session.user;
      
        const { data, error } = await supabase
          .from("Boards")
          .select("*")
          .eq("board_owner", user.id);
      
        if (error) {
          setError(error.message);
        } else {
          setBoards(data);
        }
      };
      
      const createBoard = async () => {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
        if (sessionError || !session) {
          setError("User is not logged in");
          return;
        }
      
        const user = session.user;
      
        const { data, error } = await supabase
          .from("Boards")
          .insert([{ board_name: boardName, board_owner: user.id }]);
      
        if (error) {
          setError(error.message);
        } else {
          setBoards((prev) => [...prev, data[0]]);
          setBoardName("");
        }
      };
      
 return (
    <div>
      <h2>Your Boards</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {boards.map((board) => (
          <li key={board.board_id}>{board.board_name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="New Board Name"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
      />
      <button onClick={createBoard}>Create Board</button>
    </div>
  );
} 

export default BoardOverview;