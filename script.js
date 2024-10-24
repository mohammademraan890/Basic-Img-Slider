$(document).ready(() => {
  $('.slider1').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    asNavFor: '.slider2',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: false,
  })
  $('.slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider1',
    dots: false,
    focusOnSelect: true,
    centerPadding: "0px",
    arrows: false,
    fade: true,

  })
  lightGallery(document.querySelector('.slider2'), {
    plugins: [lgThumbnail, lgRotate, lgFullscreen, lgAutoplay, lgShare, lgZoom],
    // thumbnail: true,
    selector: 'a',
    zoom: true,
    loop: true,
    infinite: true,


  });
  let totalSlides = $('.slider1 .slick-slide').length;
  $('#totalSlides').text(totalSlides);
  // Update current slide number on slide change
  $('.slider1').on('afterChange', function (event, slick, currentSlide) {
    $('#currentSlide').text(currentSlide + 1); // +1 because currentSlide is 0-indexed
    console.log(currentSlide)
  });

  // Initialize the current slide number
  $('#currentSlide').text($('.slider1').slick('slickCurrentSlide') + 1);
  // Get total number of original slides (excluding cloned ones)
  // let totalSlides = $('.slider1 .slick-slide:not(.slick-cloned)').length;

  // Function to update the progress bar based on the current slide
  function updateProgressBar(currentSlide) {
    let progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
    $('.progress-bar1').css('width', progressPercentage + '%');
  }

  // Update current slide number on slide change and progress bar
  $('.slider1').on('afterChange', function (event, slick, currentSlide) {
    updateProgressBar(currentSlide);
  });
  // Initialize the progress bar with the first slide
  let initialSlide = $('.slider1').slick('slickCurrentSlide');
  updateProgressBar(initialSlide);
  // console.log(initialSlide)

  /* ----------Progress-Bar in Paragraph------------ */
  const container = $('#scrollContainer');
  const progressBar = $('#progressBar');

  container.on('scroll', function () {
    const scrollTop = container.scrollTop(); // Amount scrolled from the top
    const scrollHeight = container[0].scrollHeight - container[0].clientHeight; // Total scrollable area
    const scrollPercent = (scrollTop / scrollHeight) * 100; // Calculate percentage of scroll

    // Update progress bar height based on scroll percentage
    progressBar.css('height', scrollPercent + '%');
  });
  $(".progress-btn").click(() => {
    container.animate({ scrollTop: 0 }, 'slow'); // Scroll to the top
  });
});
