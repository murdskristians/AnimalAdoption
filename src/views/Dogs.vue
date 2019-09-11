<template>
  <div>
    <PetsTable
    species='dogs'
    :pets='dogs'
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
      ['dogs']
    )
  }
}
</script>
