//Require Express
var express = require( 'express' );
var app = express();
var path = require( 'path' );

//Get body-parser
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));

//Mongoose/MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_product_api');
var productSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true },
    imageUrl: { type: String }
}, {timestamps: true});
mongoose.model('Product', productSchema);
var Product = mongoose.model('Product');
mongoose.Promise = global.Promise;

//Routes
//Get all products
app.get('/api/products', function(req, res){
    Product.find({}, function(err, product){
        if(err){
            console.log("Error from pulling all products", err);
            res.json({message: "Error", error: err});
        } else {
            res.json(product);
        }
    })
})

//Retrieve a product by ID
app.get('/api/edit/:id', function(req, res){
    Product.findOne({_id: req.params.id}, function(err, product){
        if(err){
            console.log("Error getting the product from mongo");
            res.json({message: "Error", error: err});
        } else {
            res.json(product);
        }
    })
})

//Create a new product
app.post('/api/new', function(req, res){
    var product = new Product(req.body);

    product.save(function(err){
        if(err){
            console.log('Error while adding product');
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully added"});
        }
    })
})

//Update product by ID
app.put('/api/edit/:id', function(req, res){
    Product.update({_id: req.params.id}, req.body, {runValidators: true}, function(err){
        if(err){
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully updated"});
        }
    })
})

//Delete the product by ID
app.delete('/api/edit/:id', function(req, res){
    Product.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("Error when deleting from mongo" + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully deleted"});
        }
    })
})

//Route all other routes to home
app.all('*', (req, res, next) => {
    res.sendFile(path.resolve( __dirname + '/mainApp/dist/index.html'));
}) 

//Listen to server
app.listen(4300, function(){
    console.log("Listening to 4300")
})