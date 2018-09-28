import React, { Component } from 'react';


class Map extends Component {

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDCNrXEldAgmH2ozJr9gcUybeoiBJqPI2k&callback=initMap')
    window.initMap = this.initMap
  }


  initMap = () => {
        // Constructor creates a new map - only center and zoom are required.
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });

        var marker = new window.google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

  
loadScript = (url) => {
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }


  render() {
    return (
      <div id='map'>
        
      </div>
    );
  }
}


export default Map;