<template>
  <div class="list">
    <div class="card">
      <router-link :to="'/detail/' + 1">
        <p class="title">The first blog</p>
      </router-link>
      <p class="date">25.1.2023</p>
    </div>
    <div class="card">
      <router-link :to="'/detail/' + 2">
        <p class="title">The second blog</p>
      </router-link>
      <p class="date">25.1.2023</p>
    </div>
    <div class="card">
      <router-link :to="'/detail/' + 3">
        <p class="title">The third blog</p>
      </router-link>
      <p class="date">25.1.2023</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 20px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  .title {
    color: #0085a1;
    font-size: 26px;
    font-weight: 600;
  }
  .date {
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
    color: #808080;
    margin-top: 20px;
  }
}
</style>
