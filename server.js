const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: '123456',
      isCompleted: false,
      description: 'Walk the dog',
    },
    
  ];

  res.json(tasks);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en http://localhost:${PORT}`);
});

module.exports=app.express
