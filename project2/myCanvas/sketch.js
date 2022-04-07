
let arrayOfObjects = [];
let arrayOfYears = [];
let arrayOfMeans = [];
let newArray = [];

  
    function preload() {
      table = loadTable("data/Overall_loss_in_HDI_due_to_inequality.csv", "csv");
      //reading json file to get the average value
      file = loadJSON("data/countries.json");
    }

    function setup() {
    
    //BUILDING AN ARRAY OF OBJECTS
       
    createCanvas(windowWidth, windowHeight);
    
    //Here is an array for countries (by rownumber)
    let rowArray = [149,159,145,77,75]
    //setting up the Object values for countries'lines

         for (let i = 0; i < rowArray.length; i++) {
           let countryObject = new Object;
           countryObject.countryName = table.getString(rowArray[i], 1);
           countryObject.xpoints = [];
           countryObject.ypoints = [];
           countryObject.yvalues = [];
           //looping through the columns to push the proper values into the arrays
           // make sure the year exists, because often there are empty columns in between each year column.
            for (let c = 2; c < table.getColumnCount(); c++) {
              let theYear = Number(table.getString(0, c))
              if (theYear > 1) {
              let Yvalue = Number(table.getString(rowArray[i], c))
               countryObject.xpoints.push(map(theYear,2010,2019,150,width-50));
               countryObject.ypoints.push(map(Yvalue,0,30,height-50,50));
               countryObject.yvalues.push(Yvalue);
             // this line loads the years into the arrayOfYears 
              if (i==0) {arrayOfYears.push(theYear);}
              }
    
            }
            //once the inner loop is done, the object for that country is pushed into the arrayOfObjects for later use
        	arrayOfObjects.push(countryObject)
    
         }
         
        // create mean values array 
        
        var total = 0;
        var count = 0;
          
        for(let i=0; i < arrayOfYears.length;i++) {
           for(let j=0; j < Object.values(file).length;j++) {
               if (file[j][arrayOfYears[i]]!= ""){
                   total += file[j][arrayOfYears[i]]
                   count += 1
                }
            }
            arrayOfMeans.push(total/count)
            total = 0;
            count = 0;
        }
    
        console.log(arrayOfMeans);
        
        
        /// make object of means to plot on the chart
        
      for (let i = 0; i < arrayOfMeans.length; i++) {
           //setting up the Object values
           let meanObject = new Object;
           meanObject.value = arrayOfMeans[i];
           meanObject.xpoints = [];
           meanObject.ypoints = [];
           
            for (let c = 2; c < table.getColumnCount(); c++) {
              let theYear = Number(table.getString(0, c))
              if (theYear > 1) {
              let Yvalue = Number(arrayOfMeans[i]);
               meanObject.xpoints.push(map(theYear,2010,2019,150,width-50));
               meanObject.ypoints.push(map(Yvalue,0,30,height-50,50));
      
              }
    
            }
        	newArray.push(meanObject)
        	
         }  
         //check the results
        console.log(newArray);
    
    //  background()
    //  noFill();
          makeAxis();
          makeCountryTimeLines();
          makeMeanLine();
        
    }



    function makeCountryTimeLines() {
      //this loops through each country object
    	for(let i=0; i < arrayOfObjects.length;i++) {
           	// stroke(30*i)
            stroke(100*i,10*i,150,200);
           	beginShape();
           	startYpoint = 0;
        	let countryName = arrayOfObjects[i].countryName;
    
           //then it loops through the values in the object's arrays ypoints, xpoints, yvalues
           	for(let j=0; j < arrayOfObjects[i].ypoints.length;j++) {
    			 let Xpoint = arrayOfObjects[i].xpoints[j];
    			 let Ypoint = arrayOfObjects[i].ypoints[j];
    			 let Yval = arrayOfObjects[i].yvalues[j];
    		     if (Yval > 0) {
    		     // draw the point on the curve
                       ellipse(Xpoint,Ypoint,8,8);
                // draw the curve vertex
            		if(startYpoint === 0) {
    					startYpoint = 1;
    				  text(countryName,Xpoint-10,Ypoint)
    				  curveVertex(Xpoint,Ypoint);
    				  curveVertex(Xpoint,Ypoint);
    				} else if (j == arrayOfObjects[i].ypoints.length - 1) { // this is the last point
    				  curveVertex(Xpoint,Ypoint);
    				  curveVertex(Xpoint,Ypoint);
    				  } else {
    				  curveVertex(Xpoint,Ypoint);
    			  
    				}
             	}
      
           }
           endShape();
           // this ends the curveVertex for this country
           // the loop will start again with the next country
       }
       
       
    }






    function makeMeanLine() {
      
     	for(let i=0; i < newArray.length;i++) {
    		fill(29);
           	beginShape();
           	startYpoint = 0;
        	let mean = newArray[i].value.toFixed(2);
    
    			 let Xpoint = newArray[i].xpoints[i];
    			 let Ypoint = newArray[i].ypoints[i];
    			 
    		     if (Xpoint > 0) {
    		     // draw the point on the curve
                      ellipse(Xpoint,Ypoint,8,8);
                       
    				  startYpoint = 0 ;
    				  text("Mean = " + mean,Xpoint-10,Ypoint);
    				  fill(29);
    				//   stroke(3);
    			      strokeWeight(1);
    				  curveVertex(Xpoint,Ypoint);
    
    		
             	}
           endShape();
      
       }	
        
    }
 
  

    function makeAxis() {
      textAlign(LEFT)
      fill(0)
         text("Overall loss in HDI due to inequality (%)",20,20)
        
        //draw xaxis
        line(150,height-50,width-50,height-50);
        //draw yaxis
        line(150,50,150,height-50);
        
        //yaxis vaules
        for(let i = 0; i < 41 ; i += 5 ) {
          //rounding is here because of floating point issue
          let rounded = Math.round( i * 10 ) / 10;
          yvalue = map(rounded,0,30,height-50,50);
          textAlign(RIGHT,CENTER)
          text(rounded,140,yvalue);
          line(145,yvalue,155,yvalue);
        }
        //xaxis values
         for (let i = 0; i < arrayOfYears.length; i++) {
           let myYear = arrayOfYears[i]
        	console.log(myYear);
           let xvalue = map(myYear,2010,2019,150,width-50)
           textAlign(CENTER,BOTTOM);
           fill(0)
           text(myYear,xvalue,height-30);
           line(xvalue,height-55,xvalue,height-45);
           noFill()
           
            // Draw lines
     
    
        // var mouseMargin = 10;
    
        //     var x = xvalue[i];
        //     var y = yvalue[i];    
        //     if (mouseX > x - mouseMargin && mouseX < x + mouseMargin &&
        //         mouseY > y - mouseMargin && mouseY < y + mouseMargin) {
                
        //         rect (x + 20, y - 10, 50, 30);
        //         textAlign(CENTER);
        //         text('' + Math.round(myYear[i]*100)/100, x + 45, y + 10);
        //         strokeWeight(7);
        //         point(x, y);
        //         strokeWeight(1);
        //     }
        
        }
    }

