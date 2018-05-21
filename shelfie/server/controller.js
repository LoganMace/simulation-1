const getInventory = (req, res, next) => {
  req.app
    .get("db")
    .get_inventory()
    .then(response => {res.status(200).json(response)})
    .catch(err => {res.status(500).json(err)});
};

const addProduct = (req, res, next) => {
  req.app
    .get("db")
    .add_product([req.body.productname, req.body.price, req.body.imageurl])
    .then(response => {res.status(200).json("all good")})
    .catch(err => {res.status(500).json(err)});
};

module.exports = {
  getInventory,
  addProduct
};
