var a = process.argv;
var x = 0;

for (var i = 2; i < a.length; i++) {
  x = x + Number(a[i]);
}

console.log(x);
