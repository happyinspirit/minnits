<template>
  <b-container>
    <div>
      <b-form>
        <b-row>
          <b-col sm="12">
            <label for="tag" class="sr-only">Search</label>
            <b-form-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Search"
              id="tag"
              size="lg"
              v-model="keyword"
            ></b-form-input>

            <b-input-group slot="append"></b-input-group>
          </b-col>
        </b-row>
      </b-form>

      <Table v-bind="{ fields, items, keyword }" />
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from "./Table.vue";

@Component({
  components: {
    Table,
  },
})
export default class Search extends Vue {
  readonly fields: Array<object> = [
    {
      key: "date",
      sortable: true,
      thClass: "trWidth-20",
    },
    {
      key: "meeting",
      sortable: true,
      thClass: "trWidth-20",
    },
    {
      key: "tags",
      sortable: true,
      thClass: "trWidth-20",
    },
    {
      key: "notes",
      sortable: false,
      thClass: "trWidth-40",
      tdClass: "ellipsis",
    },
  ];
  keyword = "";

  items = this.$store.state.notes;
}
</script>
