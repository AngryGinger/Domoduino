$(document).ready(function()
{
  	$(".portail_manu").click(function()
  	{
		// Commande Manuelle du portail //
		$.post("?cmd=portail_manu");
		toastr.options = 
			{
  				"closeButton": false,
  				"debug": false,
  				"positionClass": "toast-top-full-width",
  				"onclick": null,
  				"showDuration": "300",
  				"hideDuration": "1000",
  				"timeOut": "5000",
  				"extendedTimeOut": "1000",
  				"showEasing": "swing",
  				"hideEasing": "linear",
  				"showMethod": "fadeIn",
  				"hideMethod": "fadeOut"
			};

		toastr.success('Commande envoyée ! :-)');
		
  	});

  	$(".portail_auto").click(function()
  	{
  		// Commande Automatique du portail //
  		$.post("?cmd=portail_auto");
  		
  		toastr.options = 
			{
  				"closeButton": false,
  				"debug": false,
  				"positionClass": "toast-top-full-width",
  				"onclick": null,
  				"showDuration": "300",
  				"hideDuration": "1000",
  				"timeOut": "5000",
  				"extendedTimeOut": "1000",
  				"showEasing": "swing",
  				"hideEasing": "linear",
  				"showMethod": "fadeIn",
  				"hideMethod": "fadeOut"
			};

		toastr.success('Commande envoyée ! :-)');

		toastr.info('Le portail se refermera dans 3 min !');
  	});

});