var cycleImages = function(){
		//initial fade-in time (in milliseconds)
		var initialFadeIn = 0;
		
		//interval between items (in milliseconds)
		var itemInterval = 10000;
		
		//cross-fade time (in milliseconds)
		var fadeTime = itemInterval/2;
		
		//count number of items
		var numberOfItems = $('.rotating-item').length;

		//set current item
		var currentItem = 0;

		//show first item
		$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

		//loop through the items		
		var infiniteLoop = setInterval(function(){
			$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

			if(currentItem == numberOfItems -1){
				currentItem = 0;
			}else{
				currentItem++;
			}
			$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

		}, itemInterval);	
	};
cycleImages();
	