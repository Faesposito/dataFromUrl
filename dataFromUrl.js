// Hi Mika this is the script!

//the script will Get the part of the url that is in the path that you search,
//get the word inside that url path and add that part as an parameter to put inside a hubspot form.

let url = window.location.href.replace(/\/$/, ""); // Assign the url to the variable and Remove the last "/" of the Url if this has it.

let pathToSearch = "property/"; // word to search in the url, if this word is in the url the if will be executed
let hubspotPropertyName = "houserequested"; // name of the property in hubspot, this will be needed to inject the data in the form field.

if (url.indexOf(pathToSearch) > -1 && url.indexOf(hubspotPropertyName) == -1) {
	// if path is inside property enter to if
	let dataRequested = url.substr(url.lastIndexOf("/") + 1); // extract the data of the Url

	let urlWhitParam = new URL(`?${hubspotPropertyName}=${dataRequested}`, window.location.href); // add the House name as a paramater to the url and inject it in the property HouseRequested

	window.location.href = urlWhitParam; // reload the Page whit the new Url whit the paramater added
}

//**************************************************************************************************************************************************/
//********************************************       PART TO ADD TO THE PAGE        ****************************************************************/
//**************************************************************************************************************************************************/

<>
	{/*************** this is the Minify Version that need to be placed in the header section, so it will run in all the pages. *******************/}

	<script>
		let w=window.location.href.replace(/\/$/,"");let e="property/";let l="houserequested";if(w.indexOf(e)>-1&&w.indexOf(l)==-1)
		{let e=w.substr(w.lastIndexOf("/")+1);let t=new URL(`?${l}=${e}`,window.location.href);window.location.href=t}
	</script>

	{/*************** This is the Hubspot form code to incrust inside the Div that contain the old form. it should adapt to the size. ***************/}

	<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js?pre=1"></script>
	<script>hbspt.forms.create({region: "na1", portalId: "21915863", formId: "f8dbe190-7e57-4c22-aa6e-b1ee53674ac5" });</script>

	{/************************* This is the Contact Us Form. ***************************/}

	<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js?pre=1"></script>
	<script>hbspt.forms.create({region: "na1", portalId: "21915863", formId: "b2a514f0-e95a-4bd6-a571-0c6508c2bdd4" });</script>
</>;
