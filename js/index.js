window.onload = function(){

    var headingsList = ['Computer Science', 'Data Science', 'NLP', 'Machine Learning'];

    textRotate(0);
    function textRotate(i) {
        if (headingsList.length > i) {
            setTimeout(function() {
                document.getElementById("sequence").innerHTML = headingsList[i];
                textRotate(++i);
            }, 2000); 

        } else if (headingsList.length == i) { 
            textRotate(0);
        }
    }
 };

 $(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
        closeEffect	: 'none'
        
    });
    $(".fancybox2").fancybox({
		openEffect	: 'none',
        closeEffect	: 'none'
        
    });
    $(".fancybox3").fancybox({
		openEffect	: 'none',
        closeEffect	: 'none'
        
    });
    $(".fancybox4").fancybox({
		openEffect	: 'none',
        closeEffect	: 'none'
        
    });

    
 });
