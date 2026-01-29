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
      },
    
      })
})