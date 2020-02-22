<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading"/>

    <div v-else class="row">
      <Bill :rates="currency.rates" />
      <Currency :rates="currency.rates" :date="currency.date"/>
    </div>
  </div>
</template>
<script>
  import Bill from '@/components/Bill/Bill';
  import Currency from '@/components/Currency/Currency';
  import Loader from '@/components/Loader/Loader'

  export default {
    name: 'home',
    components: {
      Bill,
      Currency,
      Loader
    },
    data: () => ({
      loading: true,
      currency: null
    }),
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    },
    methods: {
      async refresh() {
        this.loading = true;
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading = false;
      }
    }
  }
</script>

