mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhaGthdGhpdDE2IiwiYSI6ImNrcG1xZWJ2ZjAwZ3Myb3M2MXFpazdpcXYifQ.LfcvVyQcM-wBqO8vCz_t-g';

navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
    setupMap([-79.347015, 43.65]);
}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, 'top-left');
}
