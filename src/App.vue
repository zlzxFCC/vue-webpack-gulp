<template>
<div class="h100">
	<router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './style/common';
.h100 {
    height: 100%;
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
</style>
