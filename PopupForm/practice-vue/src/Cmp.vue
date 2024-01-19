<script lang="ts" setup>
import { ElMessageBox, emitChangeFn } from "element-plus";
</script>

<script lang="ts">
import { ref, watch } from "vue";

export default {
  data() {
    return {
      storedData: [],
    };
  },
  props: {
    childVariable: Boolean,
  },
  methods: {
    updateParentVariable(value: any) {
      this.$emit("updateVariable", value);
    },
    callParentFunction() {
      this.customFunction();
    },
    handleAdd(){
      const regex = /\d/;
      const test1 = regex.test(ruleName.value);
      const test2 = regex.test(message.value);

      const regex1 = /^\d+$/;
      const test3 = !regex1.test(period.value);
      const test4 = !regex1.test(silencePeriod.value);

      if (
        test1 ||
        test2 ||
        test3 ||
        test4 ||
        ruleName.value === "" ||
        expression.value === "" ||
        period.value === "" ||
        silencePeriod.value === "" ||
        message.value === ""
      ) {
        if (test1 && ruleName.value !== "") {
          valstr.value = true;
        }
        if (test2 && message.value !== "") {
          valstr1.value = true;
        }
        if (test3 && period.value !== "") {
          valper.value = true;
        }
        if (test4 && silencePeriod.value !== "") {
          valper1.value = true;
        }
        if (ruleName.value === "") {
          runIs.value = true;
        }
        if (expression.value === "") {
          exIs.value = true;
        }
        if (period.value === "") {
          perIs.value = true;
        }
        if (silencePeriod.value === "") {
          silIs.value = true;
        }
        if (message.value === "") {
          mesIs.value = true;
        }
        return;
      } else {
        const newData = {
          ruleName: ruleName.value,
          expression: expression.value,
          period: period.value,
          silencePeriod: silencePeriod.value,
          message: message.value,
        };
        
        this.storedData.push(newData);
        console.log('previous data', this.storedData);
        this.$emit('send-object-to-parent', this.storedData);
        ruleName.value = "";
        expression.value = "";
        period.value = "";
        silencePeriod.value = "";
        message.value = "";

        return;
      }
    },
  },
};
const dialogVisible = ref(false);

const ruleName = ref("");
const expression = ref("");
const period = ref("");
const silencePeriod = ref("");
const message = ref("");
const runIs = ref(false);
const exIs = ref(false);
const perIs = ref(false);
const silIs = ref(false);
const mesIs = ref(false);
let valper = ref(false);
let valper1 = ref(false);
let valstr = ref(false);
let valstr1 = ref(false);
dialogVisible.value = true;
</script>

