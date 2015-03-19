var initialCats = [ 
		{
			clickCount: 0,
			name: "Gray", 
			imgSrc: "images/gray.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["G-strong", "Grayson"]
		},
		{
			clickCount: 0,
			name: "Dusk",
			imgSrc: "images/dusk.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["Dusker", "D-dude", "Dussie"]
		},
		{
			clickCount: 0,
			name: "Red",
			imgSrc: "images/red.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["Reddish", "Redster"]
		},
		{
			clickCount: 0,
			name: "Misty",
			imgSrc: "images/misty.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["Missie", "Mister"]
		},
		{
			clickCount: 0,
			name: "Blondie",
			imgSrc: "images/blondie.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["B-line", "Airhead"]
		},
		{
			clickCount: 0,
			name: "Chocolate",
			imgSrc: "images/chocolate.jpg",
			imgAttribution: "http://www.alexgmendoza.com",
			nicknames: ["C-real", "Chockie"]
		}
];


var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if(clicks < 10) {
			title = 'Kitten';
		} else if (clicks < 20) {
			title = 'Toddler';
		} else if (clicks < 35) {
			title = 'Juvenile';
		} else if (clicks < 50) {
			title = 'Mature';
		} else if (clicks < 100) {
			title = 'Senior';
		}
		return title;
	}, this);
};	
	
var ViewModel = function() {
	var self = this;
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	
	self.changeCat = function(thisCat) {
		//console.log(self.currentCat());
		self.currentCat(thisCat);
	}
	
	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());
