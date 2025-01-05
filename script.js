// Predefined location (near O'Hare Airport)
const predefinedLocation = [41.9773, -87.8369];

// Initialize the map with Leaflet
const map = L.map('map').setView(predefinedLocation, 13);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add a marker
L.marker(predefinedLocation).addTo(map)
    .bindPopup('My Location')
    .openPopup();

function calculateDistance() {
    const userLocation = document.getElementById('userLocation').value;

    // Ensure the user has entered coordinates
    if (!userLocation) {
        document.getElementById('distanceOutput').innerText = "Please enter your latitude and longitude.";
        return;
    }

    // Parse input (latitude, longitude)
    const [userLat, userLng] = userLocation.split(',').map(coord => parseFloat(coord));

    if (isNaN(userLat) || isNaN(userLng)) {
        document.getElementById('distanceOutput').innerText = "Invalid coordinates.";
        return;
    }

    // Calculate distance via Leaflet's distance method
    const distanceInMeters = map.distance(predefinedLocation, [userLat, userLng]);
    const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
    const distanceInMiles = distanceInKm * 0.621371; // Convert kilometers to miles

    // Display distance
    document.getElementById('distanceOutput').innerText = `Distance: ${distanceInMiles.toFixed(2)} miles`;
}