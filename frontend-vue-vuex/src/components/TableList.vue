<template>
  <div>
    <vuetable
      ref="vuetable"
      api-url="http://localhost:8000/api/products/list"
      :http-fetch="myFetch"
      :fields="fields"
      :append-params="moreParams"
      pagination-path=""
      @vuetable:pagination-data="onPaginationData"
      :css="css.table"
    >
      <template slot="actions" scope="props">
        <div class="table-button-container">
          <button
            class="btn btn-warning btn-sm"
            style="width:6em;"
            @click="editRow(props.rowData)"
          >
            <span class="glyphicon glyphicon-pencil"></span>編集</button
          >&nbsp;&nbsp;
          <button
            class="btn btn-danger btn-sm"
            style="width:6em;"
            @click="deleteRow(props.rowData)"
          >
            <span class="glyphicon glyphicon-trash"></span>削除</button
          >&nbsp;&nbsp;
        </div>
      </template>
    </vuetable>

    <vuetable-pagination-bootstrap
      ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    >
    </vuetable-pagination-bootstrap>
  </div>
</template>

<script>
import moment from 'moment';
import axios from 'axios';
import Vuetable from 'vuetable-2';
import FieldDefs from '../components/FieldsDef.js';
import CssForBootstrap4 from '../vuetable/VuetableCssBootstrap4.js';
import VuetablePaginationBootstrap from '../vuetable/VuetablePaginationBootstrap';
export default {
  components: {
    Vuetable,
    VuetablePaginationBootstrap
  },
  data() {
    return {
      fields: FieldDefs,
      // moreParams: { sort: 'created_at', order: 'desc' },
      css: CssForBootstrap4
    };
  },
  methods: {
    myFetch(apiUrl, httpOptions) {
      return axios.get(apiUrl, httpOptions);
    },
    onSearch() {
      this.$nextTick(function() {
        this.$refs.vuetable.refresh();
      });
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    renderPagination(h) {
      return h('div', { class: { 'vuetable-pagination': true } }, [
        h('vuetable-pagination-info', {
          ref: 'paginationInfo',
          props: { css: this.css.paginationInfo }
        }),
        h('vuetable-pagination', {
          ref: 'pagination',
          props: { css: this.css.pagination },
          on: {
            'vuetable-pagination:change-page': this.onChangePage
          }
        })
      ]);
    },
    renderVuetable(h) {
      return h('vuetable', {
        ref: 'vuetable',
        props: {
          apiUrl: this.apiUrl,
          fields: this.fields,
          paginationPath: '',
          perPage: 10,
          multiSort: true,
          sortOrder: this.sortOrder,
          appendParams: this.appendParams,
          detailRowComponent: this.detailRowComponent,
          css: this.css.table
        },
        on: {
          'vuetable:cell-clicked': this.onCellClicked,
          'vuetable:pagination-data': this.onPaginationData
        },
        scopedSlots: this.$vnode.data.scopedSlots
      });
    },
    editRow(data) {
      console.log(data);
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: { container: true }
      },
      [h('filter-bar'), this.renderVuetable(h), this.renderPagination(h)]
    );
  }
};
</script>
