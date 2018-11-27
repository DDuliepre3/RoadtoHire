require("./db/mongoose");
const { consoles } = require("./models/model");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
var ObjectID = require("mongodb").ObjectID;
app.use(cors());

app.get("/products", (request, response) => {
  consoles.find().then(products => {
    response.send(products);
  });
});

app.get("/products/:id", (request, response) => {
  const id = parseInt(request.params.id);

  consoles.findOne({ productId: id }).then(products => {
    if (products) {
      response.send({ products });
    } else {
      response.status(400).send("Yerrr. Not working fam!");
    }
  });
});

app.post("/products", (request, response) => {
  const {
    productId,
    title,
    creator,
    description,
    price,
    productType,
    productCategory,
    url,
    caption,
    availability
  } = request.body;
  const product = new consoles({
    productId,
    title,
    creator,
    description,
    price,
    productType,
    productCategory,
    url,
    caption,
    availability
  });
  product.save().then(obj => {
    response.send(obj);
  });
});

app.delete("/products/:id", (request, response) => {
  const id = parseInt(request.params.id);
  consoles
    .findOneAndDelete({ productId: id })
    .then(product => {
      if (product) {
        response.send(product);
      } else {
        response.status(400).send("Yerrr. Not working fam!");
      }
    })
    .catch(err => response.status(400).send(err));
});

app.put("/products/:id", (request, response) => {
  const id = parseInt(request.params.id);
  let body = request.body;

  consoles
    .findOneAndUpdate({ productId: id }, { $set: body }, { new: true })
    .then(products => {
      if (!products) {
        return response.status(400).send("Unable To Update Card");
      } else {
        response.send(products);
      }
    })
    .catch(err => response.status(400).send(err));
});

app.post("/admin", (request, response) => {
  const {
    productId,
    title,
    creator,
    price,
    productCategory,
    url
  } = request.body;
  const product = new consoles({
    productId,
    title,
    creator,
    price,
    productCategory,
    url
  });
  product.save().then(obj => {
    response.send(obj);
  });
});

app.put("/admin/:id", (req, res) => {
  console.log(req.body);
  const { productId, title, creator, price, productCategory, url } = req.body;
  const newProduct = {
    productId,
    title,
    creator,
    price,
    productCategory,
    url
  };
  Products.findByIdAndUpdate(productId, newProduct, (err, product) => {
    if (err) return err;
    return product;
  })
    .then(product => res.json(product))
    .catch(err => res.sendStatus(500));
});

app.delete("/admin/:id", (req, res) => {
  Products.findByIdAndDelete(req.params.id, err => {
    if (err) return err;
  })
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500));
});

app.listen(7272);
