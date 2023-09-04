var candies = [2,3,5,1,3];
var extraCandies = 3;

var output = [];
for(let i=0 ; i<candies.length ; i++){
    if((candies[i] + extraCandies) >= Math.max(...candies))
        output.push(true); 
    else
        output.push(false);
}

console.log(output);