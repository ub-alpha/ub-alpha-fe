<template>
    <div class="category-bar">
        <strong class="category">{{ category }}</strong>
    </div>
</template>

<script>
export default {
    props: [
        "category",
    ],
}
</script>

<style>
.category-bar {
    margin-left: 2.2rem;
    margin-top: 1.8rem;
    margin-bottom: 0.2rem;
}
.category {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: var(--text-white);
}
</style>