<template>
  <div class="container">
    <header class="pt-3 pb-2">
      <h3 class="">売掛一覧</h3>
    </header>
    <main>
      <ProductSearchModal ref="productSearchModal" />
      <TableList ref="list" />
    </main>
  </div>
</template>

<script>
import moment from 'moment';
import { api } from '../services/api.service';
import ProductSearchModal from '@/components/ProductSearchModal';
import TableList from '@/components/TableList';
export default {
  name: 'DisasterStockSearch',
  components: {
    ProductSearchModal,
    TableList
  },
  props: {
    savingStockKbn: {
      type: Object,
      required: false,
      default: () => {
        return {
          id: '',
          kbn: '',
          cd: '',
          value: '',
          cdAndValue: ''
        };
      }
    },
    searchCondition: {
      type: Object,
      required: false,
      default: () => {
        return {
          productCd: '',
          savingStockKbn: '',
          stockStartDate: '',
          stockEndDate: ''
        };
      }
    },
    disasterStock: {
      id: '',
      productCd: '',
      productName: '',
      savingStockKbn: '',
      savingStockCdValue: '',
      prefCd: '',
      prefName: '',
      branchCd: '',
      branchName: '',
      quantity: '',
      stockStartDate: '',
      stockEndDate: '',
      reserveBranchCd: '',
      reserveBranchName: '',
      stockConditionKbn: '',
      stockConditionCdValue: ''
    }
  },
  data() {
    return {
      product: {
        id: '',
        cd: '',
        name: '',
        volume: '',
        manufactureCd: '',
        manufactureName: ''
      },
      message: null,
      disasterStocks: [],
      searchResultsJson: [],
      savingStockKbns: [],
      savingStockKbnOptions: []
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  filters: {
    formattedDate: function(date) {
      return moment(date).format('YYYY/MM/DD'); // eslint-disable-line
    }
  },
  methods: {
    openProductSearchModal: function() {
      this.$refs.productSearchModal.openModal();
    },
    async onSearchDisasterStock() {
      const savingStockKbn = this.searchCondition.savingStockKbn;
      const stockStartDate = this.searchCondition.stockStartDate;
      const stockEndDate = this.searchCondition.stockEndDate;
      this.searchCondition = {};
      this.searchCondition.productCd =
        this.product.cd == '' ? null : this.product.cd;
      this.searchCondition.savingStockKbn =
        savingStockKbn == '' ? null : savingStockKbn;
      this.searchCondition.stockStartDate =
        stockStartDate == '' ? null : stockStartDate;
      this.searchCondition.stockEndDate =
        stockEndDate == '' ? null : stockEndDate;

      this.disasterStocks = [];
      this.searchResultsJson = await api.getDisasterStocksBySearchConditions(
        this.searchCondition
      );

      for (const [, v] of this.searchResultsJson.entries()) {
        let product = await api.getProductByCd(v['productCd']);
        let savingStockKbn = await api.getSavingStockKbnByCd(
          v['savingStockKbn']
        );
        let pref = await api.getPrefByCd(v['prefCd']);
        let branch = await api.getBranchByCd(v['branchCd']);
        let reserveBranch = await api.getBranchByCd(v['reserveBranchCd']);
        let stockConditionKbn = await api.getStockConditionKbnByCd(
          v['stockConditionKbn']
        );
        this.disasterStocks.push({
          id: v['id'],
          productCd: product.cd,
          productName: product.name,
          savingStockKbn: savingStockKbn.cd,
          savingStockCdValue: savingStockKbn.cd + ': ' + savingStockKbn.value,
          prefCd: pref.cd,
          prefName: pref.name,
          branchCd: branch.cd,
          branchName: branch.name,
          quantity: v['quantity'],
          stockStartDate: v['stockStartDate'],
          stockEndDate: v['stockEndDate'],
          reserveBranchCd: reserveBranch.cd,
          reserveBranchName: reserveBranch.name + '支店',
          stockConditionKbn: stockConditionKbn.cd,
          stockConditionCdValue:
            stockConditionKbn.cd + ': ' + stockConditionKbn.value
        });
      }
    },
    async genSavingStockOptions() {
      this.savingStockKbnOptions = [];
      this.savingStockKbns = await api.getSavingStockKbn();

      for (const [, v] of this.savingStockKbns.entries()) {
        this.savingStockKbnOptions.push({
          id: v['id'],
          cdAndValue: `${v['cd']}: ${v['value']}`
        });
      }
    }
  },
  async mounted() {
    this.message = this.$route.params.message;

    if (!this.currentUser) {
      this.$router.push('/login');
    }

    this.genSavingStockOptions();
  }
};
</script>
