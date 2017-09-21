



var express = require('express');
var path = require('path');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var ejs = require('ejs');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var expressJwt = require('express-jwt');
var secret = "6z7mfMW1GwKzG2sgsG9icqN1bfcJTooGwIOySP22";
var warehouse_route = require('./route/warehouse.route');
var user_route = require('./route/user.route');
var cate_product_route = require('./route/categories-product-route');
var cate_expense_route = require('./route/categories-expense-route');
var expense_route = require('./route/expense.route');
var people_waiter_route = require('./route/people-waiter-route');
var people_customer_route = require('./route/people-customers-route');
var people_suppliers_route = require('./route/people-suppliers-route');
var store_route = require('./route/store.route');
var product_route = require('./route/product-route');
var setting_route = require('./route/setting-route');
var sales_route = require('./route/sales.route');
var store_zone_route = require('./route/store-zone.route');
var store_time_route = require('./route/store-table.route');
var collection_Store_route  =  require('./route/collection_Store.route');
var POS_route=  require('./route/Pos.route');
var Item_route = require('./route/item.route');
var path = require('path');
var jwt = require('jsonwebtoken');
var port = process.env.PORT || '8000';
var app = express();
const http = require('http');
var location1 =   require('./src')

 var db = "mongodb://POS:12345@ds127443.mlab.com:27443/pos";
// var db = "mongodb://localhost/POS";
mongoose.connect(db, function(err, response) {
    if (err) {
        console.log('failed to connected to' + db);
    } else {
        console.log('connect to' + db);
    }
});

var storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb) {
        cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))


    }
})

var upload = multer({ storage: storage });

app.post('/uploadFile/', upload.single('file'), function(req, res) {
    console.log('Uploade Successful ', res.json);
    var myFile = req.file;
    //var newName = myFile.filename;
    console.log('myfile of response',myFile);
    res.send(myFile);
});
//adding middleware - core
app.use(cors());
// para CORN
app.use(function (req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', false);
        next();
    });

//static files
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname , 'dist'));
  });

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


// route set
app.use('/api', warehouse_route);
app.use('/api', user_route);
app.use('/api', cate_product_route);
app.use('/api', cate_expense_route);
app.use('/api', expense_route);
app.use('/api', people_waiter_route);
app.use('/api', people_customer_route);
app.use('/api', people_suppliers_route);
app.use('/api', store_route);
app.use('/api', product_route);
app.use('/api', setting_route);
app.use('/api',sales_route);
app.use('/api',store_zone_route);
app.use('/api',store_time_route);
app.use('/api',collection_Store_route);
app.use('/api',POS_route);
app.use('/api',Item_route);
app.listen(port, function() {
    console.log("Server started on 8000 server");
});
