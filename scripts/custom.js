const userName = "Khalid";
const feats = 0;
const themeDir = "styles/themes/";
const themeLight = "gruvbox-light";
const themeDark = "gruvbox-dark";
const linksGroups = [[
	{
		"header": "Bookmarks",
		"links": [
		]
	}
],
[
	{
		"header": "Resources",
		"links": [
			{
				"name": "Github",
				"url": "https://github.com/",
				"color": "166FE9",
				"shortKey": "h"
			},			
			{
				"name": "GitLab",
				"url": "https://gitLab.com",
				"color": "166FE9",
				"shortKey": "l"
			},
			{
				"name": "DevDocs",
				"url": "https://devdocs.io",
				"color": "166FE9",
				"shortKey": ""
			},			
			{
				"name": "TempMail",
				"url": "https://temp-mail.org/en/",
				"color": "E52D27",
				"shortKey": "t" // bindings are case sensitive (Shift + t)
			},
			{
				"name": "Place Holder",
				"url": "Place Holder",
				"color": "166FE9",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Media",
		"links": [
			{
				"name": "Jellyfin",
				"url": "http://192.168.1.5:8096/",
				"color": "17CCA4",
				"shortKey": "["
			},
			{
				"name": "Netflix",
				"url": "https://www.netflix.com/browse",
				"color": "17CCA4",
				"shortKey": "]"
			},
			{
				"name": "Amazon Prime",
				"url": "https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011",
				"color": "17CCA4",
				"shortKey": "\\"
			},
			{
				"name": "Subsonic",
				"url": "http://192.168.1.5:4040/index.view",
				"color": "17CCA4",
				"shortKey": ""
			},
			{
				"name": "Youtube Music",
				"url": "https://music.youtube.com/",
				"color": "17CCA4",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Servers",
		"links": [
			{
				"name": "Unifi Controller",
				"url": "https://192.168.1.5:8443/",
				"color": "CCA417",
				"shortKey": "["
			},
			{
				"name": "Alpha",
				"url": "http://alpha.localdomain/",
				"color": "CCA417",
				"shortKey": "]"
			},
			{
				"name": "Omega",
				"url": "http://omega.localdomain/",
				"color": "CCA417",
				"shortKey": "\\"
			},
			{
				"name": "UNO",
				"url": "https://192.168.1.7/ui/#/login",
				"color": "CCA417",
				"shortKey": ""
			},
			{
				"name": "DUO",
				"url": "https://192.168.1.8/ui/#/login",
				"color": "CCA417",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Application",
		"links": [
			{
				"name": "Guacamole",
				"url": "http://192.168.1.5:33333/guacamole",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Pi-Hole DNS",
				"url": "http://192.168.1.5:33331/admin/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Place Holder",
				"url": "Place Holder",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Place Holder",
				"url": "Place Holder",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Place Holder",
				"url": "Place Holder",
				"color": "5E5D5E",
				"shortKey": ""
			}
			
		]
	}
],
[
	{
		"header": "If you think KNOWLEDGE is expensive try IGNORANCE!",
		"links": [
		]
	},
	
	
]];
const localeStrings = [
	"Good morning", // Greeting strings
	"Good afternoon",
	"Good evening",
	"Good night",
	", ", // Greeting and name separator
	"Google", // Search box placeholder
	"Home", // Page title
];
const autoBindKeys = "1234567890qwertyuiop[]asdfghjkl;\'zxcvbnm,.QWERTYUIOOPASDFGHJKL:\"ZXCVBNM<>?"; // Specify keys for auto key binding
