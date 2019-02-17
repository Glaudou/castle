var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('listeDesHotels.csv');


request('https://www.relaischateaux.com/fr/site-map/etablissements?fbclid=IwAR0XprqjVWWz5uwA2LS5h2wgAvd5UeI0w3J09Qn4H--DWu8mkku6gUU8fCY', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
	var data = {};
	data.table = [];
	var balise='none';
	// On cherche la balise France
    $('div > h3').each(function(i, element){
		if ($(this).text() == 'France') {
			balise = $(this).parent();
		}
    });
	balise.children('.listDiamond').children().each(function(i, element) {
		// On cherche à récupérer les noms des hotels de la balise France
		// On parcours chaque "li" car on ne veut obtenir que le premier enfant de cette balise
		
		var nom =  $(element)
		.children()
		.eq(0)
		.text()
		.trim(); 
		// eq(0) permet de ne prendre en compte que le premier element, ici, le premier enfant.
		
		// On cherche à récupérer les URL des hotels de la balise France
		var url = $(element)
		.children()
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
      
	// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
	//console.log(nom, url);
    });
	fs.writeFile("ListeDesHotels.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json completed');
	});
	
    console.log('Scraping Done');
  }
})