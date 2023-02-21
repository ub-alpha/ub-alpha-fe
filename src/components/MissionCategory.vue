<template>
    <div>
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
.category {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 2.2rem;
    color: #FFFFFF;
    margin: 2.2rem;
}
</style>