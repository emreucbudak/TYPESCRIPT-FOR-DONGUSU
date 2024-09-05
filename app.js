for (var index = 0; index < 10; index++) {
    console.log(index);
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var items = arr_1[_i];
    console.log(items);
    // Stringdede aynısını yapabilirsin
}
for (var items in arr) {
    console.log(items);
    // INDEKSLERI VERIR
}
