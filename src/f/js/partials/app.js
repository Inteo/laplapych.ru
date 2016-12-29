$(document).ready(function() {
  $(".modal-inline").fancybox({
    type: 'inline',
    fixed: true,
    width: '100%',
    helpers : {
      overlay : {
        css : {
            'background' : 'rgba(0, 0, 0, 0.64)'
        }
      }
    }
  });
});