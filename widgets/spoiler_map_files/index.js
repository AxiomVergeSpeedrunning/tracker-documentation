const websocket_endpoint = "ws://localhost:19906";
var map = document.getElementById("map");

var area1 = document.getElementById("area1");
var area2 = document.getElementById("area2");
var area3 = document.getElementById("area3");
var area4 = document.getElementById("area4");
var area5 = document.getElementById("area5");
var area6 = document.getElementById("area6");
var area7 = document.getElementById("area7");
var area8 = document.getElementById("area8");
var area9 = document.getElementById("area9");

window.onload = function ()
{
	const socket = new WebSocket(websocket_endpoint);
	socket.onmessage = event => appendData(JSON.parse(event.data));
}

function appendData(data)
{
	console.log(data);
	SetItems(data);
}

function SetItems(data) 
{
	for(let key in data.RandomItems) 
	{
		let value = data.RandomItems[key];
		if (value.includes("Node") || value.includes("Note"))
		{
  			value = value.replace(/[0-9]/g, '');
		}
		document.getElementById(key).innerHTML = `<img src="images/${value}.svg"/>`;
	}
}