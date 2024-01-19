<template>
  <div
    style="
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 100%;
      position: relative;
      padding: 1%;
      margin: 1%;
    "
  >
    <h3 style="position: absolute; left: 1%">Tenants</h3>
    <div style="position: absolute; right: 5%">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        @click="updateVariable(true)"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#877775"
          fill-opacity="0.25"
        />
        <path
          d="M12 7V16V7ZM17 11.5H7H17Z"
          fill="#877775"
          fill-opacity="0.25"
        />
        <path
          d="M12 7V16M17 11.5H7"
          stroke="#877775"
          stroke-width="1.2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
      &nbsp; &nbsp; &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 20C9.76667 20 7.875 19.225 6.325 17.675C4.775 16.125 4 14.2333 4 12C4 9.76667 4.775 7.875 6.325 6.325C7.875 4.775 9.76667 4 12 4C13.15 4 14.25 4.23733 15.3 4.712C16.35 5.18667 17.25 5.866 18 6.75V4H20V11H13V9H17.2C16.6667 8.06667 15.9377 7.33333 15.013 6.8C14.0883 6.26667 13.084 6 12 6C10.3333 6 8.91667 6.58333 7.75 7.75C6.58333 8.91667 6 10.3333 6 12C6 13.6667 6.58333 15.0833 7.75 16.25C8.91667 17.4167 10.3333 18 12 18C13.2833 18 14.4417 17.6333 15.475 16.9C16.5083 16.1667 17.2333 15.2 17.65 14H19.75C19.2833 15.7667 18.3333 17.2083 16.9 18.325C15.4667 19.4417 13.8333 20 12 20Z"
          fill="#877775"
        />
      </svg>
      &nbsp; &nbsp; &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.5505 15.4468 11.0507 15.9999 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"
          fill="#877775"
        />
      </svg>
    </div>
  </div>
  <div
    style="
      overflow-x: hidden;
      margin: 1%;
      padding: 1%;
      width: auto;
      background: #fff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: auto;
      overflow-x: hidden;
    "
  >
    <NewReg
      v-if="isVisible"
      :childVariable="parentVariable"
      @updateVariable="updateVariable"
      style="
        position: absolute;
        top: 3%;
        right: 25%;
        left: 25%;
        background: white;
      "
      @send-object-to-parent="handleObjectFromChild"
    />
    <el-table
      :data="tableData"
      :style="{ fontSize: '13px', width: auto, textAlign: 'left' }"
      v-loading="loading"
      :default-sort="{ prop: 'name', order: 'ascending' }"
      height="calc(100%)"
    >
      <el-table-column prop="selection" type="selection" width="50" />
      <el-table-column prop="curentTime" label="Created Time" width="200" />
      <el-table-column prop="title" label="Title" width="250" />
      <el-table-column prop="demo" label="Tenant Profile" width="250" />
      <el-table-column prop="email" label="Email" width="150" />
      <el-table-column prop="country" label="Country" width="150" />
      <el-table-column prop="city" label="City" width="100" />
      <el-table-column width="100" :label-class-name="'custom-label'">
        <template #default="{ row }">
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 5px;
              justify-content: center;
              margin-right: 40px;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.243 17.997H3V13.754L14.435 2.319C14.6225 2.13153 14.8768 2.02621 15.142 2.02621C15.4072 2.02621 15.6615 2.13153 15.849 2.319L18.678 5.147C18.771 5.23987 18.8447 5.35016 18.8951 5.47156C18.9454 5.59296 18.9713 5.72309 18.9713 5.8545C18.9713 5.98592 18.9454 6.11604 18.8951 6.23744C18.8447 6.35884 18.771 6.46913 18.678 6.562L7.243 17.997ZM3 19.997H21V21.997H3V19.997Z"
                fill="#877775"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                fill="#877775"
              />
            </svg>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import { ElTable } from "element-plus";
import NewReg from "./NewReg.vue";
// import { useDashboardStore } from "@/store/modules/dashboard";
// import router from "@/router";
// import type { DashboardItem} from "@/types/dashboard";

/*global Nullable*/
// const { t } = useI18n();
// const dashboardStore = useDashboardStore();
const pageSize = 20;
// const dashboards = ref<DashboardItem[]>([]);
const searchText = ref<string>("");
const loading = ref<boolean>(false);
const currentPage = ref<number>(1);
const total = ref<number>(0);
// setList();
// async function setList() {
//   await dashboardStore.setDashboards();
// }

// function handleEdit(row: DashboardItem) {
//   dashboardStore.setMode(true);
//   dashboardStore.setEntity(row.entity);
//   dashboardStore.setLayer(row.layer);
//   dashboardStore.setCurrentDashboard(row);
//   router.push(`/usermanagement/users`);
// }

// function handleView(row: DashboardItem) {
//   router.push(`/usermanagement/users${row.id}`);
// }

// async function handleDelete(row: DashboardItem) {
//   dashboardStore.setCurrentDashboard(row);
//   loading.value = true;
//   await dashboardStore.deleteDashboard();
//   dashboards.value = dashboardStore.dashboards;
//   loading.value = false;
//   sessionStorage.setItem("dashboards", JSON.stringify(dashboards.value));
//   sessionStorage.removeItem(`${row.layer}_${row.entity}_${row.name}`);
// }

function changePage(pageIndex: number) {
  currentPage.value = pageIndex;
}
</script>
<script lang="ts">
export default {
  data() {
    return {
      isVisible: false,
      tableData: [],
    };
  },
  methods: {
    updateVariable(newValue: Boolean) {
      this.isVisible = newValue;
    },
    handleObjectFromChild(objectFromChild: any) {
      this.tableData = objectFromChild;
    },
  },
};
</script>
<style>
.el-table .el-table__row {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
