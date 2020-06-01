var database, firebase, playerCount = 0;
//the whole of the drawing
var drawing = [],
//the current line in making
currentPath = [],
otherColour,otherbg,
tester;
var clearButton, slider1,bgb,clb;
var slider2, slider3,
player, form,
allPlayers, col, va, thi;
function setup() {

  database = firebase.database();

  canvas = createCanvas(500,500);
  //canvas.mousePressed(startPath);
  canvas.parent("ccd");

  slider1 = createSlider(0,360,180,40);
  slider1.position(350,530);
  
  slider2 = createSlider(0,360,180,40);
  slider2.position(100,530);

  slider3 = createSlider(1,10,4,1);
  slider3.position(100,600);

  clearButton = select("#clearButton");

  bgb = createButton("COLOUR SAME AS OTHER'S");
  bgb.position(350,600);

  clb = createButton("BACKGROUND SAME AS OTHER'S");
  clb.position(350,650);

  player = new Player();
  form = new Form();
  //createSprite(400, 200, 50, 50);
}

function draw() {

  player.getCount();
  player.updateCount(playerCount);
  player.update();

  form.display();

  if(playerCount === 2){

    thi = slider3.value();
    va = slider1.value();
    col = slider2.value();

    //solved the problem, now each new Path has its own value of stroke and thickness
    currentPath[0] = col;
    currentPath[1] = thi;

    if(player.index === 1){
      tester = 2;
    } else if(player.index === 2){
      tester = 1;
    }
  
    frameRate(60);

    
    background(rgb(va,180,180));
    player.background = va;
 
    if(mouseIsPressed){
      var point = {
        x : mouseX,
        y : mouseY
      } 
      currentPath.push(point);
      drawing.push(currentPath);
    }

    player.stroke = thi;
    player.colour = col;

    noFill();

    for(var j = 0; j < drawing.length; j++){
      var path = drawing[j];
      beginShape();

      for(var i = 2;  i < path.length; i++){
        stroke(rgb(path[0],path[0],180));
        strokeWeight(path[1]);
        vertex(path[i].x, path[i].y);
      }
      endShape();

    }

    clearButton.mousePressed(()=>{
      drawing = [];
    })

    clb.mousePressed(()=>{
      var ColourRef =  database.ref("USER" + tester +  "/" + "COLOUR");
      ColourRef.on("value",(data) => {
      otherColour = data/val();
    });

    stroke(rgb(180,otherColour,otherColour));
  })

    bgb.mousePressed(()=>{
      var BGRef = database.ref("USER" + tester + "/" + "COLOUR");
      BGRef.on("value",(data)=>{
      otherbg = data.val();
    })
  })

  var p = createElement("h2");
  p.html("background");
  p.position(350,535);

  var q = createElement("h2");
  q.html("colour");
  q.position(125,535);

  var r = createElement("h2");
  r.html("thickness");
  r.position(125,605);

  }
}
function mouseReleased(){
  currentPath = [];
}