// var loc = '35.731252, 139.730291' // Tokyo expressed as lat,lng tuple
var daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM('test.html').window.document;


function currentlocaltime(divid, loc){
var container = document.getElementById(divid)
var targetDate = new Date() // Current date/time of user computer
var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60 // Current UTC date/time expressed as seconds since midnight, January 1, 1970 UTC
var apikey = 'AIzaSyCKY4eMGjS0o3gfhDlhv7qd6PIGaEg4Dwc'
var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apikey
//  var XMLHttpRequest = require('xhr2');
 
 import XMLHttpRequest from 'xhr2';

 
var xhr = new XMLHttpRequest() // create new XMLHttpRequest2 object
xhr.open('GET', apicall) // open GET request
xhr.onload = function(){
    if (xhr.status === 200){ // if Ajax request successful
        var output = JSON.parse(xhr.responseText) // convert returned JSON string to JSON object
        console.log(output.status) // log API return status for debugging purposes
        if (output.status == 'OK'){ // if API reports everything was returned successfully
            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000 // get DST and time zone offsets in milliseconds
            var localdate = new Date(timestamp * 1000 + offsets) // Date object containing current time of Tokyo (timestamp + dstOffset + rawOffset)
            console.log(localdate.toLocaleString()) // Display current Tokyo date and time
        }
    }
    else{
        alert('Request failed.  Returned status of ' + xhr.status)
    }
}
xhr.send() 
}
 
document.getElementById('tokyotime').innerHTML = currentlocaltime('tokyotime', '35.731252, 139.730291');

currentlocaltime('latime', '34.052046, -118.259335')
currentlocaltime('torontotime', '43.656090, -79.387679')
currentlocaltime('paristime', '48.856805, 2.348242')

// New York 
// Tokyo 
// San Francisco
// Paris
// Bangkok
// Dubai
// Hong Kong
// London