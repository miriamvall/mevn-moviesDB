<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
			<b-jumbotron header="My Movies" lead="App for managing recently watched movies">
				<p>Get started by adding new movies!</p>
				<router-link :to="{name: 'create'}" class="btn btn-success">Add movie</router-link>
			</b-jumbotron>
		</div>
	</div>
</template>

<script>
</script>