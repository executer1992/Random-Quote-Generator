               
$('#getquote').on('click', function() {
   
$.ajaxSetup({cache:false});
    
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data){
    $(".message").html(data[0].content + " - " + data[0].title )
}); 
});
