<template>
    <div id="footer">
        
        <hr/>
        <p>&copy; 2019 - Made with <span id='coloredHeart'>&#10084;</span> by <a href="https://github.com/koofng">KoofNG</a></p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Block */
#footer {
    /* background-color: #5f5e5e; */
    background-color: #3b4045;
    padding: 30px 40px;
    margin: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

/* Element */

hr {
    width: 100%;
    position: relative;
    display: block;
    border: 1px solid #afacac;
    margin: 0px;
    padding: 0px;
}
p {
    color: #fffeee;
    font-weight: lighter;
}
p a {
    text-decoration: none;
    color: inherit;
}
/* Modifier */
#coloredHeart {
    color: #ff7437;
}
    
</style>