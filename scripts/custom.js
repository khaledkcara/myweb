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
				"color": "166FE9",
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
				"name": "Plex",
				"url": "http://192.168.1.2:32400/web/index.html",
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
				"name": "Youtube Music",
				"url": "https://music.youtube.com/",
				"color": "17CCA4",
				"shortKey": ""
			},
			{
				"name": "Nextcloud",
				"url": "http://192.168.1.5:33332/index.php/apps/files/?dir=/&fileid=6",
				"color": "17CCA4",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Servers",
		"links": [
			{
				"name": "Alpha",
				"url": "http://192.168.1.2:8080/cgi-bin/",
				"color": "CCA417",
				"shortKey": "]"
			},
			{
				"name": "Omega",
				"url": "http://192.168.1.3:8080/cgi-bin/",
				"color": "CCA417",
				"shortKey": "\\"
			},
			{
				"name": "Delta-ESXI",
				"url": "https://192.168.1.16/ui/#/login",
				"color": "CCA417",
				"shortKey": ""
			},
			{
				"name": "Zeta-ESXI",
				"url": "https://192.168.1.17/ui/#/login",
				"color": "CCA417",
				"shortKey": ""
			},
			{
				"name": "Alpha-VM",
				"url": "http://192.168.1.2:8088/",
				"color": "CCA417",
				"shortKey": "["
			}
		]
	},
	{
		"header": "Application",
		"links": [
			{
				"name": "Unifi Controller",
				"url": "https://192.168.1.5:8443/",
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
				"name": "Guacamole",
				"url": "http://192.168.1.5:33333/guacamole",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Qbittorrent",
				"url": "http://192.168.1.6:33334/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Webmin",
				"url": "http://192.168.1.5:10000",
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
