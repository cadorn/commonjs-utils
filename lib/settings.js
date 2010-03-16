
var localSettings = require("packages").root;
for(var i in localSettings){
	exports[i] = localSettings[i];
}

if(localSettings["implements"] && localSettings["implements"]["settings"]) {
    for(var i in localSettings["implements"]["settings"]){
        exports[i] = localSettings["implements"]["settings"][i];
    }
}
