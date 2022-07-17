var grades = [[89, 77, 67], [78, 54, 90], [98, 90, 40]]
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("student" + parseInt(row + 1) + "average" + average?.toFixed(2));
    total = 0;
    average = 0;
}
