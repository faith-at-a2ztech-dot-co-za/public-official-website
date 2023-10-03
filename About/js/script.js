function readMore(){
    $(".about-read-more-btn").click(function(){
        $(".read-more").toggleClass("read-more-class");
        
        // Toggle the button text
        if ($(".about-read-more-btn").text() == "Read More") {
            $(".about-read-more-btn").text("Read Less");
        } else {
            $(".about-read-more-btn").text("Read More");
        }
    });
}

readMore();
