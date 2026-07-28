function background(code) {

    if (code == 1000) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/sunny.jpg')";
    }

    else if (code == 1003) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/partly-cloudy.jpg')";
    }

    else if (code >= 1006 && code <= 1009) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/cloudy.jpg')";
    }

    else if ((code >= 1063 && code <= 1183) || (code >= 1240 && code <= 1246)) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/rain-shower.jpg')";
    }

    else if (code >= 1186 && code <= 1189) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/moderate-rain.jpg')";
    }

    else if (code >= 1192 && code <= 1201) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/heavy-rain.jpg')";
    }

    else if (code >= 1273 && code <= 1282) {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/thunder.jpg')";
    }

    else {
        document.querySelector(".wrapper").style.backgroundImage = "url('image/default.jpg')";
    }

}

fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=rajkot`)
    .then((response) => {
        response.json().then((data) => {
            document.querySelector(".city-name").innerText = data.location.name;
            document.querySelector("#time").innerText = data.location.localtime;
            document.querySelector("#temp").innerText = data.current.temp_c + "°C";
            document.querySelector("#condition").innerText = data.current.condition.text;
            document.querySelector("#icon").src = "https:" + data.current.condition.icon;
            document.querySelector("#cloud").innerText = (data.current.cloud + "%");
            document.querySelector("#humidity").innerText = (data.current.humidity + "%");
            document.querySelector("#wind").innerText = (data.current.wind_kph + "km/h");
        
            background(data.current.condition.code);
        });
    });

document.querySelector("button").onclick = function () {
    const city = document.querySelector("input").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`)
        .then((response) => {
            response.json().then((data) => {
                document.querySelector(".city-name").innerText = data.location.name;
                document.querySelector("#time").innerText = data.location.localtime;
                document.querySelector("#temp").innerText = data.current.temp_c + "°C";
                document.querySelector("#condition").innerText = data.current.condition.text;
                document.querySelector("#icon").src = "https:" + data.current.condition.icon;
                document.querySelector("#cloud").innerText = (data.current.cloud + "%");
                document.querySelector("#humidity").innerText = (data.current.humidity + "%");
                document.querySelector("#wind").innerText = (data.current.wind_kph + "km/h");

                background(data.current.condition.code);
            });
        });
};

document.querySelector(".cities").addEventListener("click", function (e) {

    fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${e.target.innerText}`)
        .then((response) => {
            response.json().then((data) => {
                document.querySelector(".city-name").innerText = data.location.name;
                document.querySelector("#time").innerText = data.location.localtime;
                document.querySelector("#temp").innerText = data.current.temp_c + "°C";
                document.querySelector("#condition").innerText = data.current.condition.text;
                document.querySelector("#icon").src = "https:" + data.current.condition.icon;
                document.querySelector("#cloud").innerText = data.current.cloud + "%";
                document.querySelector("#humidity").innerText = data.current.humidity + "%";
                document.querySelector("#wind").innerText = data.current.wind_kph + "km/h";

                background(data.current.condition.code);
            });
        });
});