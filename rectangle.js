module.exports = (x,y,callback)=>{
   if(x<=0||y<=0)
   {
       setTimeout(() => {
          return callback(new Error("The negative or 0 values are not allowed"),null) 
       }, 2000);
   }
   else
   {
    setTimeout(() => {
        return callback(null,{
            perimeter,
            area
        }) 
     }, 2000);
   }
}

const perimeter=(x,y)=>(2*(x+y));
const area=(x,y)=>(x*y);