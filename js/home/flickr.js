var flickr_added = false;

$(document).ready(function() {
	
	get_flickr();
	
	$(window).resize(function() {
		get_flickr();
	})
	
});

function get_flickr() {
	console.log(flickr_added);
	
	if ( $(document).width() >= 1024 ) {
		if ( flickr_added == false) {
			flickr_added = true;
			$('#flickr').append('<div class="col" id="flickr_content"><h2>Photography</h2><p class="wrap">This is intended to be a sream of photos from my Flickr account. Due to unfortunate circumstances I am currently unable to generate an API key.  This will be added as soon as I am able to generate one in the near future. </p></div>');
		}
	}
}