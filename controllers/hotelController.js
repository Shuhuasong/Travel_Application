const Hotel = require('../models/hotel');

exports.homePage = (req, res)  => {
    res.render('index', { title: 'Let travel' });
} //exports: allow the code to be availiable in our part of application

exports.listAllHotels = (req, res) => {
  res.render('all_hotels', {title: 'All Hotels'});
}

exports.adminPage = (req, res) => {
  res.render('admin', {title: 'Admin'});
}

exports.createHotelGet = (req, res) => {
  res.render('add_hotel', {title: 'Add new hotel'})
}

exports.createHotelPost = async (req, res, next) => {
  try{
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.redirect('/all/${hotel_id}');
  } catch(error) {
    next(error)
  }
}
