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
      menuButton.addEventListener('click', ()=> {
      
          if( menuButton.classList.contains('active')){
             closeMobileMenu();
            
          }else{
             openMobileMenu();
          }
      });
      
      // PROMO-SLIDER
      let promoSwiper = new Swiper('.promo-swiper', {
        spaceBetween:32,
        pagination: {
          el: ".promo-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}">${String(index + 1).padStart(2, '0')}</span>`;
          },
        }
    
      })
      let reviewSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween:16,
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
          1365: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
    
      })
      
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
	
})