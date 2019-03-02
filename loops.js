function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
 }
 return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop (num) {
  for (var i = 0; i < num; i++) { 
  do { console.log('I run once regardless.');
} while (incrementVariable(i) < num);
}
}




