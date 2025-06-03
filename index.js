const express = require('express');
const app = express();
const port = 3000;

// Helper function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

// API endpoint
app.get('/isprime', (req, res) => {
    const num = parseInt(req.query.number);

    if (isNaN(num)) {
        return res.status(400).json({ error: "Invalid number input" });
    }

    const result = isPrime(num);
    res.json({ number: num, isPrime: result });
});

app.listen(port, () => {
    console.log(`Prime checker API running at http://localhost:${port}`);
});
