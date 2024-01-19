<script setup>
import { ElMessageBox } from 'element-plus'


</script>
<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            selectedCountry: '',
            countries: [],
            phoneNumber: '',
            cntry: '',
            phoneErrorMessage: '', 
            title : '',
            tenantDemo : '',
            discription : '',
            City :'',
            state : '',
            zip :'',
            address :'',
            address2 :'',
            phoneNo :'',
            email :'',
            isCountryEmpty :false,
            isTitleEmpty :false,
            isTenantDemoEmpty :false,
            isDescriptionEmpty :false,
            addressFieldEmpty :false,
            isAddressEmpty :false,
            isAddress2Empty :false,
            isPhoneEmpty :false,
            isEmailEmpty :false,
            storedData :[],
            validPhoneNumber :false,
            invalidEmail :false,
        };
    },
    mounted() {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => {

                this.countries = data.map(country => ({
                    name: country.name,
                    alpha2Code: country.alpha2Code,
                    callingCodes: country.callingCodes,
                }));
            })
            .catch(error => console.error('Error fetching countries:', error));
    },
    props: {
        childVariable: Boolean,
    },
    methods: {
        updateParentVariable(value) {
            this.$emit('updateVariable', value);
        },
        callParentFunction() {
            this.customFunction();
        },
        onCountryChanged() {
            const country = this.countries.find(country => country.alpha2Code === this.selectedCountry);
            this.phoneNumber = "+" + country.callingCodes[0];
            console.log('Selected Country:', country, " ", this.phoneNumber);
        },
        getFlagPath(alpha2Code) {
            return `flags/${alpha2Code.toLowerCase()}.png`;
        },
        validatePhoneNumber() {
            const isValid = /^\+[0-9]+$/.test(this.phoneNumber);
            this.validPhoneNumber = isValid;
            this.phoneErrorMessage = isValid ? '' : 'Phone number should only contain + and numeric digits.';
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.invalidEmail = !emailRegex.test(this.email);
        },
        handleAddTenant() {

            if (
                this.title === '' ||
                this.isTenantDemoEmptytenantDemo === '' ||
                this.discription === '' ||
                this.cntry === '' ||
                this.City === '' ||
                this.state === '' ||
                this.zip === '' ||
                this.address === '' ||
                this.phoneNumber === '' ||
                this.email === ''
            ) {
                if (this.phoneNumber !== "") {
                    this.validPhoneNumber = true;
                }
                if (this.title === '') {
                    this.isTitleEmpty = true;
                }
                if (this.discription === '') {
                    this.isDescriptionEmpty = true;
                }
                if (this.tenantDemo === '') {
                    this.isTenantDemoEmpty = true;
                }
                if (this.cntry === '') {
                    this.isCountryEmpty = true;
                }
                if (this.City === '') {
                    this.addressFieldEmpty = true;
                }
                if (this.state === '') {
                    this.addressFieldEmpty = true;
                }
                if (this.zip === '') {
                    this.addressFieldEmpty = true;
                }
                if (this.address === '') {
                    this.isAddressEmpty = true;
                }
                if (this.phoneNumber === '') {
                    this.isPhoneEmpty = true;
                }
                if (this.email === '') {
                    this.isEmailEmpty = true;
                }
            }
            else {
                const newData = {
                    curentTime : new Date().toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }),
                    title: this.title,
                    description: this.discription,
                    demo: this.tenantDemo,
                    country: this.cntry,
                    city: this.City,
                    state: this.state,
                    zip: this.zip,
                    address: this.address,
                    address2: this.address2,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                };

                this.storedData.push(newData);

                console.log("previous data", this.storedData);
                this.$emit('send-object-to-parent', this.storedData);
                this.title = '';
                this.tenantDemo = '';
                this.discription = '';
                this.City = '';
                this.state = '';
                this.zip = '';
                this.address = '';
                this.address2 = '';
                this.phoneNo = '';
                this.email = '';
                
            }
        },
        
    },
};

</script>



