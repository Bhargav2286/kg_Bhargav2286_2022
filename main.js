var input = [10, 300, 5];
var string_input = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

console.log(...input);
for (var i = 0; i < input.length; i++) {
    final_input = input[i];
    var s = "";

    while (final_input > 0) {
        var mod = (final_input % 10);
        str = string_input[mod] + s;
        final_input = Math.floor((final_input / 10));
    }

    array[i] = s + ",";
}
console.log(...input);

