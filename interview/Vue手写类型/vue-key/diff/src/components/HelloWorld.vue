<template>
  <div class="test">
    <ul>
      <li v-for="item in list"
          :key="item.id">{{item.value}}</li>
      <!-- key与value没有绑定 -->
    </ul>
    <button @click="change">reverse</button>
    <button @click="remove">remove</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      list: [{
        id: '001',
        value: 1
      },
      {
        id: '002',
        value: 2
      },
      {
        id: '003',
        value: 3
      },
      {
        id: '004',
        value: 4
      }]
    }
  },
  methods: {
    change () {
      this.list.reverse()
      console.log(this.list)
    },
    remove () {
      this.list.shift()
      console.log(this.list)
    }

  },
}
</script>

<style scoped>
</style>
