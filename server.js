const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const items = [{ id: "1", name: "ram" }];

// Create a new item
app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Read a single item by index
app.get("/items/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Update an item by index
app.put("/items/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    items[index] = req.body;
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Delete an item by index
app.delete("/items/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < items.length) {
    const deletedItem = items.splice(index, 1)[0];
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
