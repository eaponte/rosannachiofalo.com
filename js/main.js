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

	/***** Contact Form Validation *****/

	const nameField = document.getElementById('nameID');

	const emailField = document.getElementById('emailID');
	const isEmailValid = document.getElementById('isEmailValid');
	const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u);

	const messageField = document.getElementById('messageID');

	const submitBtn = document.getElementById('submitBtn');

	const validateForm = () => {
		emailField.value.match(emailRegex) && nameField.value !== "" && messageField.value !== ""
		? submitBtn.disabled = false : submitBtn.disabled = true;
		// if email address is valid, then checkmark, otherwise X mark
		emailField.value.match(emailRegex) ? isEmailValid.innerHTML = "<span style='color: #5CB85C; font-weight: bold;'>&#10004;</span>" : isEmailValid.innerHTML = "<span style='color: #D9534F; font-weight: bold;'>&#10006;</span>";
	};

	let validatedFields = document.querySelectorAll('.validated-field');

	// check for any input changes including cut or paste actions with listener 'input'
	validatedFields.forEach((item) => {
		item.addEventListener('input', validateForm);
	});

	const messageSent = document.getElementById('messageSent');

	const formSubmitted = () => {
		//alert('Your message has been sent!');
		messageSent.classList.add('show');
		setTimeout(() => {
			document.getElementById('contactForm').reset();
			validateForm();
			messageSent.classList.remove('show');
		}, 5000);
	};

//});
