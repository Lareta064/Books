document.addEventListener('DOMContentLoaded', function(){
	 /*MENU MOBILE */
    const  bodyEl = document.body;
	  const menuButton = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#header-menu');
     function closeMobileMenu(){
        menuButton.classList.remove('active');
        mobileMenu.style.height = 0;
        bodyEl.classList.remove('lock');
      }
      function openMobileMenu(){
        menuButton.classList.add('active');
        let menuHeight = mobileMenu.scrollHeight + 20;
        mobileMenu.style.height =  menuHeight + 'px';
        bodyEl.classList.add('lock');
      }
      if(mobileMenu){
          const mobileMenuLinks = mobileMenu.querySelectorAll('a');

          menuButton.addEventListener('click', ()=> {      
           if( menuButton.classList.contains('active')){ closeMobileMenu();}
           else{ openMobileMenu(); }
        });
        mobileMenuLinks.forEach((item)=>{
          item.addEventListener('click', ()=> {      
            closeMobileMenu();
          });
        });
      }
      let promoSwiper2 = new Swiper('.promo-swiper', {
           slidesPerView: 1,
            loop: true,
          // effect: 'fade',
           speed: 1000,
           autoplay:{
             delay: 4500,
             disableOnInteraction: false,
           },
        spaceBetween:32,
        pagination: {
          el: ".promo-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}">${String(index + 1).padStart(2, '0')}</span>`;
          },
        }    
      });
      //- testimonials-swiper 
      let reviewSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween:16,
        loop: true,
        navigation: {
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        },
        speed:800,
        breakpoints: {
          574:{
            slidesPerView: 'auto',
             spaceBetween:16,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
    
      })
    //- book-swiper 
    let booksSliders = document.querySelectorAll('.book-swiper');
     if( booksSliders.length >0){
       booksSliders.forEach((sw)=>{
          let sigleSwiper =  new Swiper(sw, {
              slidesPerView: 1,
              spaceBetween:10,
              speed:600,
               pagination: {
                  el: ".book-pagination",
                  clickable: true,
                }
        });
      });
     }
	  let missionSwiper = new Swiper('.mission-swiper', {
        slidesPerView: 1,
        spaceBetween:32,
        speed:1000,
        effect: 'fade',
        autoplay:{
          delay: 4500,
        },
        pagination: {
          el: ".mission-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}">${String(index + 1).padStart(2, '0')}</span>`;
          },
        }    
      });
})