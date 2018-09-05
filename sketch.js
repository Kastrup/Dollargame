
class person{
 constructor(x, y, value, edge)
  this.x = x;
  this.y = y;
  this.value = value;
  this.edge = edges;

clicked() {
 for (i=0; i<this.edge.length; i++){
   persons[this.edge[i]].value++;
 }
  this.value = this.value - this.edge.length;
  
}
}

let xes = [50, 100, 150];
let yes = [50, 100, 150];
let values = [2, 4, -3];
let edges = [[1],[0, 2], [1]];
let persons = [];

function setup() {
  createCanvas(400, 400);
  for (i=0; i<xes.length; i++){
    persons.push(new person(xes[i], yes[i], values[i], edges[i]);
  }
}

function draw() {
  for (i=0; i<xes.length; i++){
    ellipse(xes[i], yes[i], 30);
    text(persons[i].value, xes[i], yes[i]);
}
