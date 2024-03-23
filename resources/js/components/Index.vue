<script>
export default {
    name: "Index",

    data() {
        return {
            token: null,
        }
    },

    mounted() {
        this.getToken();
    },

    updated() {
        this.getToken();
    },

    methods: {
        logout(){
            axios.post('/logout')
                .then( res => {
                    localStorage.removeItem('x_xsrf_token');
                    this.$router.push({ name: 'user.login'});
                })
        },

        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        }
    }
}
</script>

<template>
    <div>
        <router-link :to="{name: 'get.index'}" class="p-1">Get</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}" class="p-1">Login</router-link>
        <router-link v-if="!token" :to="{name: 'user.register'}" class="p-1">Register</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}" class="p-1">Personal</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<style scoped>

</style>
