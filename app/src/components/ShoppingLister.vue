<template>
  <!-- <div v-if="addedItem"> -->
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="list">
        <h2 class="list-header">Saved items</h2>
        <table class="items">
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
          <tr v-for="(i, index) in retrieveList" :key="index.Id">
            <td>
              <span v-show="!i.edit">{{ i.name }}</span>
              <input
                class="edit-name"
                type="text"
                v-bind:placeholder="i.name"
                v-show="i.edit"
                v-model="i.name"
              />
            </td>
            <!-- <td>
              <span v-show="!item.edit">{{ item.quantity }}</span>
              <input
                class="edit-quantity"
                min="0"
                type="number"
                v-bind:placeholder="item.quantity"
                v-show="item.edit"
                v-model="item.quantity"
              />
            </td>
            <td>
              <span v-show="!item.edit">{{ item.category }}</span>
              <select
                v-show="item.edit"
                v-model="item.category"
                class="edit-category"
              >
                <option v-for="(item, index) in categoryList" :key="index.Id">
                  {{ item.name }}
                </option>
              </select>
            </td>
            <td>
              <button
                type="button"
                class="save-button"
                v-show="item.edit"
                @click="itemEdited(item)"
              >
                Save
              </button>
              <button
                type="button"
                class="edit-button"
                v-show="!item.edit"
                @click="editItem(item)"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="delete-button"
                @click="deleteItem(index)"
              >
                <i class="fa fa-remove"></i> Delete
              </button>
            </td> -->
          </tr>
        </table>
      </div>
      <button
        @click="save()"
        class="submit mt-3"
        type="submit"
        value="Add to Done"
      >
        submit
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "ShoppingLister",

  created() {
    this.$store.dispatch("retrieveList");
  }
};
</script>

<style></style>
