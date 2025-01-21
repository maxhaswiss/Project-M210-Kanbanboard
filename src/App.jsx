import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import BoardOverview from "./components/Boardoverview";
import { supabase } from "./supabaseClient";


function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });


    return () => {
      subscription?.unsubscribe?.();
    };
  }, []);
  
  return (
    <div>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <div>
          <h1> Kanban Board </h1>
          <BoardOverview />
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
