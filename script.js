document.write("Hello, world!");

function sayHello(){
	var respsonse=prompt("What is your name?");
	alert("Hello "+respsonse+" , 该睡觉啦，晚安");
}

function add(a,b){
	return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){ 
 var x = document.getElementById("demo"); 
 x.style.fontSize = "25px"; 
 x.style.color = "red"; 
}

var veggies=["tomoto","spinach","broccoli"];
var students={
	students_id:1155121527,
	students_name:"Shirley",
	students_age:26,
	students_major:"New Media"
};
var servant=["诸葛孔明","Merlin","Scáthach-Skaði","玉藻前","Altria[caster]"];
servant[0]="司马懿";
servant.push("Nero[Bride]");
servant.pop();
servant.push("诸葛孔明");
console.log(servant);

var movie={
	title:"Captain Marvel",
	time:"2pm"
};
alert(movie.title);
movie.status="unavailable";
console.log(movie);

var movieDetails=[
	{title:"Avengers",
	time:"12pm",
	seat:100,
	status:"available"},
    {title:"Captain Marvel",
	time:"2pm",
	seat:0,
	status:"unavailable"},
    {title:"Black Panther",
	time:"4pm",
	seat:10,
	status:"available"},
	{title:"Spiderman",
	time:"6pm",
	seat:0,
	status:"available"}
];

/*var fruits=[];
for (i=0;i<9;i++){
	fruits[i]=prompt("Enter fruit:");
}
alert("fruit contains: "+ fruits);*/

for (var movie of movieDetails){
	if(movie.seat===0){
		console.log("Sorry, the movie "+movie.title+" is sold out.")
	}
	else{
		console.log("The movie "+movie.title+" play at:"+movie.time+" Have "+movie.seat+" seats")
	}
};