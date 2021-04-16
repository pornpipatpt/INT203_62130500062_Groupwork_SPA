<template>
  <nav-bar :navber="navbar" />
  <blackground>
    <p class="font-extralight   text-black text-center text-3xl ">
      Covid-19 Risk Assessment Form
    </p>
    <div class="w-screen h-full">
      <div class="w-full h-full md:w-1/2">
        <div class="container">
          <div class="survey-container">
            <form @submit.prevent="submitForm">
              <text-box>
                <label class="label" for="name">ชื่อของคุณ:</label>

                <input
                  class="input"
                  :class="{ 'bg-red-50': invalidNameInput }"
                  id="name"
                  type="text"
                  v-model.trim="enteredName"
                  @blur="validateName"
                />

                <p v-if="invalidNameInput" class="text-red-500">
                  โปรดระบุชื่อของคุณ!
                </p>
              </text-box>

              <text-box>
                <label class="label" for="name">อายุของคุณ:</label>

                <input
                  class="input"
                  :class="{ 'bg-red-50': invalidAgeInput }"
                  id="age"
                  type="text"
                  v-model.trim="enteredAge"
                  @blur="validateAge"
                />

                <p v-if="invalidAgeInput" class="text-red-500">
                  โปรดระบุอายุของคุณ!
                </p>
              </text-box>

              <text-box>
                <label class="label" for="name">จังหวัดที่คุณอยู่:</label>

                <input
                  class="input"
                  :class="{ 'bg-red-50': invalidProvinceInput }"
                  id="province"
                  type="text"
                  v-model.trim="enteredProvince"
                  @blur="validateProvince"
                />

                <p v-if="invalidProvinceInput" class="text-red-500">
                  โปรดระบุจังหวัดของคุณ!
                </p>
              </text-box>

              <text-box>
                <h2 class="heading">คุณได้ไปสถานที่เสี่ยงมาหรือไม่</h2>

                <div>
                  <input
                    type="radio"
                    name="answer"
                    id="answer-yes"
                    value="Yes"
                    v-model="answer"
                  />
                  <label class="label" for="answer-yes">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer"
                    id="answer-no"
                    value="No"
                    v-model="answer"
                  />
                  <label class="label" for="answer-no">No</label>
                </div>

                <p v-if="invalidAnswerInput" class="text-red-500">
                  โปรดระบุคำตอบของคุณ!
                </p>
              </text-box>
              <text-box>
                <h2 class="heading">
                  คุณมีอาการปวดหัว ตัวร้อน อาเจียน หรือไม่
                </h2>

                <div>
                  <input
                    type="radio"
                    name="answer1"
                    id="answer-yes1"
                    value="Yes"
                    v-model="answer1"
                  />
                  <label class="label" for="answer-yes1">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer1"
                    id="answer-no1"
                    value="No"
                    v-model="answer1"
                  />
                  <label class="label" for="answer-no1">No</label>
                </div>

                <p v-if="invalidAnswerInput1" class="text-red-500">
                  โปรดระบุคำตอบของคุณ!
                </p>
              </text-box>

              <text-box>
                <h2 class="heading">
                  คุณสัมผัสใกล้ชิดกับประชาชนที่มาจากพื้นที่ที่มีรายงานการระบาดต่อเนื่องของ(COVID-19)
                  หรือไม่ ?
                </h2>

                <div>
                  <input
                    type="radio"
                    name="answer2"
                    id="answer-yes2"
                    value="Yes"
                    v-model="answer2"
                  />
                  <label class="label" for="answer-yes2">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer2"
                    id="answer-no2"
                    value="No"
                    v-model="answer2"
                  />
                  <label class="label" for="answer-no2">No</label>
                </div>

                <p v-if="invalidAnswerInput2" class="text-red-500">
                  โปรดระบุคำตอบของคุณ!
                </p>
              </text-box>

              <text-box>
                <h2 class="heading">
                  คุณข้าร่วมกิจกรรมที่มีผู้ชุมนุมเกิน 100 คน ในช่วงเวลา 14 วัน ก่อนหน้านี้ หรือไม่ ?
                </h2>

                <div>
                  <input
                    type="radio"
                    name="answer3"
                    id="answer-yes3"
                    value="Yes"
                    v-model="answer3"
                  />
                  <label class="label" for="answer-yes3">Yes</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="answer3"
                    id="answer-no3"
                    value="No"
                    v-model="answer3"
                  />
                  <label class="label" for="answer-no3">No</label>
                </div>

                <p v-if="invalidAnswerInput3" class="text-red-500">
                  โปรดระบุคำตอบของคุณ!
                </p>
              </text-box>

              <button class="btn">
                Submit
              </button>
            </form>
          </div>
          <text-box>
            <ul v-for="survey in surveyResults" :key="survey.id">
              <li>
                <span>{{ survey.name }}</span>
                อายุของคุณคือ
                <span>{{ survey.age }}</span>
                จังหวัดที่คุณอยู่คือ
                <span>{{ survey.province }}</span>
                คำตอบของคุณคือ
                <span> {{ survey.answer }}</span>,
                <span> {{ survey.answer1 }}</span>,
                <span> {{ survey.answer2 }}</span>,
                <span> {{ survey.answer3 }}</span>
                <button @click="showIfm(survey)" class="bg-green-100 m-1">
                  <img src="@/assets/edit.png" alt="" />
                </button>
                <button @click="deleteIfm(survey.id)" class="bg-red-100 m-1">
                  <img src="@/assets/delete.png" alt="" />
                </button>
              </li>
            </ul>
          </text-box>
        </div>
      </div>
    </div>
  </blackground>
