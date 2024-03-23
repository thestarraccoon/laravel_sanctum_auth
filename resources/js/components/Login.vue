<script>
export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.password,
                })
                .then(result => {
                    localStorage.setItem('x_xsrf_token', result.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({ name: 'user.personal'});
                })
                .catch( err => {
                    console.log(err.response);
                })
            });

        }
    },
}
</script>

<template>
    <input v-model="email" type="email" placeholder="email"  class="w-25 form-control mb-2">
    <input v-model="password" type="password" placeholder="password"  class="w-25 form-control mb-2">
    <input type="submit" @click.prevent="login" value="Login" class="btn btn-primary">
</template>

<style scoped>

</style>
