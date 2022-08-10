// Get the part of the url that is the path that you search and add that part as an parameter to put inside a hubspot form.

let url = window.location.href.replace(/\/$/, ""); // Assign the url to the variable and Remove the last "/" of the Url if this has it.

let pathToSearch = "property/"; // word to search in the url, if this word is in the url the if will be executed
let hubspotPropertyName = "houserequested"; // name of the property in hubspot, this will be needed to inject the data in the form field.

if (url.indexOf(pathToSearch) > -1 && url.indexOf(hubspotPropertyName) == -1) {
	// if path is inside property enter to if
	let dataRequested = url.substr(url.lastIndexOf("/") + 1); // extract the data of the Url

	let urlWhitParam = new URL(`?${hubspotPropertyName}=${dataRequested}`, window.location.href); // add the House name as a paramater to the url and inject it in the property HouseRequested

	window.location.href = urlWhitParam; // reload the Page whit the new Url whit the paramater added
}
