$(document).ready(function() {
    var owl = $('.group-information');
      owl.owlCarousel({
          padding: 10,
          // nav: true,
          loop: true,
          responsive: {
            0: {
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:true,
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
})

 $(document).ready(function() {
              var owl = $('.group-our-customers');
              owl.owlCarousel({
                padding: 10,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true,
                // nav: true,
                loop: true,
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