require("dotenv").config();
const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

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
  console.log("server running on port:", PORT);
});
