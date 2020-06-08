import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    retrieveList(state, list) {
      state.list = list;
    }
  },
  actions: {
    retrieveList(context) {
      db.collection("shoppinglist")
        .get()
        .then(querySnapshot => {
          let tempList = [];
          querySnapshot.forEach(doc => {
            console.log(doc.data());
            const data = {
              id: doc.id,
              name: doc.data().name,
              quantity: doc.data().quantity,
              category: doc.data().category,
              edit: doc.data().edit,
              completed: doc.data().completed
            };
            tempList.push(data);
          });
          context.commit("retrieveList", this.tempList);
        });
    }
  },
  modules: {}
});
