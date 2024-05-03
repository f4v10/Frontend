<script>
import {Promo} from "@/tracking/model/promos/promo.entity.js";
import {PromosApiService} from "@/tracking/services/promos/promos-api.service.js";
export default {
  name: "promos.component",
  title: 'Promos',
  data(){
    return {
      promos: [],
      promo: null,
      selectedPromos: null,
      filters: {},
      submitted: false,
      promoService: null
    }
  },
  methods: {
    initialize() {
      console.log('created');
      this.promoService = new PromosApiService();
      this.promoService.getAll()
          .then(response => {
            this.promos = response.data;
            this.promos = this.promos.map(
                (promo) =>{
                  return Promo.toDisplayablePromo(promo)
                }
            );
            console.log(response.data);
          });
    }

  }
}
</script>

<template>

</template>

<style scoped>

</style>