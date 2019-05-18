<template>
    <div id="header">
        <div class="brandName">
            <h3><a href="#"><span id='color'>Census</span> Management System</a></h3>
        </div>
        <div class="action">
            <h5 @click="getStarted">Get Started</h5>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getStarted : function () {
            this.$router.push('/register');
        }
    },
}
</script>

<style scoped>
/* Block */
#header {
    height: 80px;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    border-bottom: 1px solid #cccccc;
    padding: 0px 40px;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    justify-content: space-between;
}

div.brandName{
    display: block;
    position: relative;
    padding: 0px;
    margin: 0px;
}

div.action {
    height: 100%;
    width: auto;
    position: relative;
    padding: 20px 0px 20px 20px;
    margin: 0px;
    box-sizing: border-box;
}

/* Element */
h3 {
    margin: 0px;
    padding: 0px;
    font-size: 1.5em;
    font-weight: 500;
    cursor: pointer;
    padding: 26px 0px;
}

h3 a {
    text-decoration: none;
    color: inherit;
}

h5 {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
    padding: 12px 10px;
    margin: 0px;
    background-color: #1e1edf;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 0px;
    transition: all 300ms;
    cursor: pointer;
}

/* Modifiers */
span#color{
    color: #1e1edf;
}

h5:hover{
    padding: 9.5px 10px;
    font-size: 15px;
    font-weight: lighter;
}


/* For Responsive */

@media screen and (max-width: 767px) {
    div#header {
        padding: 0 30px;
        height: 60px;
    }
    div.brandName h3 {
        font-size: 1.2em;
        padding: 20px 0px;
    }
    div.action {
        display: none;
        opacity: 0;
        visibility: hidden;
    }

    section#heroSection {
        padding: 30px;
    }
}
</style>