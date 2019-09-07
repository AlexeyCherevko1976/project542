(function($){
  jQuery.fn.imageSlider = function(options){
    //options = $.extend([2, 4, 6, 8], options);

    var make = function(){
      // здесь переменная this будет содержать отдельный
      // DOM-элемент, к которому и нужно будет применить
      // воздействия плагина
      var n=0;
      $(this).css("background-image",'url('+options[n]+')')
      //n=n+1;//if(n>options.length){n=0;}
      .mousedown( function(){
      	n++; if(n>(options.length-1)){n=0;}
        $(this).css("background-image",'url('+options[n]+')');
      })
  /*    .mouseup( function(){
        $(this).css("background-color",options[n]);
      });*/
    };

    return this.each(make); 
  };
})(jQuery);

/*$('div.auto').imageSlider(['green','red', 'fuchsia', 'purple', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal']);
*/
$('div.slides').imageSlider(['https://elblogdeliher.com/wp-content/uploads/2015/07/mar.jpg', 
'https://f1.upet.com/i_veM3xP6C2W_2.jpg', 
'https://99px.ru/sstorage/56/2011/06/image_561906111426104237401.jpg']);
