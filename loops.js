function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
 }
 return 'done';
} 
function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop (num) {
  do { console.log('I run once regardless.');
} while (incrementVariable() < num);
}