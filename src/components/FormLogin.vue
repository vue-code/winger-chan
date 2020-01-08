<template>
    <v-form class="main">
        <v-text-field
        v-model="username"
        label="Username"
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        ></v-text-field>
        <v-btn @click="submit" style="margin-left: 38px; margin-top: 10px; color: red">Login</v-btn>
    </v-form>
 
</template>

<style>
.main{
    width:161px;
    height:200px;
    margin:100px auto;
}
</style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
    data:() => ({
        username: "",
        password: ""
    }),
    methods: {
        submit() {
            alert("Successful authorization");
            let submitData = new FormData();
            submitData.set("username", "winger");
            submitData.set("password", "maxwit");
            axios.post('/login', submitData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            .then(res => {
                console.log("aa");
                console.log(res);
            })
            .catch(e => {
                console.log("ee");
                console.log(e);
            })
        }
    },
})
</script>
