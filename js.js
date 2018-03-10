 function initMap(){
	 'use strict';
      var options = {
        zoom:8,
        center:{lat:30.035278,lng: 31.231112}
      }

      
      var map = new google.maps.Map(document.getElementById('map'), options);
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({location:event.latLng});
      });
	
		
     
      var markers = [
        {
          location:{lat:31.205753,lng:29.924526},
			title:"Alex",
          content:'<p>is the best way to travell and speend the time</p>'
        },
        {
          location:{lat:29.97371,lng:32.52627},
			title:"Suez",
          content:'<p>is a global expert in the water and waste sectors, Suez helps cities and industries in the circular economy to preserve</p>'
        },
        {
          location:{lat:30.056021,lng:30.976639} ,
		    title:"6th of October",
			content:'<p> is a city in Giza Governorate, a satellite town and part of the urban area of Cairo, Egypt, 32 km (20 miles) outside the city</p>'
        },
		  {
          location:{lat:31.25654,lng:32.28411} ,
			  title:"Port Said",
			content:'<p>is a city that lies in north east Egypt extending about 30 kilometres</p>'
        },
		  {
          location:{lat:31.032955,lng:31.391224} ,
			  title:"El-Mansoura",
			content:'<p>is a city in Egypt, with a population of 960,423.</p>'
        },
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(mark){
        var marker = new google.maps.Marker({
          position:mark.location,
          map:map,
          
        });

        // Check content
        if(mark.content){
          var infoWindow = new google.maps.InfoWindow({
            content:mark.title+"<br> "+mark.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
			  
          });
        }
      }
		
	}
