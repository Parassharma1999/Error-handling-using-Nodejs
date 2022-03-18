const rect=require("./rectangle");

 
const solveRect = (l,b)=>{
    console.log(`The length = ${l} and breadth = ${b}`)
    
 rect(l,b,(err,result)=>{
     if(err)
     {
         console.log("ERRROR: "+err.message)
     }
     else
     {
         console.log("The area is = "+result.area(l,b) + " and perimeter = " +result.perimeter(l,b) );
     }
 })
}


solveRect(-2,3);