<template>
    <div class="containerMain"
        style="display: flex; width: 50%; flex-direction: column; align-items: center;  border-radius: 5px; border: solid black 1px; overflow-y: auto; height: 95vh; overflow-x: hidden;">

        <div
            style=" width: 91%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px;">
            <div
                style="position:relative; height: 72px; width: 110%; border-radius: 4px; background: #0E0032; color: white; display: flex; align-items: center;">
                <p style="position: absolute; left: 4.55%;">Add Tenant</p>
                <el-button style="position: absolute; right: 10%; background-color: #0E0032; border: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_6_197)">
                            <path
                                d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM8.244 9.0495H9.4815C9.6885 9.0495 9.8535 8.88 9.8805 8.6745C10.0155 7.6905 10.6905 6.9735 11.8935 6.9735C12.9225 6.9735 13.8645 7.488 13.8645 8.7255C13.8645 9.678 13.3035 10.116 12.417 10.782C11.4075 11.5155 10.608 12.372 10.665 13.7625L10.6695 14.088C10.6711 14.1864 10.7113 14.2803 10.7814 14.3493C10.8516 14.4183 10.9461 14.457 11.0445 14.457H12.261C12.3605 14.457 12.4558 14.4175 12.5262 14.3472C12.5965 14.2768 12.636 14.1815 12.636 14.082V13.9245C12.636 12.8475 13.0455 12.534 14.151 11.6955C15.0645 11.001 16.017 10.23 16.017 8.6115C16.017 6.345 14.103 5.25 12.0075 5.25C10.107 5.25 8.025 6.135 7.8825 8.679C7.88045 8.72744 7.88832 8.77579 7.90565 8.82107C7.92297 8.86636 7.94937 8.90762 7.98323 8.94232C8.01709 8.97703 8.05769 9.00444 8.10254 9.02287C8.14738 9.0413 8.19552 9.05036 8.244 9.0495ZM11.7315 18.714C12.6465 18.714 13.275 18.123 13.275 17.3235C13.275 16.4955 12.645 15.9135 11.7315 15.9135C10.8555 15.9135 10.218 16.4955 10.218 17.3235C10.218 18.123 10.854 18.714 11.7315 18.714Z"
                                fill="#F8F8F8" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_197">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </el-button>
                <el-button @click="updateParentVariable(false)"
                    style="position: absolute; right: 3.8%; background-color: #0E0032; border: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12L6 6M12 12L18 18M12 12L18 6M12 12L6 18" stroke="#F8F8F8" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </el-button>
            </div>
            <input type="text" v-model="title" class="inputTag" placeholder="Title">
            <p v-if="isTitleEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <input type="text" v-model="tenantDemo" class="inputTag" placeholder="Tenant demo">
            <p v-if="isTenantDemoEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <textarea class="textArea" v-model="discription" rows="2" placeholder="Discription"></textarea>
            <p v-if="isDescriptionEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <select v-model="cntry" name="" id="ListCn" style="padding-right: 20px;">
                <option disabled selected value="">Country</option>
                <option v-for="country in countries" :key="country.alpha2Code" :value="country.name">
                    {{ country.name }}
                </option>
            </select>
            <p v-if="isCountryEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <div class="address">
                <input v-model="City" type="text" class="interInput" placeholder="City">
                <input v-model="state" type="text" class="interInput" placeholder="State / Province">
                <input v-model="zip" type="text" class="interInput" placeholder="Zip / Postal code">
            </div>
            <p v-if="addressFieldEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <input v-model="address" type="text" class="inputTag" placeholder="Address">
            <p v-if="isAddressEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <input v-model="address2" type="text" class="inputTag" placeholder="Address 2">
            <p v-if="isAddress2Empty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <div style="display: flex; flex-direction: row; align-items: flex-start; height: 56px; width: 100%; ">
                <select id="country" v-model="selectedCountry" @change="onCountryChanged" style="width: 25%; height: 58px; border-radius: 5px 5px 0px 0px;
                    border-bottom: 1px solid #8D8E90;
                    background: #EDF0F4;
                    border-top: none;
                    border-right: none;
                    border-left: none; padding: 20px;
                    padding-left: 20px;
                    font-family: 'Lato', sans-serif;
                    color: #877775;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;">
                    <option disabled value="">Select a country</option>
                    <option v-for="country in countries" :key="country.alpha2Code" :value="country.alpha2Code">
                        {{ country.name }} ({{ " +" + country.callingCodes[0] }})
                        <img :src="getFlagPath(country.alpha2Code)" alt="">
                    </option>
                </select>
                <input type="tel" @input="validatePhoneNumber" v-model="phoneNumber" @click="() => {
                    isPhoneEmpty = false;
                    validPhoneNumber = false;
                }" placeholder="&nbsp;&nbsp;Phone number" name="" id="" style="width: 80%; height: 56px;  border-radius: 5px 5px 0px 0px;
                    border-bottom: 1px solid #8D8E90;
                    background: #EDF0F4;
                    border-top: none;
                    border-right: none;
                    border-left: none; margin-left: 2%; padding-left: 20px; 
                    font-family: 'Lato', sans-serif;
                    color: #877775;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;">
            </div>
            <p v-if="isPhoneEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <p v-if="!isPhoneEmpty || !validPhoneNumber"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">{{
                    phoneErrorMessage }}</p>

            <input type="text" @input="validateEmail" v-model="email" class="inputTag" placeholder="Email">
            <p v-if="isEmailEmpty"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">You may have a
                empty field or a invalid entry.</p>
            <p v-if="isEmailEmpty || invalidEmail"
                style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; margin-top:0px; color:red">
                You may have an invalid email address.
            </p>
            <div style="display: flex; width: 100%; flex-direction: row; justify-content: flex-end; padding-bottom: 20px;">
                <el-button @click="updateParentVariable(false)" style="margin-right: 20px; height: 35px; width: 64px; font-family: 'Lato', sans-serif;
                 color: #877775;
                 font-size: 16px;
                 font-style: normal;
                 font-weight: 500;
                 line-height: normal;">
                    Cancel
                </el-button>
                <el-button style="height: 35px; width: 64px; color: #008; font-size: 16px;
                 font-style: normal;
                 font-weight: 500;
                 line-height: normal;" @click="handleAddTenant">
                    Add
                </el-button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.inputTag {
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;
    height: 56px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #8D8E90;
    background: #EDF0F4;
    border-top: none;
    border-right: none;
    border-left: none;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.textArea {
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #8D8E90;
    background: #EDF0F4;
    height: 85px;
    border-top: none;
    border-right: none;
    border-left: none;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

template {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

#ListCn {
    width: 100%;
    height: 56px;
    padding: 15px;
    padding-left: 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #8D8E90;
    background: #EDF0F4;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}

.address {
    display: flex;
    flex-direction: row;
    gap: 2%;
    width: 100%;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.interInput {
    width: 33.33%;
    height: 56px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #8D8E90;
    background: #EDF0F4;
    font-family: 'Lato', sans-serif;
    color: #877775;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 20px;

}

.containerMain {
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
}

.fade-in {
    animation: fadeIn 0.5s ease-in-out forwards;
}


@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (min-width: 1301px) {
    .containerMain {
        align-items: flex-start;
        justify-content: flex-start;
        width: auto;
    }
}
</style>