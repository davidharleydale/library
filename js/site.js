var SITE = SITE || {}; //sets a variable of site, all caps to stand out

SITE._myvar = '';
SITE._myObject = '';

SITE.dribbble = {
    init: function () {
        alert('What up girl?!');
    }
};


SITE.dropdown = {
    init: function () {
        alert('What up girl?!');
    }
};


SITE.slideshow = {
    init: function () {
        alert('What up girl?!');
    }
};

//We are setting up a way in our HTML to specify which Javascript function
// we are going to run on the page.
SITE.features = {
    //init is a method because it's being set to a function
    //init basically means initial, the first thing being set
    //init could be called anything such as puppy party
        init: function (){
            var features = $('body').data('features'); //data is an HTML attribute
            var featuresArray = [];

            //looks to see if features exists
            if(features){
                //if true, takes the string and splits it into an array with the separator of a space
                featuresArray = features.split(' ');

                for(var i = 0; i < featuresArray.length; i++){
                    var func = featuresArray[i];

                    //typeof (is our variable/the thing we are checking a specific datatype)
                    //Does site.dribble exist, if so, does site.dribble.init exist and is it
                    //a type of function.
                    if(SITE[func] && typeof SITE[func].init === 'function'){
                        SITE[func].init();
                    }
                }
            }
        }
};

$(function(){
    SITE.features.init();
});
