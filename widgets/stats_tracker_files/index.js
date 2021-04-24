const websocket_endpoint = "ws://localhost:19906";

var areaname = document.getElementById("areaname");
var currenthp = document.getElementById("currenthp");
var damage = document.getElementById("damage");
var areaitems = document.getElementById("areaitems");
var areascreens = document.getElementById("areascreens");
var totalitems = document.getElementById("totalitems");
var totalscreens = document.getElementById("totalscreens");
var deathcount = document.getElementById("deathcount");
var bubblecount = document.getElementById("bubblecount");
var brickcount = document.getElementById("brickcount");

window.onload = function () 
{
	const socket = new WebSocket(websocket_endpoint);
	socket.onmessage = event => appendData(JSON.parse(event.data));
};

function appendData(data) 
{
	ClearAll();

	console.log(data);
	areaname.innerHTML = `Area Name: ${data.AreaName}`;
	currenthp.innerHTML = `HP: ${data.CurrentHP}/${data.MaxHP}`;
	damage.innerHTML = `Coat Damage Reduced: ${Math.floor(data.DamageReduction)}%`
	areaitems.innerHTML = `Area Items: ${data.AreaItemPercent}%`;
	areascreens.innerHTML = `Area Map: ${data.AreaMapPercent}%`;
	totalitems.innerHTML = `Total Items: ${data.TotalItemPercent}%`;
	totalscreens.innerHTML = `Total Map: ${data.TotalMapPercent}%`;
	deathcount.innerHTML = `Deaths: ${data.DeathCount}`;
	bubblecount.innerHTML = `Bubbles Popped: ${data.BubbleCount}`;
	brickcount.innerHTML = `Bricks Broken: ${data.BricksCount}`;
}

function ClearAll() {
	areaname.innerHTML = ``;
	currenthp.innerHTML = ``;
	damage.innerHTML = ``;
	areaitems.innerHTML = ``;
	areascreens.innerHTML = ``;
	totalitems.innerHTML = ``;
	totalscreens.innerHTML = ``;
	deathcount.innerHTML = ``;
	bubblecount.innerHTML = ``;
	brickcount.innerHTML = ``;
}