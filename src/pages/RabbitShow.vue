<template>
    <h1>{{ rabbit.name }}</h1>
    <p>code: {{ rabbit.code }}</p>
    <p>weight: {{ rabbit.weight }}</p>
    <img :src="'http://localhost:8000/storage/' + rabbit.main_picture" alt="">
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export default {
    name: 'RabbitShow',
    data() {
        return {
            rabbit: {}
        }
    },
    mounted() {

        const rabbitId = this.$route.params.id;

        axios.get(API_URL + '/rabbit-show/' + rabbitId)
             .then(res => this.rabbit = res.data.rabbit)
             .catch(err => console.error(err));
    }
}
</script>