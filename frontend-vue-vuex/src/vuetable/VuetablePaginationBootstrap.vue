<template>
    <ul class="pagination">
      <li :class="{ disabled: isOnFirstPage }" class="page-item">
        <a
          href=""
          @click.prevent="loadPage('prev')"
          class="page-link"
          style="cursor: pointer;"
        >
          <span>&laquo;</span>
        </a>
      </li>

      <template v-if="notEnoughPages">
        <li
          v-for="(value, key) in totalPage"
          :key="key"
          :class="{ active: isCurrentPage(value) }"
          class="page-item"
        >
          <a
            @click.prevent="loadPage(value)"
            v-html="value"
            :class="{ active: isCurrentPage(value) }"
            class="page-link"
            style="cursor: pointer;"
          ></a>
        </li>
      </template>
      <template v-else>
        <li
          v-for="(value, key) in windowSize"
          :key="key"
          :class="{ active: isCurrentPage(windowStart + value - 1) }"
        >
          <a
            @click.prevent="loadPage(windowStart + value - 1)"
            v-html="windowStart + value - 1"
            :class="{ active: isCurrentPage(windowStart + value - 1) }"
            class="page-link"
            style="cursor: pointer;"
          ></a>
        </li>
      </template>

      <li :class="{ disabled: isOnLastPage }">
        <a
          href=""
          @click.prevent="loadPage('next')"
          class="page-link"
          style="cursor: pointer;"
        >
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
</template>

<script>
import VuetablePaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin';
export default {
  mixins: [VuetablePaginationMixin]
};
</script>

<style>
ul.pagination {
  z-index: 1 !important;
}
ul li  {
  z-index: 2 !important;
}
ul li.active {
  position: relative !important;
  z-index: 3 !important;
  color: #fff !important;
  cursor: pointer;
  background-color: #337ab7 !important;
  border-color: #337ab7 !important;
}
ul li.active a.page-link {
  position: relative !important;
  z-index: 3 !important;
  color: #fff !important;
  cursor: pointer;
  background-color: #337ab7 !important;
  border-color: #337ab7 !important;
}
</style>
