<template>
	<div class="row justify-content-center">
		<div class="col-md-12">
            <b-input-group class="mt-3">
                <b-form-select v-model="order">
                    <b-form-select-option disabled>Choose an order</b-form-select-option>
                    <b-form-select-option value="year">Year</b-form-select-option>
                    <b-form-select-option value="alph">Title</b-form-select-option>
                    <b-form-select-option value="rating">Rating</b-form-select-option>
                </b-form-select>
                <b-form-input placeholder="Filter by director" v-model="search"></b-form-input>
            </b-input-group>
			<table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Summary</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in sorted_movies" :key="movie._id">
                        <td>
                            <router-link :to="{ name: 'details', params: { id: movie._id }}">{{ movie.title }}
                            </router-link>
                        </td>
                        <td>{{ movie.director }}</td>
                        <td>{{ movie.summary }}</td>
                        <td>{{ movie.year }}</td>
                        <td>{{ movie.rating }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: movie._id }}" class="btn btn-info">Edit
                            </router-link>
                            <button @click.prevent="deleteMovie(movie._id)" class="btn btn-warning">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
		</div>
	</div>
</template>

<script>

import axios from "axios";

const sorters = {
    year: (a,b) => a.year - b.year,
    alph: (a,b) => {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if(x < y) {return -1;}
        if(x > y) {return 1;}
        return 0;
    },
    rating: (a,b) => a.rating - b.rating  
};

export default {
	
	data() {
		return {
			movies: [],
            search: '',
            order: 'year'
		}
	},
	created() {
		let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.movies = res.data;
        }).catch(error => {
            console.log(error);
        });
	},
    computed: {
        sorted_movies() {
            let aux = this.movies.slice().sort(sorters[this.order]);
            return aux.filter(movie => {
                return movie.director.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
        },
        filteredMovies(){
            return this.movies.slice().filter(movie => {
                return movie.director.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
        }
    },
	methods: {
		deleteMovie(id) {
			let apiURL = `http://localhost:4000/api/delete/${id}`;
            let indexOfArrayItem = this.movies.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.movies.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
		}
	}
}

</script>