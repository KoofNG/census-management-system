<template>
    <section id="form">
        <div id="image-section">
            <img alt="" src="../assets/avatar.png">
            <input type="file" name="">
            <div id="alert" class="alert">
                <p id="msgAlert">Fill in all * fields</p>
            </div>
        </div>
        <div class="form">
            <div class="tabs">
                <div class="tab active">
                    <h3>Personal Information</h3>
                    <form action="">
                        <div>
                            <label for="fullName">Full Name <span id="required">*</span></label>
                            <input type="text" v-model="fullName" name="fn" id="fullName" placeholder="Full Name">
                        </div>
                        <div>
                            <label for="DOB">Date of birth <span id="required">*</span></label>
                            <input type="date" v-on:change="changeDOB" v-model="dob" name="dob" id="DOB">
                        </div>
                        <div>
                            <label for="age">Age</label>
                            <input type="number" disabled v-model="age" name="age" id="age">
                        </div>
                        <div>
                            <label for="gender">Gender <span id="required">*</span></label>
                            <select name="gender" v-model="gender" id="gender">
                                <option value="" disabled>Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </div>
                        <div>
                            <label for="homeAddress">Home Address <span id="required">*</span></label>
                            <input type="text" v-model="homeAddress" name="" placeholder="eg: !2 Rufus Giwa, Way">
                        </div>                                
                    </form>
                    <div class="btn_group">
                        <button id="next" @click="validatePerson" type="submit">Next</button>
                    </div>
                </div>
                <div class="tab">
                    <h3>Location Information</h3>
                    <form action="">
                        <div>
                            <label for="stateOfOrigin">State of origin <span id="required">*</span></label>
                            <select name="" v-on:change="getLGA" id='state' v-model="stateOfOrigin">                                    
                                <option value="" disabled></option>
                                <option v-for="(item, index) in AvailableStates" :key="index" v-bind:value="item">{{item}}</option>
                            </select>
                        </div>
                        <div>
                            <label for="lga">Local Government Area <span id="required">*</span></label>
                            <select name="lga" id='lga' v-model="lga">
                                <option value="" disabled>LGA</option>   
                                <!-- <option v-for="e in stateLGAs" v-bind:value="e">{{e}}</option> -->
                            </select>
                        </div>
                        <div>
                            <label for="">Hometown <span id="required">*</span></label>
                            <input type="text" name="" v-model="homeTown" id="" placeholder="eg: owo">
                        </div>
                        <div>
                            <label for="">State of Residence</label>
                            <select name="sor" v-model="stateOfResidence" id="">
                                <option value="" disabled>Residence</option>
                                <option value="ondo">Ondo</option>
                            </select>
                        </div>
                        <div>
                            <label for="">LGA of Residence</label>
                            <select name="" v-model="lgaOfResidence" id="">
                                <option value="" disabled>LGA</option>
                                <!-- <option v-for="lga in ondoLGA" v-bind:value="lga">{{lga}}</option> -->
                            </select>
                        </div>
                    </form>
                    <div class="btn_group">
                        <button id="previous" type="submit">Previous</button>
                        <button id="next" @click="validateLocation" type="submit">Next</button>
                    </div>
                </div>
                <div class="tab">
                    <h3>General Information</h3>
                    <form action="">
                        <div>
                            <label for="ethnicGroup">Ethnic Group <span id="required">*</span></label>
                            <input type="text" name="" v-model="ethnicGroup" id="ethnicGroup" placeholder='Ethnic group'>
                        </div>
                        <div>
                            <label for="religion">Religion <span id="required">*</span></label>
                            <select name="religion" v-model="religion" required='required' id="religion">
                                <option value="" disabled>Religion</option>
                                <option value="christian">Christianity</option>
                                <option value="islam">Islam</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label for="occupation">Occupation <span id="required">*</span></label>
                            <select name="occupation" v-model="occupation" id="occupation">
                                <option value="" disabled>Occupation</option>
                                <option value="student">Student</option>
                                <option value="business">Business</option>
                                <option value="teacher">Teacher</option>
                                <option value="military">Militiary Personnel</option>
                            </select>
                        </div>
                        <div>
                            <label for="phone-number">Phone Number</label>
                            <input type="tel" v-model="phoneNumber" name="" id="phone-number" placeholder="08012345678">
                        </div>
                        <div>
                            <label for="email">Email Address</label>
                            <input type="email" v-model="email" name="" id="email" placeholder="someone@example.com">
                        </div>
                    </form>
                    <div class="btn_group">
                        <button id="previous" type="submit">Previous</button>
                        <button id="next" @click="validateGeneral" type="submit">Next</button>
                    </div>
                </div>
                <div class="tab">
                    <h3>National Information</h3>
                    <form action="">   
                        <div>
                            <label for="bvn">Bank Verification Number</label>
                            <input type="text" v-model="bvn" name="" placeholder="">
                        </div>
                        <div>
                            <label for="nin">National Identification Number</label>
                            <input type="text" v-model="nin" name="" placeholder="">
                        </div>
                        <div>
                            <label for="vin">Voters Identification Number</label>
                            <input type="text" v-model="vin" name="" placeholder="">
                        </div>
                        <div>
                            <label for="passNum">International Passport Number</label>
                            <input type="text" v-model="passportNum" name="" placeholder="">
                        </div>
                        
                    </form>
                    <div class="btn_group">
                        <button id="previous" type="submit">Previous</button>
                        <button id="next" @click="validateNational" type="submit">Preview</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            fullName: '',
            dob: '',
            age: 0,
            gender: '',
            homeAddress: '',
            stateOfOrigin: '',
            lga: '',
            homeTown: '',
            stateOfResidence: '',
            lgaOfResidence: '',
            ethnicGroup: '',
            religion: '',
            occupation: '',
            phoneNumber: '',
            email: '',
            bvn: '',
            nin: '',
            vin: '',
            passportNum: '',
            fetchState: [],
            stateLGAs: [],
            AvailableStates: ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],
    
        }
    },

    methods: {
        moveNext: function() {
            const formTabs = document.querySelectorAll('.tab');        
            var tabsArray = [];
            formTabs.forEach(element => {
                tabsArray.push(element);
            });            
            const unique = document.querySelector('div.tab.active');
            const index = tabsArray.indexOf(unique);            
            document.querySelector('div.tab.active').classList.remove('active');
            return formTabs[index+1].classList.add('active'); 
        },

        showAlert: function () {
            const alert = document.getElementById('alert');
            if (alert) {
                alert.classList.add('active');
                setTimeout(() => {
                    alert.classList.remove('active')
                }, 1500);
            }
        },

        changeDOB: function() {
            let dateOfBirth = new Date(this.dob.valueOf());
            return (this.age = new Date().getFullYear().valueOf() - dateOfBirth.getFullYear());
        },

        getLGA: function(event) {
            if(this.stateLGAs.length != 0){return this.stateLGAs.length = 0}

            var choosenState = event.target.value;
            var choosenIndex = this.AvailableStates.indexOf(choosenState);
            var lgaArray = this.fetchState[choosenIndex].data.lgas;
            lgaArray.forEach(element => {
                var lgaName = element.data.name;
                this.stateLGAs.push(lgaName);
            });
        },

        validatePerson : function () {
            if (this.fullName.length != 0 && this.dob != "" && this.gender.length != 0 && this.homeAddress.length != 0) {
                this.moveNext();           
            } else {
                this.showAlert();
            }
        },

        validateLocation : function () {
            this.moveNext()
        },

        validateGeneral : function () {
            this.moveNext()
        },

        validateNational : function () {
            this.moveNext()
        }
    },

    mounted() {
        const formTabs = document.querySelectorAll('.tab');
        const previousButton = document.querySelectorAll('button#previous');

        var tabsArray = [];
        formTabs.forEach(element => {
            tabsArray.push(element);
        });

        previousButton.forEach(element => {
            element.addEventListener('click', () => {
                const unique = document.querySelector('div.tab.active');
                const index = tabsArray.indexOf(unique);
                document.querySelector('div.tab.active').classList.remove('active');
                formTabs[index-1].classList.add('active');
            });
        });        

        // fetch("./assets/lga.json")
        // .then(console.log(res))
        // .catch(err => {throw err});
    },
    
}
</script>

