<template>

    <div id="hero" class="flex flex-col h-screen bg-red-800">

        <div class="text-center">
            <h1>Website Title</h1>
            <p>This is the website Baseline</p>
        </div>

    </div>


</template>

<script setup>

</script>

<style>

    #hero {

        position: relative;
        overflow: hidden;
        background: linear-gradient(45deg, #0f2027, #203a43, #2c5364, #6a11cb, #b993d6);
        background-size: 400% 400%;
        animation: gradientMove 12s ease infinite alternate;
        color: #fff;

    }

    @keyframes gradientMove {

        0% { background-position: 0% 50%; }
        50% { background-position: 50% 50%; }
        100% { background-position: 100% 50%; }

    }

    #hero .content {

        position: relative;
        z-index: 1;
        text-align: center;
        padding: 12rem 2rem;

    }

</style>