</template>

<script>
import Blackground from "@/components/Blackground.vue";

export default {
  name: "Home",
  components: {
    Blackground,
  },
  data() {
    return {
      isEdit: false,
      editId: "",
      url: "http://localhost:3000/surveyResults",
      enteredName: "",
      invalidNameInput: false,
      enteredAge: "",
      invalidAgeInput: false,
      enteredProvince: "",
      invalidProvinceInput: false,
      answer: null,
      invalidAnswerInput: false,
      answer1: null,
      invalidAnswerInput1: false,
      answer2: null,
      invalidAnswerInput2: false,
      answer3: null,
      invalidAnswerInput3: false,
      surveyResults: [],
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidAgeInput = this.enteredAge === "" ? true : false;
      this.invalidProvinceInput = this.enteredProvince === "" ? true : false;
      this.invalidAnswerInput = this.answer === null ? true : false;
      this.invalidAnswerInput1 = this.answer1 === null ? true : false;
      this.invalidAnswerInput2 = this.answer2 === null ? true : false;
      this.invalidAnswerInput3 = this.answer3 === null ? true : false;

      console.log(`name value: ${this.enteredName}`);
      console.log(`invalid name: ${this.invalidNameInput}`);
      console.log(`age value: ${this.enteredAge}`);
      console.log(`invalid age: ${this.invalidAgeInput}`);
      console.log(`province value: ${this.enteredProvince}`);
      console.log(`invalid province: ${this.invalidProvinceInput}`);
      console.log(`answer value: ${this.answer}`);
      console.log(`invalid answer: ${this.invalidAnswerInput}`);
      console.log(`answer1 value: ${this.answer1}`);
      console.log(`invalid1 answer: ${this.invalidAnswerInput1}`);
      console.log(`answer1 value: ${this.answer2}`);
      console.log(`invalid1 answer: ${this.invalidAnswerInput2}`);
      console.log(`answer1 value: ${this.answer3}`);
      console.log(`invalid1 answer: ${this.invalidAnswerInput3}`);

      if (
        this.enteredName !== "" &&
        this.enteredAge !== "" &&
        this.enteredProvince !== "" &&
        this.answer !== null &&
        this.answer1 !== null &&
        this.answer2 !== null &&
        this.answer3 !== null 
      ) {
        if (this.isEdit) {
          this.editIfm({
            id: this.editId,
            name: this.enteredName,
            age: this.enteredAge,
            province: this.enteredProvince,
            answer: this.answer,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
          });
        } else {
          this.addNewIfm({
            name: this.enteredName,
            age: this.enteredAge,
            province: this.enteredProvince,
            answer: this.answer,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
          });
        }
      }
      this.enteredName = "";
      this.enteredAge = "";
      this.enteredProvince = "";
      this.answer = null;
      this.answer1 = null;
      this.answer2 = null;
      this.answer3 = null;
    },

    validateName() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      console.log(`name: ${this.invalidNameInput}`);
    },
    validateAge() {
      this.invalidAgeInput = this.enteredAge === "" ? true : false;
      console.log(`name: ${this.invalidAgeInput}`);
    },
    validateProvince() {
      this.invalidProvinceInput = this.enteredProvince === "" ? true : false;
      console.log(`name: ${this.invalidProvinceInput}`);
    },

    showIfm(oldIfm) {
      this.isEdit = true;
      this.editId = oldIfm.id;
      this.enteredName = oldIfm.name;
      this.enteredAge = oldIfm.age;
      this.enteredProvince = oldIfm.province;
      this.answer = oldIfm.answer;
      this.answer1 = oldIfm.answer1;
      this.answer2 = oldIfm.answer2;
      this.answer3 = oldIfm.answer3;
    },
    async editIfm(editingIfm) {
      try {
        const res = await fetch(`${this.url}/${editingIfm.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: editingIfm.name,
            age: editingIfm.age,
            province: editingIfm.province,
            answer: editingIfm.answer,
            answer1: editingIfm.answer1,
            answer2: editingIfm.answer2,
            answer3: editingIfm.answer3,
          }),
        });
        const data = await res.json();
        this.surveyResults = this.surveyResults.map((survey) =>
          survey.id === editingIfm.id
            ? {
                ...survey,
                name: data.name,
                age: data.age,
                province: data.province,
                answer: data.answer,
                answer1: data.answer1,
                answer2: data.answer2,
                answer3: data.answer3,
              }
            : survey
        );

        this.isEdit = false;
        this.editId = "";
        this.enteredName = "";
        this.enteredAge = "";
        this.enteredProvince = "";
        this.answer = null;
        this.answer1 = null;
        this.answer2 = null;
        this.answer3 = null;
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },
    async getIfmResult() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
    async deleteIfm(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.surveyResults = this.surveyResults.filter(
          (survey) => survey.id !== deleteId
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
    async addNewIfm(newIfm) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: newIfm.name,
            age: newIfm.age,
            province: newIfm.province,
            answer: newIfm.answer,
            answer1: newIfm.answer1,
            answer2: newIfm.answer2,
            answer3: newIfm.answer3,
          }),
        });
        const data = await res.json();
        this.surveyResults = [...this.surveyResults, data];
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },

  async created() {
    this.surveyResults = await this.getIfmResult();
  },
};
</script>
