import { mapActions } from "vuex"

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  computed: {

  },
  methods: {
    searchContent (e) {
      //请求地址;
      this.query = e.trim()
    },
    // saveSearch () {
    //   this.saveSearchHistory(this.query)
    // },
    ...mapActions([
      'saveSearchHistory'
    ])
  }
}