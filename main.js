let width = document.documentElement.clientWidth
    console.log(width);
    let div,
        div2

    function swiper(swiper) {
        new Swiper(swiper, {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    }

    function swiper2(swiper) {
        new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        })
    }


      if (width > 900) {
        document.querySelector(div2)
        div = document.createElement('div')
        div.classList.add("swiper")
        div.classList.add("mySwiper")
        div.innerHTML = `
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/image 17.png" alt="gf"></div>
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/заставкаКюбилею55лет 1.png" alt="gf"></div>
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_0104 1.png" alt="gf"></div>
    
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div> `

        div2 = document.createElement('div')
        div2.classList.add("swiper")
        div2.classList.add("mySwiper")
        div2.innerHTML = `
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_0061 - копия.png" alt="gf"></div>
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_2181 - копия.png" alt="gf"></div>
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/IMG_20220530_120424 1.png" alt="gf"></div>

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        `
        document.querySelector('section.section-2').append(div)
        swiper('.mySwiper')
        } else {
            document.querySelector(div)
        div2 = `
        <div class="swiper mySwiper" style="margin-top: 50px;">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/image 17.png" alt="gf"></div>
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/заставкаКюбилею55лет 1.png" alt="gf"></div>
            <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_0104 1.png" alt="gf"></div>
    
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        </div> 

        <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_0061 - копия.png" alt="gf"></div>
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/SAM_2181 - копия.png" alt="gf"></div>
          <div class="swiper-slide"><img style="margin-left: -80px;width: 500px;height: 350px;" src="./img/IMG_20220530_120424 1.png" alt="gf"></div>

        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
        `
        document.querySelector('section.section-2').append(div)
        swiper('.mySwiper')
        }