<template>
  <div>
    <b-container>
      <div>
        <b-form @submit.prevent="validateBeforeSubmit" novalidate>
          <b-row>
            <b-col sm="6">
              <label for="example-datepicker" class="sr-only"
                >Choose Meeting Date:</label
              >
              <b-form-datepicker
                id="example-datepicker"
                name="datepicker"
                size="lg"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Choose Meeting Date"
                dropup
                v-model="form.date"
                v-validate="'required'"
                :class="{
                  input: true,
                  'is-invalid': veeErrors.has('datepicker'),
                }"
              ></b-form-datepicker>
              <span
                v-show="veeErrors.has('datepicker')"
                class="invalid-feedback d-block"
                >{{ veeErrors.first("datepicker") }}</span
              >
            </b-col>
            <b-col sm="6">
              <label for="title" class="sr-only">Add Meeting Title:</label>
              <b-form-input
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Add Meeting Title"
                id="title"
                name="title"
                size="lg"
                v-model="form.meeting"
                v-validate="'required'"
                :class="{ input: true, 'is-invalid': veeErrors.has('title') }"
              ></b-form-input>
              <i v-show="veeErrors.has('title')" class="fa fa-warning"></i>
              <span
                v-show="veeErrors.has('title')"
                class="invalid-feedback d-block"
                >{{ veeErrors.first("title") }}</span
              >
            </b-col>
          </b-row>

          <b-row class="mt-5 mb-2 new-notes">
            <b-col sm="8">
              <b-form-textarea
                id="textarea-note"
                placeholder="New Note"
                v-model="note"
                rows="3"
                max-rows="6"
                >&nbsp;</b-form-textarea
              >
              <b-form-invalid-feedback :state="noteValidation"
                >Please fill out meeting note.</b-form-invalid-feedback
              >
            </b-col>
            <b-col sm="3">
              <b-form-textarea
                id="textarea-topic"
                placeholder="Tag"
                v-model="tag"
                rows="3"
                max-rows="6"
                >&nbsp;</b-form-textarea
              >
              <b-form-invalid-feedback :state="tagValidation"
                >Please fill out topic tag.</b-form-invalid-feedback
              >
            </b-col>
            <b-col sm="1">
              <b-button
                variant="outline-primary"
                @click="addTempNote"
                class="btn-100"
                >Add</b-button
              >
            </b-col>
          </b-row>

          <b-row v-show="notesAdded" class="mb-5">
            <b-col sm="12">
              <Table v-bind="{ fields, items }" />
            </b-col>
            <b-col sm="2" offset-sm="10">
              <b-button type="submit" variant="plurple" class="btn-100"
                >Submit Meeting</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from "./Table.vue";

@Component({
  components: {
    Table,
  },
})
export default class Add extends Vue {
  notesAdded = false;
  tag = "";
  note = "";
  tagValidation = true;
  noteValidation = true;

  form = {
    date: "",
    meeting: "",
  };

  readonly fields: Array<object> = [
    {
      key: "notes",
      thClass: "trWidth-70",
    },
    {
      key: "tags",
      thClass: "trWidth-30",
    },
  ];
  items = this.$store.state.tempNotes;

  addTempNote() {
    this.tagValidation = this.tag == "" ? false : true;
    this.noteValidation = this.note == "" ? false : true;

    if (this.tag !== "" && this.note !== "") {
      //Show table and submit button
      this.notesAdded = true;

      //Add note to table
      this.$store.commit("newTempNote", {
        tags: this.tag,
        notes: this.note,
      });

      //Remove value of textareas
      this.tag = this.note = "";
    }
  }

  validateBeforeSubmit() {
    this.$validator.validateAll().then((result) => {
      if (result) {
        //Add the data to the store.ts
        this.$store.commit("addTempNote", this.form);

        //Switch tabs
        this.$router.push("/");

        return;
      }
    });
  }
}
</script>
