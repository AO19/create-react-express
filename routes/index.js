const express = require('express');
const router = express.Router();

router.get('/api/names', (req, res) => {
  const names = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Johnny', lastName: 'English'},
    {id: 3, firstName: 'Peter', lastName: 'Parker'},
  ];

  res.json(names);
});

module.exports = router;
