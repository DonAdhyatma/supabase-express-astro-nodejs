const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const PORT = 3211 || process.env.PORT;

const SUPABASE_URL = "https://pstsddgnmsxonjyziofw.supabase.co";
const SUPABASE_SERVICE_ROLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzdHNkZGdubXN4b25qeXppb2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzNTk0NjgsImV4cCI6MjA3MTkzNTQ2OH0.MCri78AyKTwWbLhh1izAGq59JMWiHbZn3jdYP4UP-rw";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (request, response) => {
  const getBlog = await db.from("blog").select();
  response.json({ getBlog });
});

app.post("/", async (request, response) => {
  const { title, description } = request.body;
  const createPost = await db.from("blog").insert({ title, description });
  console.log("🚀 ~ app.post ~ createPost:", createPost);

  response.json({ createPost });
});

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