<template>
  <div
    style="
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <el-dialog
      v-model="dialogVisible"
      width="451px"
      hight="72px"
      style="
        padding: 0px;
        margin-top: 1.5%;
        margin-bottom: 1.5%;
        border: black solid 1px;
      "
    >
      <template #header>
        <div
          style="
            height: 72px;
            width: 451px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Inter';
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            background-color: #0e0032;
            color: #f8f8f8;
          "
        >
          <span style="margin-left: 25px">Add alert</span>
          <div style="margin-right: 6px">
            <el-button
              style="
                background-color: #0e0032;
                border: none;
                padding: 0px;
                margin-right: 10px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_69_384)">
                  <path
                    d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM8.244 9.0495H9.4815C9.6885 9.0495 9.8535 8.88 9.8805 8.6745C10.0155 7.6905 10.6905 6.9735 11.8935 6.9735C12.9225 6.9735 13.8645 7.488 13.8645 8.7255C13.8645 9.678 13.3035 10.116 12.417 10.782C11.4075 11.5155 10.608 12.372 10.665 13.7625L10.6695 14.088C10.6711 14.1864 10.7113 14.2803 10.7814 14.3493C10.8516 14.4183 10.9461 14.457 11.0445 14.457H12.261C12.3605 14.457 12.4558 14.4175 12.5262 14.3472C12.5965 14.2768 12.636 14.1815 12.636 14.082V13.9245C12.636 12.8475 13.0455 12.534 14.151 11.6955C15.0645 11.001 16.017 10.23 16.017 8.6115C16.017 6.345 14.103 5.25 12.0075 5.25C10.107 5.25 8.025 6.135 7.8825 8.679C7.88045 8.72744 7.88832 8.77579 7.90565 8.82107C7.92297 8.86636 7.94937 8.90762 7.98323 8.94232C8.01709 8.97703 8.05769 9.00444 8.10254 9.02287C8.14738 9.0413 8.19552 9.05036 8.244 9.0495ZM11.7315 18.714C12.6465 18.714 13.275 18.123 13.275 17.3235C13.275 16.4955 12.645 15.9135 11.7315 15.9135C10.8555 15.9135 10.218 16.4955 10.218 17.3235C10.218 18.123 10.854 18.714 11.7315 18.714Z"
                    fill="#F8F8F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_69_384">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </el-button>
            <el-button
              style="
                background-color: #0e0032;
                border: none;
                padding: 5px;
                margin: 5px;
              "
              @click="updateParentVariable(false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18"
                  stroke="#F8F8F8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </el-button>
          </div>
        </div>
      </template>

      <form action="">
        <div class="formDiv" style="padding-top: 0px; padding-bottom: 0px; background:white">
          <input
            @focus="(runIs = false), (valstr = false)"
            class="inputBox"
            v-model="ruleName"
            placeholder="Rule name"
            type="text"
            :style="{ borderColor: runIs ? 'red' : 'initial' }"
          />
          <p v-if="runIs" class="alertD">Please enter rule name first</p>
          <p v-if="valstr" class="alertD">Please enter valid name</p>

          <input
            @focus="exIs = false"
            class="inputBox"
            v-model="expression"
            placeholder="Expression"
            type="text"
            :style="{ borderColor: exIs ? 'red' : 'initial' }"
          />

          <p v-if="exIs" class="alertD">Please enter expression first</p>

          <input
            @focus="(perIs = false), (valper = false)"
            class="inputBox"
            v-model="period"
            placeholder="Period"
            type="text"
            :style="{ borderColor: perIs ? 'red' : 'initial' }"
          />

          <p v-if="perIs" class="alertD">Please enter period first</p>
          <p v-if="valper" class="alertD">
            Please enter valid period, it should only contain nubmers
          </p>

          <input
            @focus="(silIs = false), (valper1 = false)"
            class="inputBox"
            v-model="silencePeriod"
            placeholder="Silence period"
            type="text"
            :style="{ borderColor: silIs ? 'red' : 'initial' }"
          />
          <p v-if="silIs" class="alertD">Please enter silence period first</p>
          <p v-if="valper1" class="alertD">
            Please enter valid silence period, it should only contain nubmers
          </p>

          <textarea
            @focus="(mesIs = false), (valstr1 = false)"
            v-model="message"
            placeholder="Message"
            id="textArea"
            cols="30"
            rows="10"
            :style="{ borderColor: mesIs ? 'red' : 'initial' }"
          ></textarea>
          <p v-if="mesIs" class="alertD">Please enter message first</p>
          <p v-if="valstr1" class="alertD">
            Please enter valid message, it should not contain numbers
          </p>
        </div>
        <div
          style="
            display: flex;
            width: 100%;
            justify-content: flex-end;
            align-items: flex-end;
            margin-bottom: 25px;
          "
        >
          <el-button
            type="primary"
            @click="handleAdd"
            style="
              background-color: #e0e4e8;
              border: none;
              color: #000088;
              width: 64px;
              height: 35px;
              padding-right: 20px;
            "
          >
            <span> Add </span>
          </el-button>
        </div>
      </form>

      <template #footer> </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.inputBox {
  padding-left: 10px;
  margin-top: 12px;
  width: 97%;
  height: 56px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 0.5px solid #8d8e90;
  background: #fff;
  font-size: 16px;
}

#textArea {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 12px;
  width: 97%;
  border-radius: 5px;
  border: 0.5px solid #8d8e90;
  background: #fff;
  font-size: 16px;
  height: 138px;
  font-family: Lato, sans-serif;
}

.alertD {
  color: rgb(171, 48, 48);
}

.formDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 2%;
}
</style>
