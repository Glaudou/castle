var monJson1 = require('./ListeDesHotels.json');
var monJson2 = require('./ListeDesRestaurantsMichelin.json');
var fs = require('fs');

var finalData = {};
finalData.table = [];

var index2 = 0;
var indexMichelin = 0;

for (var i = 0; i < monJson1.table.length; i++){
	//console.log(i);
	while (indexMichelin < monJson2.table.length || monJson2.table[indexMichelin].nom !=  monJson1.table[i].nom) {
		indexMichelin++;
		console.log(indexMichelin);
	}
	if (monJson1.table[i].nom == monJson2.table[indexMichelin].nom){
		index2++;
		finalData.table.push(monJson1.table[i]);
		fs.writeFile("ListeDesHotelsRestaurants.json", JSON.stringify(finalData, null, 4), function(err) {
		if (err) throw err;
		console.log(index2);
		});
	}
}