import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const API = import.meta.env.VITE_API
const KEY = import.meta.env.VITE_KEY

const supabase = createClient(API, KEY);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;