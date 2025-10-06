import cors from "cors";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

//---------------------------------------------
// Routes
app.get("/", (req, res) => {
  res.send("Server is running, good job Artur Wagner... ☄️");
});

app.get("/profiles", async (req, res) => {
  try {
    const data = await prisma.profile.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "⚠️ Error gathering profiles" });
  }
});

app.post("/profiles", async (req, res) => {
  try {
    const { name, username, bio, profession, online } = req.body;
    const newProfile = await prisma.profile.create({
      data: { name, username, bio, profession, online },
    });
    res
      .status(201)
      .json({ message: "✔️ Profile created successfully!", newProfile });
  } catch (error) {
    res
      .status(500)
      .json({ error: "⚠️ Error creating user", details: error.message });
  }
});

app.put("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const edit = req.body;

    const updated = await prisma.profile.update({
      where: { id: Number(id) },
      data: edit,
    });

    res
      .status(200)
      .json({ message: "✔️ Profile successfully edited", updated });
  } catch (error) {
    res
      .status(500)
      .json({ error: "⚠️ Error editing user", details: error.message });
  }
});

app.delete("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.profile.delete({
      where: { id: Number(id) },
    });
    res
      .status(200)
      .json({ message: `✔️ User ${id} deleted successfully`, deleted });
  } catch (error) {
    res.status(500).json({ error: "⚠️ Error deleting user" });
  }
});

//---------------------------------------------
// Server
app.listen(3000, () => {
  console.log("🚀 Server is on http://localhost:3000/");
});
