<template>
  <div>
    <b-table
      class="mt-5"
      striped
      :items="filterItems()"
      :fields="fields"
      :keyword="keyword"
      sort-icon-left
    ></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {
  @Prop() fields!: Array<object>;
  @Prop() items!: Array<object>;
  @Prop() keyword!: string;

  filterItems() {
    //remove green success class on tr
    this.$store.state.notes.forEach(function(i: any) {
      if (i._rowVariant) {
        setTimeout(function() {
          const success = document.getElementsByClassName("table-success");
          for (let i = 0; i < success.length; i++) {
            if (success[i] !== undefined) {
              success[i].classList.add("fadeSuccess");
            }
          }
          i._rowVariant = "white";
        }, 2000);
      }
    });

    //filter by keyword
    const dataArr = this.items;
    return this.keyword
      ? dataArr.filter(
          (item: any) =>
            item.date.toLowerCase().includes(this.keyword.toLowerCase()) ||
            item.meeting.toLowerCase().includes(this.keyword.toLowerCase()) ||
            item.tags.toLowerCase().includes(this.keyword.toLowerCase()) ||
            item.notes.toLowerCase().includes(this.keyword.toLowerCase())
        )
      : dataArr;
  }
}
</script>
