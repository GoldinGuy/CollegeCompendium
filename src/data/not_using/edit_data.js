var fs = require("fs");
var json = fs.readFileSync("./new_data.json", "utf8");

var final_data = [];

// var class_data = {
// 	valid: [],
// 	invalid: [],
// };

for (let course of JSON.parse(json)) {
	final_data.push({
		id: course.id,
		title: course.title,
		source: course.source,
		year: course.year,
		url: course.url,
		desc: course.desc,
		tags: [course.tags__003],
		contains: {
			videos: course.tags_004 === "videos",
			written: course.tags_005 === "written",
			assignments: course.tags_006 === "assignments",
		},
	});
}


fs.writeFileSync(
	"final_data.json",
	JSON.stringify(final_data, null, 4),
	function (err, file) {
		if (err) throw err;
		console.log("Saved!");
	}
);

// for (let course of JSON.parse(json)) {
// 	if (course.source.toLowerCase() !== "stanford") {
// 		class_data["valid"].push(course);
// 		non_stanford_data.push(course);
// 	} else {
// 		class_data["invalid"].push(course);
// 	}
// }



// fs.writeFileSync(
// 	"valid_class_data.json",
// 	JSON.stringify(class_data, null, 4),
// 	function (err, file) {
// 		if (err) throw err;
// 		console.log("Saved!");
// 	}
// );
