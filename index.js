require('dotenv').config();
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');
const FoodItem = require('./Classes/FoodItem');
const Menu = require('./Classes/Menu');
const { calculateTotal, getOrderTimestamp } = require('./utils/utils');

// Load Food Items from JSON
const menuPath = path.join(__dirname, 'data', 'menu.json');
const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));

// Create a Menu instance
const menu = new Menu();

// Add items to the Menu
menuData.forEach(item => menu.addItem(new FoodItem(item.id, item.name, item.price, item.category)));

console.log(`Welcome to ${process.env.APP_NAME}`);
menu.display();
