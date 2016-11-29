var words = module.exports = function(word) {
	var outputObject = {}; // create an object

	 word= word.split(' ');
	 word = word.replace(/[\n\t+]/g, ' '); // replaces a new line and tabs with a space
	 word = word.toLowerCase(); 
	 word = word.trim(); // trims all whitespace before and after string
	 word = word.replace(/  +/g, ' '); 

	var test = word.slice(0); // creates a copy of the string array (split could also be done here)

	for (var i = 0; i < word.length; i++){
		var counter = 0;
		for (var c = 0; c < test.length; c++){
			if (word[i] == test[c]){
				counter++;
				delete test[c];
			}
		}
		if (counter > 0 ){
			outputObject[ [word[i]] ] = counter;
		}
	}

	return outputObject;
}