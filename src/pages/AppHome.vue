<template>
    <h1>Hello from HOME</h1>
    <h2>Go to 
        <router-link :to="{ name: 'about' }">ABOUT</router-link>
    </h2>
    <br><br>
    <h1>Rabbits</h1>
    <ul>
        <li
            v-for="rabbit in rabbits"
            :key="rabbit.id"
        >
            <router-link
                :to="{ 
                    name: 'rabbit-show',
                    params: { id: rabbit.id }
                }"
            >
                {{ rabbit.name }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'AppHome',
    data() {
        return {
            rabbits: [],
            pages: []
        }
    },
    methods: {

        getRabbits() {

            axios.get(API_URL + "/rabbit-index")
                 .then(res => {

                    const data = res.data;
                    
                    this.rabbits = data.rabbits.data;
                    this.pages = data.rabbits.links;
                 })
                 .catch(err => console.error(err));
        }
    },
    mounted() {
        this.getRabbits();
    }
}
</script>