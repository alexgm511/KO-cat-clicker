var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('images/red.jpg');
	this.imgAttribution = ko.observable('http://www.alexgmendoza.com');
	this.nicknames = ko.observableArray(["Gray", "Dusk", "Gray", "Red", "Misty", "Blondie"]);
	
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
	this.currentCat = ko.observable(new Cat());
	
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		//this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());
