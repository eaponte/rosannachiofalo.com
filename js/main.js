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


		/***** Form Section *****/

	// Function to check if contact section is in the viewport

	let isElementInViewport = (element) => {
		let rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
   }

   // Function to lazy load form
	let lazyLoadContent = () => {
		let lazyContentElement = document.getElementById("form-content");
		if (isElementInViewport(lazyContentElement)) {
			// Add your logic to load the content for the element here
			$("#form-content").load(
				"./form-content/form-content.html #contactForm"
			);

			setTimeout(() => {
				/***** Contact Form Validation *****/

				let nameField = document.getElementById('nameID');

				let emailField = document.getElementById('emailID');
				let isEmailValid = document.getElementById('isEmailValid');
				let emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u);

				/* let images = [{
					text: "dog",
					img: "./images/form-verification/dog.png"
				},
				{
					text: "duck",
					img: "./images/form-verification/duck.png"
				},
				{
					text: "elephant",
					img: "./images/form-verification/elephant.png"
				},
				{
					text: "rabbit",
					img: "./images/form-verification/rabbit.png"
				}
				];

				let image = images[Math.floor(Math.random() * images.length)];
				document.getElementById("formVerification").innerHTML = '<img src="' + image.img + '" alt="' + image.text + '">';

				const verifyField = document.getElementById('verifyID'); */

				let messageField = document.getElementById('messageID');

				let submitBtn = document.getElementById('submitBtn');

				let validateForm = () => {
					// emailField.value.match(emailRegex) && nameField.value !== "" && messageField.value !== "" && verifyField.value.toLowerCase() === image.text && botCheckBox.checked == false
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
			  }, 700)
		}
   }

	// Attach the lazyLoadContent function to the scroll event
	window.addEventListener("scroll", lazyLoadContent);

	// Call the function initially to load the visible content on page load
	//lazyLoadContent();


	// disable pasting into form fields
	$('body').bind('paste', function(e) {
		e.preventDefault();
	});

//});
