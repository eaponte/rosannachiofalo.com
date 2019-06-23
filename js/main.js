//$(document).ready(function(){

	/***** Smooth Scrolling and ScrollSpy for Top Nav Clicks *****/

	// Smooth Scroll

		$("a[href^='#']").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;

				// The optional number (800) milliseconds to scroll to the specified area
				$('html, body').animate({
						scrollTop: $(hash).offset().top - 75
					}, 800, function(){
					// Add hash (#) to URL when done scrolling (default click behavior)
					//window.location.hash = hash;
				});
			} // End if
		});

	// ScrollSpy

		// Cache Selectors
		var lastId,
			topMenu = $(".nav-menu"),
			topMenuHeight = 80, // Height of fixed top nav + 5 for buffer
			menuItems = topMenu.find("a"), // All nav list items
			scrollItems = menuItems.map(function() { // Anchors IDs corresponding to menu items
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});

		// Bind to Scroll
		$(window).scroll(function() {
			// Get container scroll position
			var fromTop = $(this).scrollTop() + topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function() {
				if ($(this).offset().top < fromTop) { return this; }
			});

			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
			if (lastId !== id) {
				lastId = id;
				// Add or Remove active class
				menuItems
					.parent().removeClass("active")
					.end().filter("[href='#" + id + "']").parent().addClass("active");
			}
		});

	/***** Side Nav Bar *****/

	// Open Side Nav

		$(".open-nav").click(function() {
			$("#nav-menu-container").animate({right: "0"});
			$(".mobile-menu-overlay").fadeIn(600);
		});

	// Close Side Nav

		function closeNav() {
			$("#nav-menu-container").animate({right: "-200px"});
			$(".mobile-menu-overlay").fadeOut(600);
		}

		$(".close-nav, .mobile-menu-overlay").click(function() {
			closeNav();
		});

		$(".nav-menu li a").click(function() {
			if($(window).width() < 992) {
				closeNav();
			}
		});
	
	/***** Modal *****/

	// Open modal functions

		function openPopupModal() {
			$(".popup-modal").fadeIn(300);
			$("body").addClass("overflow-hidden");
		}

		$(".modal-btn").click(function(){
			openPopupModal();
			$(".popup-modal-content").load(
				"./modal-content/modal-content.html #" + this.id + "-modal"
			);
		});

	// Close modal
		
		$(".back-btn").click(function(){
			$(".popup-modal").fadeOut(300, function(){
				$(".popup-modal-content").html("");
			});
			$("body").removeClass("overflow-hidden");
		});

	/***** Pricing Calculator *****/

	function calcChange(formID) {
		$("#" + formID + "-result").
			html(
				($("#" + formID + "-genre").find(":selected").val() * $("#" + formID + "-word-count").find(":selected").val()).toFixed(2)
			);
		if($("#dev-calc-result").text() > 0 && $("#copyedit-calc-result").text() > 0) {
			$("#dev-copy-total").html(
				"Developmental + Copyediting = " + "$" + 
				Math.round(((parseInt($("#dev-calc-result").text()) + parseInt($("#copyedit-calc-result").text())) *.85)).toFixed(2) + 
				"<br />" +
				"(This represents a 15% discount)"
			);
		} else {
			$("#dev-copy-total").html("");
		}
	}

//});
