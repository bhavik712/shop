<template>
    <div class="w-screen flex justify-center">
        <div class="my-20">
            <div class="columns-1 md:columns-2 lg:columns-4 gap-4">
                <div v-for="(item,index) in items" :key="index">
                    <div class="relative flex flex-col hover:opacity-25" @mouseover="item.isHovered = true" @mouseleave="item.isHovered=false">
                        <img :src=item.src alt="item1">
                        <div class="bg-primary flex flex-col space-y-2 p-2">
                            <div class="font-bold text-sm">Respaira</div>
                            <div class="font-semibold text-sm">Style Sofa Chair</div>
                            <div class="flex flex-row xl:space-x-6 space-x-2">
                                <div class="font-bold text-sm">Rp. 2.500.500</div>
                                <div class="text-sm line-through decoration-0 text-sm">Rp. 3.500.500</div>

                            </div>
                        </div>
                        <div class="absolute flex m-5 z-20 top-0 right-0 w-12 h-12 rounded-full bg-red-300 justify-center items-center text-white">
                            -30%

                        </div>
                        <div v-if="item.isHovered" class="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                            <div class="flex flex-col w-full space-y-2">
                                <div class="bg-white text-[#B88E2F] mx-20 py-1">
                                    <button class="text-center w-full">Add to Cart</button>
                                </div>
                                <div class="flex flex-row justify-between text-white mx-8 font-bold">
                                    <div>Share</div>
                                    <div>Compare</div>
                                    <div>Like</div>

                                </div>
                               

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
const items = ref([
    {
        src:'/item1.png',
        isHovered:false,
    },
    {
        src:'/item1.png',
        isHovered:false
    },
    {
        src:'/item1.png',
        isHovered:false
    },
    {
        src:'/item1.png',
        isHovered:false
    },
    {
        src:'/item2.png',
        isHovered:false
    },
    {
        src:'/item2.png',
        isHovered:false
    },
    {
        src:'/item2.png',
        isHovered:false
    },
    {
        src:'/item2.png',
        isHovered:false
    },
    {
        src:'/item3.png',
        isHovered:false
    },
    {
        src:'/item3.png',
        isHovered:false
    },
    {
        src:'/item3.png',
        isHovered:false
    },
    {
        src:'/item3.png',
        isHovered:false
    },
    {
        src:'/item4.png',
        isHovered:false
    },
    {
        src:'/item4.png',
        isHovered:false
    },
    {
        src:'/item4.png',
        isHovered:false
    },
    {
        src:'/item4.png',
        isHovered:false
    },
])
</script>