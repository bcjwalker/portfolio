/*
#######################
## Projects database ##
#######################
*/
export const projectDataRaw =
[
	//////////////////
	// BIG PROJECTS //
	//////////////////
	// 0: Studbud
	{
		// Metadata
		"id": 0,
		"title": "Studbud",
		"dir": "studbud",
		"tags": [
			"Desktop",
			"Educational"
		],
		"date": "2021",
		"thumb": "/src/assets/projects/studbud/thumb.jpg",
		"desc": "A browser-based Kanban study tracker with integrated Pomodoro timer."
	},
	// 1: Convey
	{
		// Metadata
		"id": 1,
		"title": "Convey",
		"dir": "convey",
		"tags": [
			"Mobile",
			"Transport"
		],
		"date": "2022",
		"thumb": "/src/assets/projects/convey/thumb.jpg",
		"desc": "text here",

		// Open project content
		"carousel-1": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		},
		"carousel-2": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		}
	},
	// 2: Biodiversity article
	{
		// Metadata
		"id": 2,
		"title": "Biodiversity in the Human Era",
		"dir": "biodiversity",
		"tags": [
			"Desktop",
			"Datavis"
		],
		"date": "2023",
		"thumb": "/src/assets/projects/biodiversity/thumb.jpg",
		"desc": "text here",

		// Open project content
		"carousel-1": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		},
		"carousel-2": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		}
	},
	// 3: Sunstop
	{
		// Metadata
		"id": 3,
		"title": "Sunstop",
		"dir": "sunstop",
		"tags": [
			"Desktop",
			"Datavis"
		],
		"date": "2024",
		"thumb": "/src/assets/projects/sunstop/thumb.jpg",
		"desc": "text here",
		// Lead card info
		"collabs": {
			"nicole": {
				"name": "Nicole Low", 
				"thumb": "/src/assets/projects/sunstop/people/nicole.jpg", 
				"roles": [ "Front-end development", "UX research", "UI design" ],
				"url": "https://www.linkedin.com/in/nicolexylow"
				},
			"ashley": {
				"name": "Ashley Xu", 
				"thumb": "/src/assets/projects/sunstop/people/ashley.jpg", 
				"roles": [ "UX research", "UI design" ],
				"url": "https://www.linkedin.com/in/ashleyfxu"
				},
			"chloe": {
				"name": "Chloe Gassoub", 
				"thumb": "/src/assets/projects/sunstop/people/chloe.jpg", 
				"roles": [ "UX research", "UI design", "Graphic design" ],
				"url": "https://www.linkedin.com/in/chloe-gassoub-b90695216"
				},
		},
		"roles": [
			"User research",
			"UI/UX design",
			"Full stack webdev",
			"Report writing"
		],
		"software": [
			"Figma",
			"Visual Studio",
			"React.js",
			"Node.js",
		],
		"timeline": [
			"~3", 
			"months"
		],

		// Open project content
		"carousel-1": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		},
		"carousel-2": {
			"slides": [
				"url", 
				"url"],
			"descs": [
				"desc",
				"desc"
			]
		}
	}
	
]

export const projectData = projectDataRaw.reverse()