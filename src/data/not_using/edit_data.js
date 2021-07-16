var fs = require("fs");
var json = fs.readFileSync("./class_data.json", "utf8");

var non_stanford_data = []

var class_data = {
	valid: [],
	invalid: [],
};

for (let course of JSON.parse(json)) {
	if (course.source.toLowerCase() !== 'stanford') {
        class_data["valid"].push(course);
        non_stanford_data.push(course);
	} else {
		class_data["invalid"].push(course);
	}
}

fs.writeFileSync(
	"non_stan.json",
	JSON.stringify(non_stanford_data, null, 4),
	function (err, file) {
		if (err) throw err;
		console.log("Saved!");
	}
);


// fs.writeFileSync(
// 	"valid_class_data.json",
// 	JSON.stringify(class_data, null, 4),
// 	function (err, file) {
// 		if (err) throw err;
// 		console.log("Saved!");
// 	}
// );
