// Fixed navbar
$(function() {
  $(window).on('scroll', function(){
    if($(window).scrollTop() > 20) {
      $('.navigation-wrap').addClass('scroll-on');
    } else {
      $('.navigation-wrap').removeClass('scroll-on');
    }
  })
})

$(function(){
  $('.navbar-toggler').on('click', function() {
    $('.navigation-wrap').addClass('scroll-on');
  })
})

// Mobile Nav
$('.nav-link').on('click', function(){
  $('.navbar-collapse').collapse('hide')
})

// AOS animation
AOS.init({
  disable: 'mobile'
});

// 2GIS
DG.then(function() {
  var map;

  map = DG.map('map', {
      center: [54.98, 82.89],
      zoom: 13
  });

  map.locate({setView: true, watch: true})
      .on('locationfound', function(e) {
          DG.marker([e.latitude, e.longitude]).addTo(map);
      })
      .on('locationerror', function(e) {
          DG.popup()
            .setLatLng(map.getCenter())
            .setContent('Предоставьте доступ к местоположению!')
            .openOn(map);
      });
});