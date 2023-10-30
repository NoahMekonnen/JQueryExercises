// Important global variable declarations
let numOfClicks = 0;
let movies = []
let titleContainer = []
const fatherDiv = $('<div>');
$('body').append(fatherDiv);

// Adding sort button
const sortButton = $('<button>');
sortButton.text('Alphabet Sort');

// sort button functionality
sortButton.on("click", function(e){
    titleContainer = []
    e.preventDefault();
    if (numOfClicks == 0){
        e.target.parentNode.children[3].remove();
    }
    else{
        e.target.parentNode.children[4].remove();
    }
    numOfClicks +=1

    for (one of movies){
        const {title} = one
        titleContainer.push(title)
    }
    titleContainer.sort();
    console.log(titleContainer)
    let fatherDiv = $('<div>')
    for (let i = 0; i < titleContainer.length; i++){
        for (let j = 0; j < movies.length; j++){
            if (movies[j].title == titleContainer[i]){
                let finalDiv = $('<div>')
                let ratingDiv = $('<div>').text(movies[j].rating)
                let titleDiv = $('<div>').text(movies[j].title)
                let button = $('<button>').text('Remove')
                finalDiv.append(titleDiv);
                finalDiv.append(ratingDiv);
                finalDiv.append(button);
                fatherDiv.append(finalDiv);
                $('body').append(fatherDiv);

                // Adding button functionality
                button.on('click', function(e){
                e.preventDefault();
                e.target.parentNode.remove()
                })
            }
        }
    }
})
$('form').on('submit', function(e){
    e.preventDefault()
    // Adding text and buttons
    const button = $('<button>').text('Remove');
    if($('#title')[0].value.length >= 2 && Number($('#rating')[0].value) >= 0 && Number($('#rating')[0].value) <= 10)
    {
        const titleDiv = $('<div>').text($('#title')[0].value);
        const ratingDiv = $('<div>').text($('#rating')[0].value);
        const movie = {title: titleDiv[0].innerHTML,rating: ratingDiv[0].innerHTML};
        movies.push(movie);
        const finalDiv = $('<div>');
        finalDiv.append(titleDiv);
        finalDiv.append(ratingDiv);
        finalDiv.append(button)
        fatherDiv.append(finalDiv)
    }

    // Adding button functionality
    button.on('click', function(e){
        e.preventDefault();
        e.target.parentNode.remove()
    })

    // Adding sort button
    if (movies.length > 0){
        $('body').append(sortButton);
    }
})
