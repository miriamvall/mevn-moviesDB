<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<h2 class="text-center">Create Movie</h2>
			<form @submit.prevent="createNewMovie">
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
                    <button class="btn btn-primary btn-block">Create</button>
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
			movie: {
				title: '',
				director: '',
				summary: '',
				year: '',
				rating: ''
			}
		}
	},
	methods: {
		createNewMovie(){
			let apiURL = 'http://localhost:4000/api/createMovie';

			axios.post(apiURL, this.movie).then(() => {
				this.$router.push('/view');
				this.movie = {
				title: "",
				director: "",
				summary: "",
				year: "",
				rating: ""
				}
			}).catch(err => {
				console.log(err)
			});
		}
	}
}

</script>