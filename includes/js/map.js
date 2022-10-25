function initMap() {
    // Setting up the positions
    const p_center  = { lat: 43.626381076802886, lng: 2.7834470069194355 };
    const m1 = { lat: 43.575923826579675, lng: 3.9468778704453573 };
    const m2 = { lat: 43.63371546945498, lng: 3.8654486607743377 };
    const m3 = { lat: 43.601350349764715, lng: 3.8654486607743377 };
    const m4 = { lat: 43.59118303043351, lng: 1.4425101709259818 };
    const m5 = { lat: 43.635107873876635, lng: 1.4440383255594988 };
    const m6 = { lat: 43.5992631817444, lng: 3.843290260182038 };
    const m7 = { lat: 43.65538370127563, lng: 2.39751154474675 };
    // Setting up the center position
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: p_center,
    });
    
    



    // Markers on map
    const marker0 = new google.maps.Marker({
      position: p_center,
      map: map,
    });
    const marker1 = new google.maps.Marker({
      position: m1,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: m2,
        map: map,
      });
    const marker3 = new google.maps.Marker({
        position: m3,
        map: map,
      });    
    const marker4 = new google.maps.Marker({
        position: m4,
        map: map,
      }); 
    const marker5 = new google.maps.Marker({
        position: m5,
        map: map,
      }); 
    const marker6 = new google.maps.Marker({
        position: m6,
        map: map,
      });
    const marker7 = new google.maps.Marker({
        position: m7,
        map: map,
      });          
  }
  
  window.initMap = initMap;