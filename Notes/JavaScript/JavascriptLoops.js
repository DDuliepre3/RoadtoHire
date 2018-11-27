// LOOPS
// For when you want to repeat code over and over a certain number of times

var counter = 1;
while ( counter <= 10 ) {
  console.log(counter);
  counter += 1;
}
// This while loop will run 10 times

do {
    // code for loop goes here
    // it runs AT least one time
} while ( )

for (var i = 0; i < 10; i++) {
    // do something in here
}

for (var i = 0; i < 100; i +=1) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></dib>';
}