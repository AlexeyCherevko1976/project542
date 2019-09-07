(function($){
  jQuery.fn.imageSlider = function(options){
    //options = $.extend([2, 4, 6, 8], options);

    var make = function(){
      // здесь переменная this будет содержать отдельный
      // DOM-элемент, к которому и нужно будет применить
      // воздействия плагина
      var n=0;
      $(this).css("background-color",options[n])
      //n=n+1;//if(n>options.length){n=0;}
      .mousedown( function(){
      	n++; if(n>(options.length-1)){n=0;}
        $(this).css("background-color",options[n]);
      })
  /*    .mouseup( function(){
        $(this).css("background-color",options[n]);
      });*/
    };

    return this.each(make); 
  };
})(jQuery);

$('div.auto').imageSlider(['green','red', 'fuchsia', 'purple', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal']);
/*['https://leader.pubs.asha.org/data/Journals/ASHANL/934378/NIB1_web.png', 
'https://www.prescriber.co.uk/wp-content/uploads/sites/23/2018/05/Chaplin-cover.jpg', 
'https://leader.pubs.asha.org/data/Journals/ASHANL/934378/NIB1_web.png']);
*/