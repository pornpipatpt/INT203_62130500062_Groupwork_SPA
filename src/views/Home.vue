<template>
 <nav-bar :navber="navbar"/> 
 <p class="font-extralight text text-2xl text-red-300">แบบฟอร์มบันทึกรายละเอียดข้อมูลและความเสี่ยง</p>
 <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      

      <div class="container">
        <div class="survey-container">
          <form @submit.prevent="submitForm">
            <base-card>
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
            </base-card>

            <base-card>
              <h2 class="heading">คุณได้ไปสถานที่เสี่ยงมาหรือไม่</h2>

              <div>
                <input
                  type="radio"
                  name="answer"
                  id="answer-yes"
                  value="yes"
                  v-model="answer"
                />
                <label class="label" for="answer-yes">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="answer"
                  id="answer-no"
                  value="no"
                  v-model="answer"
                />
                <label class="label" for="answer-no">No</label>
              </div>

              
              <p v-if="invalidaAswerInput" class="text-red-500">
               โปรดระบุคำตอบของคุณ!
              </p>
            </base-card>
            <base-card>
              <h2 class="heading">คุณมีอาการปวดหัว ตัวร้อน อาเจียน หรือไม่</h2>

              <div>
                <input
                  type="radio"
                  name="answer1"
                  id="answer-yes1"
                  value="yes"
                  v-model="answer1"
                />
                <label class="label" for="answer-yes1">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="answer1"
                  id="answer-no1"
                  value="no"
                  v-model="answer1"
                />
                <label class="label" for="answer-no1">No</label>
              </div>

              
              <p v-if="invalidaAswerInput1" class="text-red-500">
                โปรดระบุคำตอบของคุณ!
              </p>
            </base-card>


            <button class="btn">
              Submit
            </button>
          </form>
        </div>
        <base-card>
          <ul v-for="survey in surveyResults" :key="survey.id">
            <li>
              <span>{{ survey.name }}</span> rating the learning experience
              <span> {{ survey.answer }}</span>
              <span> {{ survey.answer1 }}</span>
              <button @click="showData(survey)" class="bg-green-500 m-1">
                <img src="@/assets/edit.svg" alt="" />
              </button>
              <button @click="deleteSurvey(survey.id)" class="bg-red-500 m-1">
                <img src="@/assets/delete.svg" alt="" />
              </button>
            </li>
          </ul>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
   
  },
 data() {
    return {
      isEdit: false,
      editId: '',
      url: 'http://localhost:5000/surveyResults',
      enteredName: '',
      invalidNameInput: false,
      answer: null,
      invalidAnswerInput: false,
      answer1: null,
      invalidAnswerInput1: false,
      surveyResults: []
    }
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      this.invalidAnswerInput = this.answer === null ? true : false
      this.invalidAnswerInput1 = this.answer1 === null ? true : false

      console.log(`name value: ${this.enteredName}`)
      console.log(`invalid name: ${this.invalidNameInput}`)
      console.log(`answer value: ${this.answer}`)
      console.log(`invalid answer: ${this.invalidAnswerInput}`)
       console.log(`answer1 value: ${this.answer1}`)
      console.log(`invalid1 answer: ${this.invalidAnswerInput1}`)

      if (this.enteredName !== '' && this.answer !== null && this.answer1 !== null) {
        if (this.isEdit) {
          this.editSurvey({
            id: this.editId,
            name: this.enteredName,
            answer: this.answer,
            answer1: this.answer1
          })
        } else {
          this.addNewSurvey({
            name: this.enteredName,
            answer: this.answer,
            answer1: this.answer1
          })
        }
      }
      this.enteredName = ''
      this.answer = null
      this.answer1 = null
      
    },

    validateName() {
      this.invalidNameInput = this.enteredName === '' ? true : false
      console.log(`name: ${this.invalidNameInput}`)
    },

    showData(oldSurvey) {
      this.isEdit = true
      this.editId = oldSurvey.id
      this.enteredName = oldSurvey.name
      this.answer = oldSurvey.answer
      this.answer1 = oldSurvey.answer1
    },
    async editSurvey(editingSurvey) {
      try {
        const res = await fetch(`${this.url}/${editingSurvey.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: editingSurvey.name,
            answer: editingSurvey.answer,
            answer1: editingSurvey.answer1
          })
        })
        const data = await res.json()
        this.surveyResults = this.surveyResults.map((survey) =>
          survey.id === editingSurvey.id
            ? { ...survey, name: data.name, answer: data.answer ,answer1: data.answer1}
            : survey
        )

        this.isEdit = false
        this.editId = ''
        this.enteredName = ''
        this.answer = null
        this.answer1 = null
      } catch (error) {
        console.log(`Could not edit! ${error}`)
      }
    },
    async getSurveyResult() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        return data
      } catch (error) {
        console.log(`Could not get! ${error}`)
      }
    },
    async deleteSurvey(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: 'DELETE'
        })
        this.surveyResults = this.surveyResults.filter(
          (survey) => survey.id !== deleteId
        )
      } catch (error) {
        console.log(`Could not delete! ${error}`)
      }
    },
    async addNewSurvey(newSurvey) {
      try {
        const res = await fetch(this.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newSurvey.name,
            answer: newSurvey.answer,
            answer1: newSurvey.answer1
          })
        })
        const data = await res.json()
        this.surveyResults = [...this.surveyResults, data]
      } catch (error) {
        console.log(`Could not save! ${error}`)
      }
    }
  },

  async created() {
    this.surveyResults = await this.getSurveyResult()
  }
}
</script>
