<template>
    <div id="spinner"/>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #spinner{
        width: 100px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    #spinner::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        margin: 8px;
        border-radius: 50%;
        border: 10px solid #fff;
        border-color: var(--complementary-color) transparent var(--complementary-color) transparent;
        animation: spin 1.2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
