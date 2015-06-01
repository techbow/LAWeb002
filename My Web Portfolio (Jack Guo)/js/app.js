(function(){
 
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.product = item; 
	});
	
	var item = 
	[
	{
		name: 'TI-84 Plus Calculator (Good Condition)',
		price: 50.00,
		description: 'Only used once for my Calculus I',
		canPurchase: true,
		images:[{full: 'http://upload.wikimedia.org/wikipedia/commons/8/89/TI-84_Plus.jpeg',
				thumb: 'http://upload.wikimedia.org/wikipedia/commons/8/89/TI-84_Plus.jpeg'
				},
				] 
	},
	{
		name: 'Power & Demoracy 4th Ed (Good Condition)',
		price: 20.00,
		description: 'Used Book',
		canPurchase: true,
		images:[{full: 'http://ecx.images-amazon.com/images/I/51oav-muWcL._SY344_BO1,204,203,200_.jpg',
				thumb: 'http://ecx.images-amazon.com/images/I/51oav-muWcL._SY344_BO1,204,203,200_.jpg'
				},
				] 
	},
	
	];
})();
