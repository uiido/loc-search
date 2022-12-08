$(".btn-primary").click(function (event) {
    event.preventDefault();
    var input = $("#textInput").val();
    var format = $("#format").val();
    'https://www.loc.gov/' + format + '/?q=' + input + '&fo=json';

}
)
// https://www.loc.gov/search/?q=baseball&fo=json

// 'https://www.loc.gov/search/?q=' + q + '&fo=json';