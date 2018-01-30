$(document).ready(function() {
    var owl = $('.group-information');
      owl.owlCarousel({
          padding: 10,
          // nav: true,
          loop: true,
          responsive: {
            0: {
              items: 3,
            },
            768: {
              items: 5
            },
            1000: {
              items: 5
            }
          }
      })
      $('.play').on('click', function() {
          owl.trigger('play.owl.autoplay', [1000])
      })
      $('.stop').on('click', function() {
          owl.trigger('stop.owl.autoplay')
  })
})

 
 $(document).ready(function() {
              var owl = $('.group-our-customers');
              owl.owlCarousel({
                padding: 10,
                // nav: true,
                loop: true,
                autoplayHoverPause: true,
                responsive: {
                  0: {
                    items: 4
                  },
                  768: {
                    items: 6
                  },
                  992: {
                    items: 8
                  }
                }
              })
            })