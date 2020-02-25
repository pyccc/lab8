function initMap() {
    L.mapquest.key = 'YT9hgsgRjsIikBo4lMMBwBRiO3COPaRS';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
        center: [32.88, -117.236],
        layers: L.mapquest.tileLayer('map'),
        zoom: 14,
        zoomControl:false
    });

    L.marker([32.8788,-117.2358]).addTo(map);
}