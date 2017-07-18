<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <title>Google maps API</title>

</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default" >
          <h5>Click on screen to show the Google Maps API</h5>
          <div id="googleMap" style="width:100%;height:800px;" ondblclick="showMap()"></div>

          <script  type="text/javascript">
          function showMap(){

            var mapProp= {
              center:new google.maps.LatLng(-19.9667793, -43.9761253),
              zoom:10,
              styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
            };
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


            var locations = [
              ['First Shoppe', -19.9667793, -43.9761253,'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-circle-google-plus-2-128.png'],
              ['First Shoppe2', -19.9386315, -43.939699,'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-circle-google-plus-2-128.png'],
              ['First Shoppe2', -19.9156643, -43.9743293,'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/social-circle-google-plus-2-128.png']

            ];

            for (i = 0; i < locations.length; i++) {
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                title: locations[i][0],
                map: map,
                icon: locations[i][3]
              });
            }


          }


          </script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9GvGauHPDIOwomuHOfS7Bgix3RVSK76s&callback=myMap"></script>



        </div>
      </div>
    </div>
  </div>

</body>
</html>
