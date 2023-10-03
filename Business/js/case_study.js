function businessCaseStudies(){
    var currentIndex = 0;
    $(document).ready(function () {
        $(`.tabs-btn:eq(${currentIndex})`).addClass('active-btn');
        $(`.tabs-track:eq(${currentIndex-1})`).addClass('hidden-tab');
        $(`.tabs-track:eq(${currentIndex+1})`).addClass('hidden-tab');
        $('.tabs-btn').click(function(){
            currentIndex = $(this).index();
            //tabs button coding start here
            $(`.tabs-btn:eq(${currentIndex})`).addClass('active-btn');
            $(`.tabs-btn:eq(${currentIndex-1})`).removeClass('active-btn');
            $(`.tabs-btn:eq(${currentIndex+1})`).removeClass('active-btn');
            //alert(currentIndex);
            if(currentIndex>1){
                //button active coding start here
                $(`.tabs-btn:eq(${currentIndex})`).addClass('active-btn');
                $(`.tabs-btn:eq(${currentIndex-2})`).removeClass('active-btn');
                $(`.tabs-btn:eq(${currentIndex+2})`).removeClass('active-btn');
                //button active coding ended here
                $(`.tabs-track:eq(${currentIndex})`).show();
                $(`.tabs-track:eq(${currentIndex-2})`).hide();
                $(`.tabs-track:eq(${currentIndex+2})`).hide();
            }
            
            //tabs button coding ended here

            //tabs section coding start here
            $(`.tabs-track:eq(${currentIndex})`).show();
            $(`.tabs-track:eq(${currentIndex-1})`).hide();
            $(`.tabs-track:eq(${currentIndex+1})`).hide();
            //tabs section coding ended here
        });

        
        
    });
}

function expandTabs(){
    var index = 0;
    $(document).ready(function(){
        $(`.introduction-text`).hide();
        $(".drop-down-btn").click(function(){
            index = parseInt($(this).attr("id"));
            $(`.introduction-text:eq(${index})`).toggleClass("active-text");
            $(`.introduction-text:eq(${index-1})`).hide();
            $(`.introduction-text:eq(${index+1})`).hide();

            //set some new class whenever this is presed I think?

        });
    });
}

businessCaseStudies();
expandTabs();