<style scoped>

/* Block */
section#form {
    padding: 40px 60px;
    margin: 0px;
    display: flex;
    flex-direction: column;
}


div.alert{
    height: 40px;
    min-width: 200px;
    display: block;
    position: relative;
    opacity: 0;
    padding: 10px 20px;
    right: 0px;
    z-index: -3;
    top: 80%;
    transition: all 1000ms;
    background-color: #dc3545;
}

div#image-section {
    height: 200px;
    width: auto;
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    justify-content: left;
    padding: 15px 40px;
    /* box-shadow:0px 0px 4px 0px #cccccc; */
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background: url("../assets/hero.png"),linear-gradient(148deg,#0060df 7%,#0479f4 20%,#0681fc 27%,#02bdf1 60%,#01d3f0 67%,#05f0e6 100%);
    background-position: bottom center;
    background-repeat: no-repeat;
}

div.forms {
    padding: 30px 0px;
    display: inline-block;
    position: relative;
}

div.tabs {
    background-color: #f7f7f7;
    padding: 30px 40px;
}

div.tab {
    display: none;
    visibility: hidden;
    opacity: 0;
}

div.btn_group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

/* Elements */
div#image-section img {
    height: 170px;
    width: 160px;
    margin: auto 0px 0px 0px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 2px;
}

