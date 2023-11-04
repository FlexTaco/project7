import { createClient } from "@supabase/supabase-js";

const URL = "https://cagxbewzzrlvykocprgo.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZ3hiZXd6enJsdnlrb2NwcmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTc3MTEsImV4cCI6MjAxNDA5MzcxMX0.ziZL09yYmfGpdEi2Sy3KD-095L-a_Uhm_9xaNijH3RA";

export const supabase = createClient(URL, API_KEY);
