var form ;
var database;
var ref;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(1200,800);
  ref = database.ref('Details');
  form = new Form();  
  form.display();
  textSize(80);
  text("Thanks for attemting my quiz",400,720);

}
function draw(){
  background("blue");

}
