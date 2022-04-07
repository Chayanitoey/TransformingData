// var stats;

// function preload(){
//     stats = loadTable( "data/Overall_loss_in_HDI_due_to_inequality.csv")
// }
let data;

function preload() {
  // preload our data from our .csv file
  data = loadTable('data/Overall_loss_in_HDI_due_to_inequality.csv', 'csv', 'header');
}

function setup() {
  // after we have loaded our data,
  // we can setup the sketch
  createCanvas(400, 600);
  
  // print some of the data details 
  // into the console below
  console.log("number of rows", data.getRowCount());
  console.log("number of columns", data.getColumnCount());
  console.log("labels", data.columns);
  console.log("values for country", data.getColumn("Country"));
  
}
