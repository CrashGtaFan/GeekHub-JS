$(document).ready(function(){
  $( "#click_me" ).click(function() {
    alert('Thank you!');
  });
  
  $( ".loren_text" ).find( "span" ).css( "color", "blue" );
  $( ".loren_text" ).find( "b" ).css( "font-size", "20px" );
  
  $( "li:odd" ).addClass( "list_item" );
  $( "li:first" ).removeClass( "list_item_odd" );
  
  $( "button#btn_toggle" ).click(function() {
    $( this ).toggleClass( "highlight" ).text('');
  });

  $(".attr_test").click(function(){
    $("#w3s").attr({
        "href" : "https://www.facebook.com/udalovdanil1994",
        "title" : "This is my link of Facebook",
        "target" : "_blank"
    });
    $('#w3s').text('Click this link');
    $( this ).attr('disabled','disabled').text('You pressed this a button');
  });

  $("#render_html_button").click(function(){
    $( ".render_form" ).html( "<h2>Hi Mark!</h2><p><input type='text'><button>OK</button>" );
  });

  $( ".labels" ).click(function() {
    $( ".labels" ).empty();
    $( ".label_text" ).text('').append( document.createTextNode( 'молодец!' ) ).prepend( "Ты сделал это, " );
  });

  $( ".remove_it" ).click(function() {
    $( ".remove_it" ).remove();
  });

  $( "#on_button" ).on( "click", function(event) {
    $( this ).text("Thank you!");
    $( "p" ).parent( ".selected" ).css( "background", "yellow" );
    $( "p" ).blur();
  });

  $(".animate_button").click(function(){
    var div = $(".square");
    div.animate({height: '130px', opacity: '0.4'}, "slow");
    div.animate({width: '200px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
