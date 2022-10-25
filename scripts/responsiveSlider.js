//https://nickpiscitelli.github.io/Glider.js/
//https://www.jsdelivr.com/package/npm/glider-js?version=1.7.3

const d = document;
const responsiveSlider = () => {
    window.addEventListener("load", function () {
        new Glider(d.getElementById("slides"), {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: '.slides-dots',
            rewind: true,
            scrollLock: true,
            arrows: {
              prev: '.btn-before',
              next: '.btn-after'
            },
            responsive: [
                {
                  // screens greater than >= 500px
                  breakpoint: 500,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                }
              ]
        }
        )
    })
}

export	 default responsiveSlider;