<template>
    <div class="category-bar">
        <strong class="category">웰컴 미션</strong>
    </div>
</template>

<script>
export default {
    computed: {
        category(category) {
            return category === "welcome" ? "웰컴 미션" : "데일리 미션"
        }
    }
}
</script>

<style>
.category-bar {
    margin-left: 2.2rem;
    margin-top: 1.8rem;
    margin-bottom: 0.2rem;
}
.category {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #FFFFFF;
}
</style>