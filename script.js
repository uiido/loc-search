var cardContainer = $(".card-container");

$(".btn-primary").click(function (event) {
    event.preventDefault();
    var input = $("#textInput").val();
    var format = $("#format").val();
    var url = 'https://www.loc.gov/' + format + '/?q=' + input + '&fo=json';
    console.log(url);

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    for (let i = 0; i < data.results.length; i++) {
                        generateCard(data.results[i]);
                    }
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('No results found!');
        });

})

function generateCard(cardData) {
    var card = $("<div>").addClass("card");
    var cardBody = $("<div>").addClass("card-body");
    var cardTitle = $("<div>").addClass("card-title").text(cardData.title);
    // date - card subttitle
    // info - card-text
    var cardText = $("<div").addClass("card-text").text(cardData.title);
    // button
    cardBody.append(cardTitle);
    cardText.append(cardBody);
    card.append(cardBody);
    cardContainer.append(card);
}

// change the alert
// add a subtitle
// card contents
// card link