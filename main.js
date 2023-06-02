$(function () {
    
    $('#searchBtn').click(function() {
        var city = $('#cityInput').val();

        // Make the API request
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {
                q: city,
                appid: 'YOUR_API_KEY' // Replace with your OpenWeatherMap API key
            },
            success: function(data) {
                // Process the response data
                var temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
                var weatherDescription = data.weather[0].description;

                // Display the weather information
                var weatherText = 'Temperature: ' + temperature + '°C<br>' +
                    'Description: ' + weatherDescription;
                $('#weatherContainer').html(weatherText);
            },
            error: function(xhr, status, error) {
                console.log('Error:', error);
            }
        });
    });
});
