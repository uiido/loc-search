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
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to GitHub');
        });

})

// 'https://www.loc.gov/search/?q=' + q + '&fo=json';