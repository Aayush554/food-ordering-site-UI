const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/productRouter');

const Order = require('./models/orderModel');

const env = require('dotenv').config({ path: '../.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
    origin: "http://localhost:3000"
}