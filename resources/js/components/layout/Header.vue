<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'home'}">Home</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                        <li>
                            <router-link :to="{name:'listproduct'}" class="nav-link">Product</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'listtypeproduct'}" class="nav-link">Typeproduct</router-link>
                        </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>
