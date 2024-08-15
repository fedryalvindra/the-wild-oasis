import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uqnmnwzncetkeupcdqzs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbm1ud3puY2V0a2V1cGNkcXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NjYxMzAsImV4cCI6MjAzODA0MjEzMH0.TCuRG8oKJx6Wlt-xQxd37uoSBjPF55jdzQAoa3gK510";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// 1. GIT INIT