<template>
    <div>
        <Header/>
        <section id="heroSection">
            <div class="mainTalk">
                <h3>CENTRALIZED CENSUS BOARD</h3>
                <p>
                    Project Proposal to Census Department of Ondo state, to enhance
                    data acquisition from the public.
                </p>
            </div>
        </section>

        <section id="infoSection">
            <div class="mainContent">
                <h1>Census made easy.</h1>
                <h4>Join millions in getting registered today.</h4>
            </div>
            <div class="action_button">
                <button type="submit" @click="getStarted">Get Started</button>
            </div>
        </section>
        <Footer/>        
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },

    methods: {
        getStarted : function () {
            console.log(this);
            this.$router.push("/register");
        }
    },
}
</script>

<style>
/* Block */
section#heroSection{
    min-height: 385px;
    padding: 50px 40px;
    background-image: url('../assets/hero.webp');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-content: center;
}

section#infoSection{
    padding: 75px 40px;
    margin: 20px 0;
    display: flex;
    position: relative;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    text-align: center;
    background-image: url('../assets/hero2.svg');
    /* background-position: 50% 50%; */
    background-size: cover;
    background-repeat: no-repeat;
}

/* Element */
div.mainTalk {
    height: auto;
    width: 100%;
    padding: 30px 0;
    position: relative;
    margin: auto 0px;
}

div.mainContent,
div.action_button{
    width: 100%;
    height: auto;
    position: relative;
}

div.action_button{
    margin: 25px 0px;
    height: 40px;
    width: 100%;
    display: block;
    position: relative;
    text-align: center;
}

div.action_button button {
    height: 100%;
    width: auto;
    padding: 0px 15px;
    outline: none;
    border: none;
    background-color: #1e1edf;
    color: #ffffff;
    cursor: pointer;
    transition: all 300ms;
}


/* Modifiers */
div.mainTalk * {
    color: #ffffff;
    margin: 0px;
}

div.mainTalk h3 {    
    font-weight: 500;
    font-size: 32px;
    font-stretch: expanded;
}

div.mainTalk p {    
    padding: 7.5px 0;
    font-weight: lighter;
    font-size: 22px;
    opacity: 0.5;
}

div.mainContent h1 {
    font-weight: 400;
    font-size: 38px;
    padding: 15px 0;
    margin: 0;
    color: #1e1edf;
}

div.mainContent h4 {    
    font-weight: normal;
    font-size: 22px;
    padding: 0;
    margin: 0;
    color: #444444;
}

div.action_button button:hover {
    font-size: 16px;
    color: #121212;
    background-color: transparent;
    border: 0.5px solid #1e1edf;
}

</style>