div#image-section input[type=file] {
    margin: auto 0px 0px 5px;
}

div.alert.active{
    top: 96%;
    opacity: 1;
    z-index: 3;
}

p#msgAlert{
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}

ul {
    width: 100%;
    height: auto;
    padding: 1px 15px;
    margin: 15px 0px;
    border-top: .5px solid #cccccc;
    border-bottom: .5px solid #cccccc;
    display: flex;
}

ul , li {
    list-style: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

ul > li {
    float: left;
    padding: 10px 15px;
    display: block;
    cursor: pointer;
    background-color: #ffffff;
    transition: all 300ms;
}

ul > li > h5 {
    font-size: 1em;
    font-weight: lighter;
    color: initial;
    transition: all 300ms;
}

div.tab h3 {
    font-size: 1.3em;
    font-weight: 500;
    color: #121212;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ffc600;
}

form div {
    width: 100%;
    height: auto;
    padding: 2.5px 0;
    position: relative;
    display: flex;
    flex-direction: column;
}

form div:nth-child(odd) {
    margin: 7.5px 0;
}

form div label, input {
    width: 100%;
    height: auto;
}

label {
    padding: 0px 0px 7.5px 0px;
}

input, select {
    height: 40px;
    padding: 7.5px 15px;
    text-transform: capitalize;
    outline: none;
    border: 1px solid #cccccc;
    background-color: transparent;
    transition: all 300ms;
}

button {
    height: 40px;
    width: auto;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 300ms;
    color: #ffffff;
}

/* Modifiers */
ul > li.active {
    background-color: #1e1edf;
    padding: 10px 17.5px;
}

ul > li > h5.active {
    color: #ffffff;
}

input[type=date] {
    text-transform: uppercase;
}

input[id=age]:disabled{
    cursor: not-allowed;
}

input[type=email] {
    text-transform: lowercase;
}

input[type=file] {
    border: none;
}

span#required {
    color: #ff0000;
}

div.tab.active {
    display: block;
    opacity: 1;
    visibility: visible;
}

input:focus, 
select:focus {
    border: 1px solid #1e1edf;
}

button#next {
    background-color: #1682cb;
}

button#previous {
    background-color: #ffc600;
}

button:hover {
    padding: 10px 25px 10px 25px;
    font-size: .9em;
}


@media screen and (max-width: 767px) {
    section#form {
        padding: 0px;
    }
}

</style>