// Using the data below, create an object constructor that will take in a customer's first name, last name, gender & address as well as an array of products they have ordered and will generate a confirmation email that reads:
// ===================================
// Dear {Ms./Mr.} {last name}:
 
// Thank you for your order! The following items will be sent out to you today and you should expect them in to arrive in 5 days. Your order will be sent to: {street}, {city}, {state} {zip}.
 
// Your Order:
// {quantity} {item name} - {item description} {price}
// ... repeat for all items
 
// Your total is {total price}
 
// If you have any concerns, please contact customer service.
 
// Sincerely,
// Joe Business-Guy
// ===================================
 
// Use the following order info arrays:
 
// order 1: 
//     5 pairs of socks. These socks will hug your feet in a way that will make you feel like your grandmother knitted them herself. $5.00 each.
//     3 shirts. Helping people feel cool in India’s intense heat made the fabric famous – so imagine how good our Madras Shirt will feel where you live. But we weren’t content to simply recreate the fabric. Although ours is woven in India like the original, we’ve improved it – with single-ply yarns that are ring­spun for strength and improved comfort. $25 each.
     
     
// order 2:
//    1 Toddler Girls Jacquard Twirl Dress. This gathered waist twirl dress is perfect for dress-up days and special occasions, and she’ll absolutely adore the pretty prints & patterns. $22.00
//    1 ClassMate Medium Backpack - Print. ClassMate® Medium Backpack’s kid-friendly features go beyond carrying capacity. For one thing, it’s made from durable, 600-denier polyester with a water-repellent finish. The no-tip base is 1200-denier pack cloth and the padded shoulder straps are securely stitched, so this bookbag can take all the dropping, dragging and tugging their school day has in store. In fact, we recommend making sure this is the pack they really want — it’s going to be with them a long time! $39.00
//    1 School Uniform Women's Scallop Ballet Flats. Feminine, traditional, and versatile, with a touch of scalloped detailing to set them apart from your typical ballets. Foam footbeds cushion you every step of the way, making them perfect for running errands in style, dressing up your jeans and tees, or walking around your office. $48.00
    
//    Make up your own customer information

// Create customer object
function customer(gender, first, last, address) {
  this.gender = gender;
  this.first = first;
  this.last = last;
  this.address = address;
};
function product(quantity, itemName, itemDes, itemPrice) {
  this.quantity = quantity;
  this.itemName = itemName;
  this.itemDes = itemDes;
  this.itemPrice = itemPrice;
};


// Create confirmation email

// function eMail(customer, order1) {
//   console.log(dear(customer));
//   console.log(ty(customer));
//   ordered(order1);
//   console.log(ending());
// };
// function eMail2(customer, order2) {
//   console.log(dear(customer));
//   console.log(ty(customer));
//   ordered2(order2);
//   console.log(ending());
// };
function generateEmail(customer, order) {
  console.log(dear(customer));
  console.log(ty(customer));
  ordered(order);
  console.log(ending());
};

function ending(){
  return 'If you have any concerns, please contact customer service.\n\nSincerely,\nThe Guy Who Coded This';
};

function dear(customer1){
  return `Dear ${customer1.gender} ${customer1.last},`;
};
function ty(customer1){
  return `Thank you for your order! The following items will be sent out to you today and you should expect them to arrive in 5 days. Your order will be sent to: ${customer1.address}.`;
};
function ordered(order){
  for (i=0; i < order.length; i++){
    console.log(order[i].quantity, order[i].itemName, order[i].itemDes, order[i].itemPrice);
  }
};
function dear(customer2){
  return `Dear ${customer2.gender} ${customer2.last},`;
};
function ty(customer2){
  return `Thank you for your order! The following items will be sent out to you today and you should expect them to arrive in 5 days. Your order will be sent to: ${customer2.address}.`;
};
function ordered2(product3, product4, product5){
  for (i=0; i < order2.length; i++){
    console.log(order2[i].quantity, order2[i].itemName, order2[i].itemDes, order2[i].itemPrice);
  }
};

var product1 = new product(5, 'pairs of socks', 'These socks will hug your feet in a way that will make you feel like your grandmother knitted them herself.', '$5 each.');
var product2 = new product(3, 'shirts. ', 'Helping people feel cool in India’s intense heat made the fabric famous – so imagine how good our Madras Shirt will feel where you live. But we weren’t content to simply recreate the fabric. Although ours is woven in India like the original, we’ve improved it – with single-ply yarns that are ring­spun for strength and improved comfort. ', '$25 each.');
var product3 = new product(1, 'Toddler Girls Jacquard Twirl Dress. ', 'This gathered waist twirl dress is perfect for dress-up days and special occasions, and she’ll absolutely adore the pretty prints & patterns. ', '$22.00');
var product4 = new product(1, 'ClassMate Medium Backpack - Print. ', 'ClassMate® Medium Backpack’s kid-friendly features go beyond carrying capacity. For one thing, it’s made from durable, 600-denier polyester with a water-repellent finish. The no-tip base is 1200-denier pack cloth and the padded shoulder straps are securely stitched, so this bookbag can take all the dropping, dragging and tugging their school day has in store. In fact, we recommend making sure this is the pack they really want — it’s going to be with them a long time! ', '$39.00');
var product5 = new product(1, "School Uniform Women's Scallop Ballet Flats. ", 'Feminine, traditional, and versatile, with a touch of scalloped detailing to set them apart from your typical ballets. Foam footbeds cushion you every step of the way, making them perfect for running errands in style, dressing up your jeans and tees, or walking around your office. ', '$48.00');

var order1 = [product1, product2];
var order2 = [product3, product4, product5];


var customer1 = new customer('Mr.', 'Dominick', 'Duliepre', 'Spectrum Center');
var customer2 = new customer('Ms.', 'Ariana', 'Grande', 'Madison Square Garden');

// eMail(customer1, order1);
// eMail2(customer2, order2);
generateEmail(customer1, order1);
generateEmail(customer2, order2);