const userName = "K DOGG";
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
		"header": "Main",
		"links": [
			{
				"name": "Gmail",
				"url": "https://mail.google.com/mail/u/0/#inbox",
				"color": "E52D27",
				"shortKey": "y" // manually bound keys
			},
			{
				"name": "Outlook",
				"url": "https://outlook.live.com/mail/0/inbox",
				"color": "E52D27",
				"shortKey": "r"
			},
			{
				"name": "TempMail",
				"url": "https://temp-mail.org/en/",
				"color": "E52D27",
				"shortKey": "t" // bindings are case sensitive (Shift + t)
			},
			{
				"name": "LinkedIn",
				"url": "https://www.linkedin.com/uas/login?session_redirect=%2Ffeed&fromSignIn=true&trk=cold_join_sign_in",
				"color": "E52D27",
				"shortKey": "T" // 
			},
			{
				"name": "Reddit",
				"url": "https://www.reddit.com/",
				"color": "E52D27",
				"shortKey": "" // empty shortKey values are not auto bound
			}
		]
	},
	{
		"header": "Resources",
		"links": [
			{
				"name": "GitLab",
				"url": "https://gitLab.com",
				"color": "166FE9",
				"shortKey": "l"
			},
			{
				"name": "Github",
				"url": "https://github.com/",
				"color": "166FE9",
				"shortKey": "h"
			},
			{
				"name": "Bitbucket",
				"url": "https://bitbucket.org/",
				"color": "166FE9",
				"shortKey": ""
			},
			{
				"name": "DevDocs",
				"url": "https://devdocs.io",
				"color": "166FE9",
				"shortKey": ""
			},
			{
				"name": "MDN",
				"url": "https://developer.mozilla.org/en-US/docs/Web",
				"color": "166FE9",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Media",
		"links": [
			{
				"name": "Youtube",
				"url": "https://www.youtube.com/feed/subscriptions",
				"color": "17CCA4",
				"shortKey": "["
			},
			{
				"name": "Spotify",
				"url": "https://open.spotify.com/",
				"color": "17CCA4",
				"shortKey": "]"
			},
			{
				"name": "Netflix",
				"url": "https://mail.tutanota.com/mail/",
				"color": "17CCA4",
				"shortKey": "\\"
			},
			{
				"name": "Prime",
				"url": "https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011",
				"color": "17CCA4",
				"shortKey": ""
			},
			{
				"name": "Place holder",
				"url": "https://temp-mail.org/en/",
				"color": "17CCA4",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Devices & VMs",
		"links": [
			{
				"name": "Primo",
				"url": "https://192.168.1.6/ui/#/login",
				"color": "CCA417",
				"shortKey": "["
			},
			{
				"name": "UNO",
				"url": "https://192.168.1.7/ui/#/login",
				"color": "CCA417",
				"shortKey": "]"
			},
			{
				"name": "DUO",
				"url": "https://192.168.1.8/ui/#/login",
				"color": "CCA417",
				"shortKey": "\\"
			},
			{
				"name": "Place holder",
				"url": "https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011",
				"color": "CCA417",
				"shortKey": ""
			},
			{
				"name": "Place holder",
				"url": "https://temp-mail.org/en/",
				"color": "CCA417",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Network",
		"links": [
			{
				"name": "Alpha - NAS",
				"url": "http://192.168.1.2:8080/cgi-bin/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Unifi Controller",
				"url": "https://192.168.1.3:8443/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Pi-Hole DNS",
				"url": "http://192.168.1.3:33331/admin/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Nextcloud",
				"url": "http://192.168.1.5/",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "Beta - Backup NAS",
				"url": "http://192.168.1.18:8080/cgi-bin/",
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