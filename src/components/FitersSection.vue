<template>
    <div class="w-screen bg-primary">
        <div class="lg:px-32 md:px-8 py-6 flex justify-center max-md:flex-wrap md:justify-between ">

            <div class="flex flex-row py-3 space-x-4">
                <div class="flex flex-row space-x-1 md:space-x-2 lg:space-x-4 items-center">
                    <div>
                        <img src="/filter-icon.svg" alt="filter icon">
                    </div>
                    <div class="font-bold -mt-1 text-sm md:text-base">
                        Filter
                    </div>

                    <div>
                        <img src="/dot-icon.svg" alt="4 dots">
                    </div>
                    <div>
                        <img src="/list-icon.svg" alt="list">
                    </div>

                </div>

                <div class="h-8 border border-secondary w-0">

                </div>

                <div class="md:text-base text-xs md:font-semibold font-normal flex items-center">
                    Showing 1-16 of 32 results
                </div>

            </div>
            <div class="flex flex-row space-x-4">
                <div class="flex flex-row lg:space-x-2 space-x-1">
                    <div class="flex items-center text-base font-semibold">
                        Show
                    </div>

                    <div class="flex items-center">
                        <div class="flex items-center justify-center w-8 h-8 bg-white text-secondary">
                            16
                        </div>
                    </div>

                </div>
                <div class="flex flex-row space-x-2">
                    <div class="flex items-center text-base font-semibold">
                        Sort By
                    </div>

                    <div class="flex items-center">
                        <div class="flex items-center px-4 w-28 h-8 bg-white text-secondary">
                            Default
                        </div>
                    </div>

                </div>

            </div>


        </div>

    </div>
</template>
<script setup>
</script>