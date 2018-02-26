window.sr = ScrollReveal();
		sr.reveal('.navbar', {
			duration: 2000,
			origin: 'bottom'
		});
		sr.reveal('.showcase', {
			duration: 2000,
			origin: 'top',
			distance: '300px'
		});
		sr.reveal('#secb', {
			duration: 2000,
			origin: 'left',
			distance: '300px'
		});
		sr.reveal('.section-a', {
			duration: 2000,
			origin: 'right',
			distance: '300px'
		});
		sr.reveal('.section-b', {
			duration: 2000,
			delay: 2000,
			origin: 'bottom'
		});
		sr.reveal('.well', {
			duration: 2000,
			delay: 2000,
			origin: 'left'
		});
		sr.reveal('.section-c', {
			duration: 5000,
			origin: 'bottom'
		});

$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });