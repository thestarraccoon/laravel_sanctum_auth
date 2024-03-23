<script>
export default {
    name: "Register",

    data() {
        return {
            name: '',
            password: '',
            email: '',
            password_confirmation: '',
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                        name: this.name,
                    })
                    .then(result => {
                        localStorage.setItem('x_xsrf_token', result.config.headers['X-XSRF-TOKEN']);
                        this.$router.push({ name: 'user.personal'});
                        console.log(result);
                    })
                    .catch( err => {
                        console.log(err.response);
                    })
            });
        }
    }
}
</script>

<template>
    <input v-model="name" type="text" placeholder="name"  class="w-25 form-control mb-2">
    <input v-model="email" type="email" placeholder="email"  class="w-25 form-control mb-2">
    <input v-model="password" type="password" placeholder="password"  class="w-25 form-control mb-2">
    <input v-model="password_confirmation" type="password" placeholder="password_confirmation"  class="w-25 form-control mb-2">
    <input type="submit" @click.prevent="register" value="Register" class="btn btn-primary">
</template>

<style scoped>

</style>
