

    var container = document.querySelector('.js-masonry');
    var msnry;
    // initialize Masonry after all images have loaded
    imagesLoaded( container, function() {
      msnry = new Masonry( container );
    });
