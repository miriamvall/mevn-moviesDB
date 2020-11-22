const express = require('express');
const movieRoute = express.Router();

let Movie = require('../models/movie');

movieRoute.route('/').get((req,res) => {
	Movie.find((err,data) => {
		if(err) {
			return next(err)
		} else {
			res.json(data)
		}
	});
});

movieRoute.route('/createMovie').post((req,res,next) => {
	Movie.create(req.body, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.json(data);
		}
	});
});

movieRoute.route('/edit/:id').get((req,res) => {
	Movie.findById(req.params.id, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.json(data);
		}
	});
});

movieRoute.route('/update/:id').post((req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log('Movie successfully updated!');
    }
  });
});

movieRoute.route('/delete/:id').delete((req,res,next) => {
	Movie.findByIdAndRemove(req.params.id, (err,data) => {
		if(err) {
			return next(err);
		} else {
			res.status(200).json({
				msg: data
			});
		}
	});
});

module.exports = movieRoute;