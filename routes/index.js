var express = require('express');
var router = express.Router();

//require controllers:
const hotelController=require('../controllers/hotelController')

/* GET home page. */
router.get('/', hotelController.homePage);//require controllers before use this controller


router.get('/all', hotelController.listAllHotels);//req: an object contain all information about http request; res: response from the server

//Admin Routes:
router.get('/admin', hotelController.adminPage);
router.get('/admin/add', hotelController.createHotelGet); //this is a get request
router.post('/admin/add', hotelController.createHotelPost);
// router.get('/all/*', function(req, res){ //req: an object contain all information about http request; res: response from the server
//   const name = req.params.name;
//   res.render('all_hotels', {title: 'All Hotels', name});
// });
module.exports = router;
