// let userLatitude, userLongitude, map;

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       userLatitude = position.coords.latitude;
//       userLongitude = position.coords.longitude;
//       document.getElementById("locationCoordinates").innerHTML =
//         "Latitude: " + userLatitude + ", Longitude: " + userLongitude;
//       document.getElementById("showMapButton").disabled = false;
//     });
//   } else {
//     document.getElementById("locationCoordinates").innerHTML =
//       "Geolocation is not supported by this browser.";
//   }
// }

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// function showMap() {
//   if (userLatitude && userLongitude) {
//     const userLocation = new google.maps.LatLng(userLatitude, userLongitude);
//     map.setCenter(userLocation);
//     const marker = new google.maps.Marker({
//       position: userLocation,
//       map: map,
//     });
//   }
// }

/////////////////////////////////////////////////////////////////////////////
function readFile(){
  var files=document.getElementById('input').files;
  console.log(files);
  console.log(files[0].name);
  console.log(files.length);


var file=files[0]
var reader=new FileReader()
reader.readAsText(file,'utf-8')
reader.onload=function(){
  document.getElementById('result').value =reader.result;
}
}

function readFile2(){
  var files=document.getElementById('input').files;

  output='';
  for(var i=0,f; f=files[i];i++){
    output += f.name+'\n';
    output += f.type+'\n';
    output += f.size+'bytes\n';
    output += f.lastModifiedDate+'\n';
  }
  document.getElementById('result').value=output;
}