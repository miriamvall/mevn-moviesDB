<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
			<h1>{{ movie.title }}</h1>
			<h3>{{ movie.summary }}</h3>
			<b-button variant="info" v-b-toggle.collapse-a>All Technical details</b-button>
           	<b-collapse id="collapse-a" class="mt-2">
	            <ul class = "list-group">
	                <li class = "list-group-item">Director:{{ movie.director }}</li>
	                <li class = "list-group-item">Year: {{ movie.year }}</li>
	                <li class = "list-group-item">Rating: {{ movie.rating }}</li>
	            </ul>
	        </b-collapse>
		</div>
	</div>
</template>

<script>

import axios from "axios";

export default {
	
	data() {
		return {
			movie: {}
		}
	},
	created() {
        let apiURL = `http://localhost:4000/api/edit/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.movie = res.data;
        })
    }
}

</script>