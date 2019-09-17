const express = require('express');
const path = require('path');
const frameguard = require('frameguard');
const PORT = process.env.PORT || 3002;
const DIST_DIR = path.join(__dirname, '../../dist');

// Configure and start express
const app = express();
app.use(express.static(DIST_DIR));
app.use(express.json());

app.use(
    frameguard({
        action: 'allow-from',
        domain: 'https://trailhead.salesforce.com/'
    })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
