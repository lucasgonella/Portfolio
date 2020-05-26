$(function() {
    $("[data-toggle='tooltip']").tooltip();
  });
  
  toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "5000000",
      "hideDuration": "1000000",
      "timeOut": "100000",
      "extendedTimeOut": "50000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
  };
  