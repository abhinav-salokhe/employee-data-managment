import express from 'express';
import prisma from './config/prisma.js';
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // allow only your frontend
  credentials: true // if you need cookies / auth headers
}));

// Get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single employee by ID
app.get('/api/employees/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new employee
app.post('/api/employees', async (req, res) => {
  const { name, email, position } = req.body;
  if (!name || !email || !position)
    return res.status(400).json({ error: 'All fields required' });
  try {
    const employee = await prisma.employee.create({ data: { name, email, position } });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an employee
app.put('/api/employees/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });
  const { name, email, position } = req.body;
  try {
    const employee = await prisma.employee.update({
      where: { id },
      data: { name, email, position }
    });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee
app.delete('/api/employees/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });
  try {
    await prisma.employee.delete({ where: { id } });
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
