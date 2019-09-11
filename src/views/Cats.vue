<template>
  <div>
    <PetsTable
    species='cats'
    :pets='cats'
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetsTable from '@/components/PetsTable.vue'

export default {
  data () {
    return {}
  },
  components: {
    PetsTable
  },
  computed: {
    ...mapState(
      ['cats']
    )
  }
}
</script>
