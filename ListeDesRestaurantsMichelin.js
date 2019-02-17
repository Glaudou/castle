var request = require('request');
var cheerio = require('cheerio');
const fs = require('fs');
//const writeStream = fs.createWriteStream('listeDesRestaurantsMichelin.csv');

var data = {};
data.table = [];

request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);

    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 1 completed');
	});
    console.log('Scraping 1 Done');
  }
});

request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-2', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 2 completed');
	});
    console.log('Scraping 2 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-3', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 3 completed');
	});
    console.log('Scraping 3 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-4', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 4 completed');
	});
    console.log('Scraping 4 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-5', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 5 completed');
	});
    console.log('Scraping 5 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-6', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 6 completed');
	});
    console.log('Scraping 6 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-7', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 7 completed');
	});
    console.log('Scraping 7 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-8', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 8 completed');
	});
    console.log('Scraping 8 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-9', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 9 completed');
	});
    console.log('Scraping 9 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-10', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 10 completed');
	});
    console.log('Scraping 10 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-11', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 11 completed');
	});
    console.log('Scraping 11 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-12', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 12 completed');
	});
    console.log('Scraping 12 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-13', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 13 completed');
	});
    console.log('Scraping 13 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-14', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 14 completed');
	});
    console.log('Scraping 14 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-15', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 15 completed');
	});
    console.log('Scraping 15 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-16', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 16 completed');
	});
    console.log('Scraping 16 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-17', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 17 completed');
	});
    console.log('Scraping 17 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-18', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 18 completed');
	});
    console.log('Scraping 18 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-19', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 19 completed');
	});
    console.log('Scraping 19 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-20', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 20 completed');
	});
    console.log('Scraping 20 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-21', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 21 completed');
	});
    console.log('Scraping 21 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-22', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 22 completed');
	});
    console.log('Scraping 22 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-23', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 23 completed');
	});
    console.log('Scraping 23 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-24', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 24 completed');
	});
    console.log('Scraping 24 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-25', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 25 completed');
	});
    console.log('Scraping 25 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-26', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 26 completed');
	});
    console.log('Scraping 26 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-27', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 27 completed');
	});
    console.log('Scraping 27 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-28', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 28 completed');
	});
    console.log('Scraping 28 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-29', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 29 completed');
	});
    console.log('Scraping 29 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-30', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 30 completed');
	});
    console.log('Scraping 30 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-31', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 31 completed');
	});
    console.log('Scraping 31 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-32', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 32 completed');
	});
    console.log('Scraping 32 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-33', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 33 completed');
	});
    console.log('Scraping 33 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-34', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 34 completed');
	});
    console.log('Scraping 34 Done');
  }
});
request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-35', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    
	$('ul.poi-search-result > li').children().children().each(function(i, element) {
		var nom = $(element)
		.children()
		.children()
		.children()
		.eq(2)
		.text()
		.trim();
		
		var url = ("https://restaurant.michelin.fr") + $(element)
		.attr('href');
		
		var metadata = {
        nom: nom,
		url: url
		};
		data.table.push(metadata);
		
		// Write into a CSV
    //writeStream.write(`${nom} ; ${url} \n`);
    });
	fs.writeFile("ListeDesRestaurantsMichelin.json", JSON.stringify(data, null, 4), function(err) {
		if (err) throw err;
		console.log('json 35 completed');
	});
    console.log('Scraping 35 Done');
  }
});