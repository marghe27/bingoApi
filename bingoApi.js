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
