/*console.log($('h1'))
console.log(document.getElementsByTagName('h1')[0])
	/*$('button').on('click',function()*/
	/*	console.log(this)
		
	
	$('h1').on('click', function(){
	
	$(this).css('color','blue')
}
/*$('button').on('click',function(){
	$('h1').css('color','green')
	$('h1').text('jared')
	$('p').css('visibility','visible')
	$('p').hide()
	$('p').fadeIn(1000)
})
$(function() {
    var myArray = [];*/

    /*$('myArray')$.each( function() {
         myArray.push($(this).text());   
    });

    alert(myArray);
});

$.each(myArray,function(index,person){
console.log(person.Name)

})*/

var eq = generateEQ()
$("#questions").text(eq.a+"+"+eq.b);

$('#answer').on("click",function(){
	var input = $('input').val()
	var answerq=eq.a + eq.b

	console.log(typeof(answer))
	if (input === answerq){
		alert("correct");
	} else {
		alert("incorrect")
	}
});

function generateEQ(){
	var eq = {
		a:Math.floor((Math.random()*100)+1),
		b:Math.floor((Math.random()*100)+1)
	};
	return eq;
}