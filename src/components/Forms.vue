<template>
    <section id="form">
        <div id="image-section">
            <img alt="" src="../assets/avatar.png">
            <input type="file" name="">
        </div>
        <div class="form">
            <!-- <ul>
                <li><h5 id="personal">Personal</h5></li>
                <li><h5 id="location">Location</h5></li>
                <li><h5 id="general">General</h5></li>
                <li><h5 id="national">National</h5></li>
            </ul> -->

            <div class="tabs">
                <div class="tab active">
                    <h3>Personal Information</h3>
                    <!-- <div id="before_line">
                        <div id="after_line" :style="{width: growthBar + '%'}"></div>
                    </div> -->
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
                    <!-- <div id="before_line">
                        <div id="after_line" :style="{width: growthBar + '%'}"></div>
                    </div> -->
                    <form action="">
                        <div>
                            <label for="stateOfOrigin">State of origin</label><span id="required">*</span>
                            <select name="" v-on:change="getLGA" id='state' v-model="stateOfOrigin">                                    
                                <option value="" disabled></option>
                                <!-- <option v-for="e in AvailableStates" v-bind:value="e">{{e}}</option> -->
                            </select>
                        </div>
                        <div>
                            <label for="lga">local government area</label><span id="required">*</span>
                            <select name="lga" id='lga' v-model="lga">
                                <option value="" disabled>LGA</option>   
                                <!-- <option v-for="e in stateLGAs" v-bind:value="e">{{e}}</option> -->
                            </select>
                        </div>
                        <div>
                            <label for="">Hometown</label><span id="required">*</span>
                            <input type="text" name="" v-model="hometown" id="" placeholder="eg: owo">
                        </div>
                        <div>
                            <label for="">State of residence</label>
                            <select name="sor" v-model="stateOfResidence" id="">
                                <option value="" disabled>Residence</option>
                                <option value="ondo">Ondo</option>
                            </select>
                        </div>
                        <div>
                            <label for="">lga of residence</label>
                            <select name="" v-model="lgaOfResidence" id="">
                                <option value="" disabled>LGA</option>
                                <!-- <option v-for="lga in ondoLGA" v-bind:value="lga">{{lga}}</option> -->
                            </select>
                        </div>
                    </form>
                    <div class="btn_group">
                        <button id="previous" @click="previousForm" type="submit">Previous</button>
                        <button id="next" @click="validateLocation" type="submit">Next</button>
                    </div>
                </div>
                <div class="tab">
                    <h3>General Information</h3>
                    <!-- <div id="before_line">
                        <div id="after_line" :style="{width: growthBar + '%'}"></div>
                    </div> -->
                    <form action="">
                        <div>
                            <label for="ethnicGroup">Ethnic Group</label><span id="required">*</span>
                            <input type="text" name=""  v-model="ethnicGroup" id="ethnicGroup" placeholder='Ethnic group'>
                        </div>
                        <div>
                            <label for="religion">Religion</label><span id="required">*</span>
                            <select name="religion" v-model="religion" required='required' id="religion">
                                <option value="" disabled>Religion</option>
                                <option value="christian">Christianity</option>
                                <option value="islam">Islam</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label for="occupation">occupation</label><span id="required">*</span>
                            <select name="occupation" v-model="occupation" id="occupation">
                                <option value="" disabled>Occupation</option>
                                <option value="student">Student</option>
                                <option value="business">Business</option>
                                <option value="teacher">Teacher</option>
                                <option value="military">Militiary Personnel</option>
                            </select>
                        </div>
                        <div>
                            <label for="phone-number">phone number</label>
                            <input type="tel" v-model="phoneNumber" name="" id="phone-number" placeholder="08012345678">
                        </div>
                        <div>
                            <label for="email">Email Address</label>
                            <input type="email" v-model="email" name="" id="email" placeholder="someone@example.com">
                        </div>
                    </form>
                    <div class="btn_group">
                        <button id="previous" @click="previousForm" type="submit">Previous</button>
                        <button id="next" @click="validateGeneral" type="submit">Next</button>
                    </div>
                </div>
                <div class="tab">
                    <h3>National Information</h3>
                    <!-- <div id="before_line">
                        <div id="after_line" :style="{width: growthBar + '%'}"></div>
                    </div> -->
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
                            <input type="text" v-model="passNum" name="" placeholder="">
                        </div>
                        
                    </form>
                    <div class="btn_group">
                        <button id="previous" @click="previousForm" type="submit">Previous</button>
                        <button id="next" @click="validateNational" type="submit">Preview</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
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