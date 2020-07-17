//feetToMile
function feetToMile(feet) {
    let mile = feet * 1 / 5280;
    return mile;
}
let totalMile = feetToMile(576);
totalMile = totalMile.toFixed(3);
console.log(totalMile);

//woodCalculation

function woodCalculator(chair, table, bed) {
    let woodOfchair = chair * 1;
    let woodOftable = table * 3;
    let woodOfbed = bed * 5;
    let totalFurniture = woodOfchair + woodOftable + woodOfbed;
    return totalFurniture;
}
var totalNeedOfWood = woodCalculator(2, 3, 4);
console.log(totalNeedOfWood);

//brickCalculator

function brickCalculator(n) {
    let totalFeet;
    if (n < 0) {
        console.log("wrong value of number of buildings");
        return;
    }
    else
        if (n < 10) {
            totalFeet = n * 15;
        } else
            if (10 <= n <= 20) {
                totalFeet = 10 * 15 + (n - 10) * 12;
            }
            else


                if (20 > n) {
                    totalFeet = 10 * 15 + 10 * 12 + (n - 20) * 10;
                }


    let totalBricksOfBuilding = totalFeet * 1000;
    return totalBricksOfBuilding;
}
let bricks = brickCalculator(17);
console.log(bricks);

//tinyFriend


function tinyFriend(names){
    var min = names [0];
 for(var i = 0; i < names.length; i++){
    var nextName = names [i];
    
    if( nextName.length < min.length){
        min = nextName;
    }
 }
 return min;
}
var shortName = tinyFirend(['Jarin', 'Rakhi', 'Tom', 'Tonny', 'Shimla']);
console.log(shortName);
 
 