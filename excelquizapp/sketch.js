
let table;
let input;
let loaded=false;
let selection=0;
let i=0;


function setup() {
	createCanvas(0, 0);
	input = createFileInput(handleFile);
	fileupload = createElement('br','br', 'br', '');

	fileupload = createElement('br', '');
	next = createButton('next question');
	next.mousePressed(quesiongenerator);



	//intialiser
	question = createElement('h1', 'Question');
	sel = createRadio();
	sel.option('pear');
	sel.option('kiwi');
	sel.option('grape');
	sel.changed(optionselected);
	response= createElement('h3', "Answer");

}


function draw() {
	background(200);


}

correctanswer= 'kiwi';

function handleFile(file) {
  print(file);
	table = loadTable(file.data, 'csv', 'header');
	loaded=true;
}

function quesiongenerator()
{

	if(question!=null)
	question.remove();
	response.remove();
	sel.remove();

	i=getRandomInt(0,table.getRowCount());
	question = createElement('h1', table.get(i, 0));
	correctanswer=table.get(i, 1);
	sel = createRadio();
	createoptions();
	sel.changed(optionselected);

}

function optionselected()
{

response.remove();

let selection=sel.value();
if(selection==correctanswer)
	{
			response= createElement('h3', "Correct");
	}
	else {
		  response= createElement('h4', "Incorrect.answer is :" + correctanswer);
	}
}

function float2int (value) {
    return value | 0;
}


function createoptions()
{

	b=getRandomInt(0,table.getRowCount()-1);
	c=getRandomInt(0,table.getRowCount()-1);
	d=getRandomInt(0,table.getRowCount()-1);

	options= [correctanswer,table.get(b, 1),table.get(c, 1),table.get(d, 1)];
	options=shuffle(options);
	sel.option(options[0]);
	sel.option(options[1]);
	sel.option(options[2]);
	sel.option(options[3]);





}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
