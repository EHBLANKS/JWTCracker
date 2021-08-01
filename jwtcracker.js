// import packages
var jwt = require("jsonwebtoken");
var fs  = require("fs");

// add JWT(json web token)
token = "";

// Replace your dictionary path.
dictionary = fs.readFileSync("~/Wordlist_path_here", {encoding:"utf8",flag:"r"});


length = dictionary.length

console.log(length)

dictionary_word = dictionary.split(/\r?\n/);

dictionary_word.forEach((line)=>{
	try{
		console.log(jwt.verify(token,line));
		console.log(line);
	}catch(e){
		
	}
})

console.log("Finished List");
