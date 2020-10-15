<template>
  <ul class="side-menu">
    <li><a href="#">ダッシュボード</a></li>
    <li><a href="#">推移グラフ</a></li>
    <li><a href="#">結果レポート</a></li>
    <li><a href="#">設定</a></li>
    <li><a href="#">問い合わせ</a></li>
  </ul>
</template>
<script>
export default {
  name: 'Sidebar'
};
</script>
<style scoped lang="scss">
.side-menu {
  top: 74px;
  position: fixed;
  width: 200px;
  height: 100vmax;
  float: left;
  background-color: #3373d3;
  margin: 0;
  padding: 15px 0 0 0;

  & li a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  & li {
    padding: 25px 0 25px 35px;
    list-style: none;
  }
  & li:hover {
    background-color: #6ea3e9cb;
  }
}
</style>
