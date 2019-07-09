<template>
  <div>
    <handle-edit :dialogshow="dialog" @close="dialog=false" />
  </div>
</template>
<script>
import handleEdit from './edit'
export default {
  components: {
    handleEdit
  },
  data() {
    return {
      dialog: true
    }
  }

}
</script>
