// Starting party time
const partyTime = $(function(){
    console.log("Let’s get ready to party with jQuery!")
})

// Giving imgs in article the class, image-center
const $children = $('article')[0].children;
for ($child of $children){
    if ($child.nodeName == 'IMG'){
        $('img').addClass('image-center');
    }
}

// Removing last paragraph
const lastP = $('p:last');
lastP.remove();

// Addding random pixel size
const randPixelSize = Math.ceil(Math.random()*100);
$('h1').css('fontSize', randPixelSize);

// Adding item to the list
const newLi = $('<li>').text("I like Chess");
$('ol').append(newLi);

// Apology for the existence of the silly list
const finalP = $('<p>').text("I apologize for the list. It was a mistake");
$('article').append(finalP);

// Make the number change the background color
let r = $('.col-sm-4')[1].children[0].value
let g = $('.col-sm-4')[2].children[0].value
let b = $('.col-sm-4')[3].children[0].value
$('body').css('backgroundColor',`rgb(${r},${g},${b})`)

// Remove image when clicked
$('img').on('click',function(){
    $('img').remove()
})

