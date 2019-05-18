<template>
    <div>
        <Header/>
        <Forms/>
        <Footer/> 
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Forms from '@/components/Forms.vue';
import Footer from '@/components/Footer.vue';


export default {
    components: {
        Header,
        Forms,
        Footer
    }
}
</script>

<style scoped>

@media screen and (max-width: 767px) {
    div#footer {
        margin-top: 0px;
    }
}

</style>