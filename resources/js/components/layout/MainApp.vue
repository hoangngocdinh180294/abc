<template>
    <div >
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    export default {
        components: {Header}
    }
</script>
