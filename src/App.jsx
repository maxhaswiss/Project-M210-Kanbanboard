import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const API = import.meta.env.VITE_API;
const KEY = import.meta.env.VITE_KEY;

const supabase = createClient(API, KEY);

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
          <p>Welcome, you are logged in!</p>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
