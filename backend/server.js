const express = require("express")
const supabase = require("@supabase/supabase-js")

const app = express()
app.use(express.json())

const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "https://staebusbmbzoifcyrudr.supabase.co"
const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWVidXNibWJ6b2lmY3lydWRyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjM4NDY5MiwiZXhwIjoyMDI3OTYwNjkyfQ.0YP72IbBY4XuWfs7FcK8gew-lEahqcTUgMtbULwh5aQ"

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get("/", async (request, response) => {
    const getBlog = await db.from("blog").select()
    response.json({ getBlog })
})

app.post("/", async (request, response) => {
    const { title, description } = request.body
    const createPost = await db.from("blog").insert({ title, description })
    console.log("🚀 ~ app.post ~ createPost:", createPost)

    response.json({ createPost })
})

app.listen(PORT, () => {
    console.log("server running on port ", PORT)
})