const request = new XMLHttpRequest();
request.addEventListener("load", onload);
request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();
function onload() {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    setData(response);
  }
}

