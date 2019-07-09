<template>
  <div>
    <Heatmap :id="'Heatmap'" height="300px" width="100%" />
  </div>
</template>
<script>
import Heatmap from '@/components/Charts/Heatmap'
export default {
  components: {
    Heatmap
  }
}
</script>
