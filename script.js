// Javascript functions

function multiply(lst) {
  var result = 1;
  for (var i = 0; i < lst.length; i++) {
    result *= lst[i];
  }
  return result;
}
console.log(multiply([2, 3, 4]));

function reverse(s) {
  var rev = "";
  for (var i = 0; i < s.length; i++) {
    rev = s[i] + rev;
  }
  return rev;
}
console.log(reverse("Hello there!"));
