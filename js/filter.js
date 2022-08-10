  // Porfolio isotope and filter
  $(window).on('load', function() {
    var projectsIsotope = $('.projects-container').isotope({
      itemSelector: '.projects-item',
      layoutMode: 'fitRows'
    });

    $('#projects-flters li').on('click', function() {
      $("#projects-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      projectsIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });