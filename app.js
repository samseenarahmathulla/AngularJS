(function() { //wrapping your javascript in a closure is a good habit.
var app = angular.module('store', ['store-directives']); //calls the directives insde product.js

app.controller("StoreController", function() {
	this.products = gems; //product is the property of the controller "StoreController"
});

var gems = [
{
	name: "Ruby",
	description: "Lorem Ipsum Good Lorem Ipsum Good Lorem Ipsum Good ",
	price: 50,
	canPurchase: true,
	soldOut: false,
	images: [{
		full: 'man.png',
		thumb: ''
	},
	{
		full: 'man.png',
		thumb: ''
	}],
	reviews: [
	{
		stars: 5,
		body: "sfsfsdfasfafd",
		author: "samsi"
	},
	{
		stars: 4,
		body: "sdadsadghfjhffg",
		author: "samseena"
	}]
},

{
	name: "Emerald",
	description: "Lorem Ipsum Better",
	price: 200,
	canPurchase: false,
	soldOut: true,
	images: [{
		full: 'man.png',
		thumb: ''
	},
	{
		full: 'man.png',
		thumb: ''
	}],
	reviews: []
},
{
	name: "Saphire",
	description: "Lorem Ipsum Best Lorem Ipsum Best Lorem Ipsum Best Lorem Ipsum Best",
	price: 550,
	canPurchase: true,
	soldOut: false,
	images: [],
	reviews: []
}];
// store-products.json - load gems from json file - this api uses http (webservice) to access it.
 // app.controller('StoreController', [ '$http', function($http) {    
    // var store = this;
    // store.products = []; //{};
    // $http.get('products.json').success(function(data) {
        // store.products = data;
    // });
  // } ] );
  
  // app.controller('StoreController', [ '$http', '$scope', function($http, $scope) {    
    // $scope.products = []; //{};
    // $http.get('products.json').success(function(data) {
        // $scope.products = data;
        // alert($scope.products);
    // });
  // } ] );


app.controller("PanelController", function() {
	this.tabval = 1;
	
	this.selectTab = function(value) {
		this.tabval = value;
	};
	
	this.selected = function(selectedval) {
		return this.tabval === selectedval;
	}
});

app.controller("ReviewController", function() {
	this.review = {};
	
	this.addReview = function(product) {
  		this.review.createdOn = Date.now(); //add a new property createdOn with value date.now
		product.reviews.push(this.review); 
		// this.review = {};
	};
});


//<h3 product-title></h3> is an attribute directive
}) ();
