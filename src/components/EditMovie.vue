<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<h2 class="text-center">Update Movie</h2>
            <form @submit.prevent="updateMovie">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="movie.title" required>
                </div>

                <div class="form-group">
                    <label>Director</label>
                    <input type="text" class="form-control" v-model="movie.director" required>
                </div>

                <div class="form-group">
                    <label>Summary</label>
                    <input type="text" class="form-control" v-model="movie.summary" required>
                </div>

                <div class="form-group">
                    <label>Year</label>
                    <input type="text" class="form-control" v-model="movie.year" required>
                </div>

               <div class="form-group">
                    <label>Rating (from 1 to 5)</label>
                    <input type="number" min="1" max="5" class="form-control" v-model="movie.rating" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
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
	},
	methods: {
		updateMovie(){
			let apiURL = `http://localhost:4000/api/update/${this.$route.params.id}`;

            if (window.confirm("Do you really want to save the changes?")){
                axios.post(apiURL, this.movie).then((res) => {
                console.log(res)
                this.$router.push('/view')
                }).catch(error => {
                console.log(error)
                });
            }
        }
	}
}

</script>