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
		"status": "WIP",
		"title": "Studbud",
		"dir": "studbud",
		"tags": [
			"Uni,",
			"Webdev,",
			"UI/UX"
		],
		"cardTags": {
			"recent": "WIP",
			"links": "1 link"
		},
		"date": "2021",
		"thumb": "/src/assets/projects/studbud/thumb.jpg",
		"desc": "Browser-based Kanban study tracker with integrated Pomodoro timer.",
			"descFull": "Browser-based Kanban study tracker with integrated Pomodoro timer.",
			"descFull2": "Individual project.",
		"links": {
			"report1": {
				"type": "doc",
				"link": "https://github.com/bcjwalker/studbud/blob/main/README.md",
				"label": "Read case study",
			},
		},
		// Lead card info
		"collabs": "none",
		"roles": [
			"UI/UX design",
			"Front-end webdev",
		],
		"software": [
			"Visual Studio",
			"Node.js",
		],
		"timeline": [
			"~2", 
			"months"
		],
	},
	// 1: Convey
	{
		// Metadata
		"id": 1,
		"status": "WIP",
		"title": "Convey",
		"dir": "convey",
		"tags": [
			"Uni,",
			"UI/UX"
		],
		"cardTags": {
			"recent": "WIP",
			"links": "2 links"
		},
		"date": "2022",
		"thumb": "/src/assets/projects/convey/thumb.jpg",
		"desc": "An exploratory app service redesigning Sydney's bus system.",
			"descFull": "An exploratory app service redesigning Sydney's bus system.",
			"descFull2": "Lorem ipsum",
		"links": {
			"interface": {
				"type": "prmry",
				"link": "https://www.figma.com/proto/9o2cF5XNZLFdITPCHwKgh1/Convey-app--final-?page-id=28%3A2&node-id=95-6199&p=f&viewport=-479%2C395%2C0.17&t=IimAc7MvslukC9mc-1&scaling=contain&content-scaling=fixed&starting-point-node-id=95%3A6224&show-proto-sidebar=1",
				"label": "View interface",
			},
			"report1": {
				"type": "doc",
				"link": "/src/assets/projects/convey/DECO2200_A4.pdf",
				"label": "Read case study",
			},
		},
		// Lead card info
		"collabs": {
			"jonathan": {
				"name": "Jonathan Pratama", 
				"thumb": "/src/assets/projects/convey/people/jonathan.jpg", 
				"roles": [ "Front-end webdev", "UX research", "UI design" ],
				"url": "https://www.linkedin.com/in/nicolexylow"
				},
		},
		"roles": [
			"User research",
			"UI/UX design",
			"Report writing",
			"Video production"
		],
		"software": [
			"Figma",
			"Adobe Xd",
			"Material 3"
		],
		"timeline": [
			"~3", 
			"months"
		],

		// Open project content
	},
	// 2: Biodiversity article
	{
		// Metadata
		"id": 2,
		"status": "WIP",
		"title": "Biodiversity in the Human Era",
		"dir": "biodiversity",
		"tags": [
			"Uni,",
			"Webdev,",
			"UI/UX,",
			"Datavis"
		],
		"cardTags": {
			"recent": "WIP",
			"links": "2 links"
		},
		"date": "2023",
		"thumb": "/src/assets/projects/biodiversity/thumb.jpg",
		"desc": "An activist website detailing the Anthropocene, focusing on data presentation.",
			"descFull": "An activist website detailing the Anthropocene, focusing on data presentation.",
			"descFull2": "Individual project.",
		"links": {
			"interface": {
				"type": "prmry",
				"link": "https://bcjwalker.github.io/deco3100-website/",
				"label": "View interface",
			},
			"report1": {
				"type": "doc",
				"link": "/src/assets/projects/biodiversity/DECO3100_A2_doc.pdf",
				"label": "Read case study",
			},
		},
		// Lead card info
		"collabs": "none",
		"roles": [
			"Data visualisation",
			"UI/UX design",
			"Front end webdev",
		],
		"software": [
			"Visual Studio",
			"Node.js",
			"Plotly.js"
		],
		"timeline": [
			"~3", 
			"months"
		],
	},
	// 3: Sunstop
	{
		// Metadata
		"id": 3,
		"title": "Sunstop",
		"dir": "sunstop",
		"tags": [
			"Uni,",
			"Webdev,",
			"UI/UX"
		],
		"cardTags": {
			"recent": "New",
			"links": "3 links"
		},
		"date": "2024",
		"thumb": "/src/assets/projects/sunstop/thumb.jpg",
		"desc": "A holistic solution to promote sun safety in young Australian men through interactive sunscreen kiosks — promoting sunscreen as a habit through ubiquity, convenience and rewards.",
			"descFull": "A holistic solution to promote sun safety in young Australian men through interactive sunscreen kiosks — promoting sunscreen as a habit through ubiquity, convenience and rewards.",
			"descFull2": "My personal touch was in pushing for increased visual expression in the use of colour, form and motion in the interface.",
		"links": {
			"interface": {
				"type": "prmry",
				"link": "https://nicolexylow.github.io/sunstop/",
				"label": "View interface",
			},
			"report1": {
				"type": "doc",
				"link": "/src/assets/projects/sunstop/DECO4200_A4_report.pdf",
				"label": "Read case study",
			},
			"report2": {
				"type": "doc",
				"link": "/src/assets/projects/sunstop/DECO4200_A1_report.pdf",
				"label": "Read initial report",
			},
		},
		// Lead card info
		"collabs": {
			"nicole": {
				"name": "Nicole Low", 
				"thumb": "/src/assets/projects/sunstop/people/nicole.jpg", 
				"roles": [ "Front-end webdev", "UX research", "UI design" ],
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
	}
	
]

export const projectData = projectDataRaw.reverse()