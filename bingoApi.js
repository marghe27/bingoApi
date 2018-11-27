var exp = require('express');
var bingo = require('bingo-extract');
var bodyparser = require('body-parser');

var app = exp();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));




// API che estrae un numero 

app.get('/extract', function (req, res) {
	'use strict';
	
	res.json(bingo.extract());
	
});
// riavvia una nuova partita
app.get('/reset', function (req, res) {
	'use strict';
	bingo.reset();
	res.json();
});

//// ritorna tutti i numeri estratti / non estratti in base a req.query
app.get('/numbers', function (req, res) {
	'use strict';
	//if (req.query.extracted && req.query.extracted === "false") {
//		return res.json(bingo.getBag());
//	} else {
//		return res.json(bingo.getExtracted());
//	}
	 res.json(bingo.getExtracted());

});
//// verifico se un numero è uscito o meno

app.get('/numbers/:number', function (req, res) {
	'use strict';
	var number = parseInt(req.params.number);

	res.json({
		extracted: bingo.getExtracted().indexOf(number)
	});

});



app.listen(3002);

//module.exports = app;
