<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="Description" content="Rosanna Chiofalo | Author of Bella Fortuna, Carissima, Stella Mia">

	<title>Rosanna Chiofalo | Author of Bella Fortuna, Carissima, Stella Mia</title>

	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">

	<!-- Animate CSS for wow.js -->
	<link href="css/animate.css" rel="stylesheet" type="text/css">

	<!-- Custom CSS -->
	<link href="css/main.css" rel="stylesheet" type="text/css">

</head>
<body>

	<div class="container-fluid">
	
		<?php include "header.php"; ?>

		<div class="container main">

			<h1>My Favorite Recipes...</h1>

			<div class="row">
				
				<div class="col-md-4 content-center wow fadeIn" data-wow-duration="4s">

					<img src="images/stella-mia-cover.jpg" width="165" height="239">

				</div> <!-- end col-md-4 -->

				<div class="col-md-6 content-center top-pad-40 link-button1">

					<p><strong>Recipes Featured</strong></p>

					<p>in</p>

					<p><strong><em>Stella Mia</em></strong></p>

					<a href="docs/stella-mia-recipes.pdf">Download The Recipes</a>

				</div> <!-- end col-md-6 -->

				<div class="col-md-2"></div>

			</div> <!-- end row -->
			
			<div class="row top-pad-40">
				
				<div class="col-md-4 content-center wow fadeIn" data-wow-duration="4s">

					<img src="images/carissima-cover.jpg" width="165" height="239">

				</div> <!-- end col-md-4 -->

				<div class="col-md-6 content-center top-pad-40 link-button1">

					<p><strong>Recipes Featured</strong></p>

					<p>in</p>

					<p><strong><em>Carissima</em></strong></p>

					<a href="docs/carissima-recipes.pdf">Download The Recipes</a>

				</div> <!-- end col-md-6 -->

				<div class="col-md-2"></div>

			</div> <!-- end row -->

			<div class="row top-pad-40">
				
				<div class="col-md-4 content-center wow fadeIn" data-wow-duration="4s">

					<img src="images/bella-fortuna-cover.jpg" width="165" height="239">

				</div> <!-- end col-md-4 -->

				<div class="col-md-6 content-center top-pad-40 link-button1">

					<p><strong>Recipes Featured</strong></p>

					<p>in</p>

					<p><strong><em>Bella Fortuna</em></strong></p>

					<a href="docs/bella-fortuna-recipes.pdf">Download The Recipes</a>

				</div> <!-- end col-md-6 -->

				<div class="col-md-2"></div>

			</div> <!-- end row -->

		</div> <!-- end main -->

		<?php include "footer.php"; ?>

	</div> <!-- end container-fluid -->

	<!-- jQuery -->
	<script src="js/jquery.js"></script>

	<!-- Wow.js -->
	<script src="js/wow.js"></script>
	<script>

		new WOW().init();

	</script>

	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>

</body>
</html>