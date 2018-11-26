var exp = require('express');
var bingo = require('bingo-extract');
var bodyparser = require('body-parser');

var app = exp();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));



function numExtract(){
	'use strict';
	
	return bingo.getBag();
}
console.log('prova funzione estract', numExtract());
// 

app.get('/numbers', function (req, res) {
	'use strict';
	console.log(req.query, "Questa è req.query");
	res.json();
	console.log(res.json(), "Questa è res.json");
});
// 
//app.get('/numbers:id', function(req, res){
//	   'use strict';
//      
//       
//       });
//
//// 
//app.get('/numbers', function(req, res){
//	   'use strict';
//       
//       
//       });
//
//// 
//app.get('/numbers', function(req, res){
//	   'use strict';


// });



app.listen(3002);
