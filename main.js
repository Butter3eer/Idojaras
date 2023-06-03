$(function () {
    $("#kereses").click(function (e) {
        var varos = $('#varosInput').val();
        var api_key = 'f08721b7c8c370a65078d1471b7ce45c';
        var geocodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + varos + '&appid=' + api_key;

        $.ajax({
            url: geocodingUrl,
            method: 'GET',
            success: function(geocodingData) {
              var latitude = geocodingData[0].lat;
              var longitude = geocodingData[0].lon;
    
              var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + api_key;
      
              $.ajax({
                url: weatherUrl,
                method: 'GET',
                success: function(weatherData) {
                    console.log(weatherData);
                  Kiir(weatherData);
                },
                error: function() {
                  $('#idojarasHelye').text('Sikertelen adatbetöltés.');
                }
              });
            },
            error: function() {
              $('#idojarasHelye').text('Sikertelen adatbetöltés.');
            }
        });
        $("#varosInput").val("");
    });
});

function Kiir(data) {
    var varosNeve = data.name;
    var homerseklet = (data.main.temp - 273.15).toFixed(1);
    var erzes = (data.main.feels_like - 273.15).toFixed(1);
    var para = data.main.humidity;
    var szel = data.wind.speed;
    var leiras = data.weather[0].description;
    var icon = data.weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

    var idojarasHTML = `<h2>${varosNeve}<img src="${iconUrl}" alt="Weather Icon"></h2>
                        <p><strong>Hőmérséklet:</strong> ${homerseklet} C°</p>
                        <p><strong>Érződik:</strong> ${erzes} C°</p>
                        <p><strong>Pára:</strong> ${para}</p>
                        <p><strong>Szél:</strong> ${szel} csomó</p>
                        <p><strong>Leírás:</strong> ${leiras}</p>`;
    $('#idojarasHelye').html(idojarasHTML);
}
