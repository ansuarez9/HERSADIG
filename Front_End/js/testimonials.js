$(document).ready(function(){
	var div = $('.testimonial_quotes').hide(),
    	news = ['"I am able to handle stressful encounters at work with more grace and stillness."','"I feel refilled – like I have a stronger core."', '"I feel more at ease in my personal life."', '"I’m clearly watching what I’m eating, I’m talking calmly."','"I’m eating better – I want to take better care of my body."','"I’m getting more and better sleep."','"I’m eating healthier and exercising regularly."','"I’ve cut out alcohol."','"I have more focus on my self- care and the need for balance in my life."','"I look forward to this time."','"It has become a bright point of my week."','"I remember the experience, the peace, I felt during my session."','"I revisit it during stressful times with my patients and with my children."','"I am able to handle stressful encounters at work with more grace and stillness."','"The afternoon after my first treatment, I had a hugely productive conversation with my husband – a breakthrough."','"I changed my diet and lost 13 pounds."','"I’m sleeping better, I’m happier, I’ve decreased my stress."','"This should be required for returning back from Iraq."'],
    	count = 0;

	function changeNews() {
    	div.fadeIn().delay(3000).fadeOut(function() {
        	changeNews();
	    }).text(news[count++])
    	if (count == news.length) {
        	count = 0;
 	   }
	}

	changeNews();
});
