
/**
 * Nati Bingo — Server v5
 * Changes:
 *  - 80% winner / 20% house cut
 *  - Disqualification only notifies the cheater (silent to others)
 *  - Admin page (phone 251900310944 → admin)
 *  - Deposit/withdrawal requests with approve/reject
 *  - Full DB integration
 */

const express   = require('express');
const http      = require('http');
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const path      = require('path');

const app    = express();
const server = http.createServer(app);
const wss    = new WebSocket.Server({ server });
const PORT   = process.env.PORT || 3000;
