<script setup>
import { ElMessageBox } from 'element-plus'

</script>



<script>
import { ref, watch } from 'vue';
import OldTable from './OldTable.vue';
import Cmp from './Cmp.vue'
import NewReg from './NewReg.vue'
import newCmp from './newCmp.vue'
import TenantForm from './TenantForm.vue';
export default {
  components: {
    Cmp,
    NewReg,
    newCmp,
    TenantForm,
    OldTable,
  },
};

</script>




<template>
  
  <div  style=" width:100%; display:flex; align-items: center; justify-content: center; font-family: Lato, sans-serif; font-size: 16px;" >
    
    <!-- <Cmp/>
    <NewReg/> -->
    <!-- <newCmp/> -->
    <!-- <TenantForm/> -->
    
    
     
</div>
<TenantForm/>
<!-- <OldTable/> -->
</template>


<style scoped>

</style>