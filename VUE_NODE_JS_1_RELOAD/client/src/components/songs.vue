<template>
<v-container fluid>
    <panel title="Songs"/>
</v-container>
</template>
<script>
import panel from '@/components/panel'
export default {
    created(){
        //Redirect :)
        if(!this.$store.state.isUserLoggedIn) this.$router.push({name: 'HelloWorld'})
    },
    components: {
        panel
    }
}
</script>

<style scoped>

</style>
