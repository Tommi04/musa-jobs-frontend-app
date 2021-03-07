<template>
    <main id="inputs">
        <div class="relative container mx-auto mt-10">

        <div class="relative w-1/3 mx-auto">
            <mj-input layout="light" id="first-name" placeholder="Nome" type="text"></mj-input>
        </div>

        <div class="relative w-1/3 mx-auto">
            <mj-input layout="dark"></mj-input>
        </div>
        
        <div class="relative w-1/3 mx-auto">
            <mj-input layout="light" id="password" placeholder="Password" type="password"></mj-input>
        </div>

        </div>
    </main>
</template>

<script>
import MjInput from '@/components/MJInput'
export default {
    name: 'Inputs',
    components:{
        MjInput
    },
}
</script>

<style>

</style>