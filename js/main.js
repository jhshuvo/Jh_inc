$(document).ready(function(){
 
  // $(selector).countMe(delay,speed)
  $('.count').counterUp({
    delay: 20,
    time: 3000
});


			/* Dynamic Gallery */
			$( '.swipebox' ).on( 'click', function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : 'images/gallary/big/gbig1.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig2.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig3.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig4.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig5.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig6.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig7.jpg', title : 'My Caption' },
          { href : 'images/gallary/big/gbig8.jpg', title : 'My Caption' },
				
				] );
			} );


      $('.contents').btnLoadmore({
        showItem : 4,
        whenClickBtn : 4,
        classBtn: '.textBTn',
      });

  })
  

  // js

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  // 
