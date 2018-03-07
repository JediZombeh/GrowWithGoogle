/***************************
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
***************************/


// my answer:

var fam1 = $('#family1');

$('<div id="family2">').insertAfter(fam1).prepend('<h1>Family 2</h1>').append('<div id="bruce">');  // create the second family div and family heading
$('#bruce').prepend('<div id="madison">').append('<div id="hunter">');  // creates Bruce's children, Madison and Hunter
$('#bruce').prepend('<h2>Bruce</h2>');  // adds the Bruce heading above the children.
$('#madison').append('<h3>Madison</h3>'); // adds Madison's heading
$('#hunter').append('<h3>Hunter</h3>'); // adds Hunter's heading


// better answer:

// var family1, family2, bruce, madison, hunter;

// family1 = $('#family1');
// family2 = $('<div id="family2"><h1>Family 2</h1></div>');
// bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
// madison = $('<div id="madison><h3>Madison</h3></div>"');
// hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

// family2.insertAfter(family1);
// family2.append(bruce);
// bruce.append(madison);
// bruce.append(hunter);



