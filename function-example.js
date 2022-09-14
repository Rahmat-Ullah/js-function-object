function getTotal(assignment1, assignment2, assignment3){
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}

var assignment1Marks = 60;
var assignment2Marks = 50;
var assignment3Marks = 56;

var myAverage = getTotal(assignment1Marks + assignment2Marks + assignment3Marks);
console.log(myAverage);
