import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

const defaultNotes: Array<object> = [
  {
    date: "Fri, Mar 6, 2020",
    meeting: "Marketers Unite",
    tags: "Marketing",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "Fri, Apr 3, 2020",
    meeting: "Team Meeting",
    tags: "Financials",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "Fri, Apr 3, 2020",
    meeting: "Team Meeting",
    tags: "Logistics",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const store = new Vuex.Store({
  state: {
    notes: defaultNotes,
    tempNotes: [],
  },
  mutations: {
    newTempNote(state, note) {
      (state.tempNotes as any).push(note);
    },
    addTempNote(state, form) {
      const newNote: object[] = [];

      state.tempNotes.forEach(function(note: any) {
        note.date = moment(form.date).format("ddd, MMM D, YYYY");
        note.meeting = form.meeting;
        note._rowVariant = "success";
        newNote.push(note);
      });
      state.notes = newNote.concat(state.notes);
      state.tempNotes = [];
    },
  },
  actions: {},
});
