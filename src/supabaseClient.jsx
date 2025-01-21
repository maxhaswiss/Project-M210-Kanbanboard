import { createClient } from "@supabase/supabase-js";

const API = import.meta.env.VITE_API;
const KEY = import.meta.env.VITE_KEY;

export const supabase = createClient(API, KEY);