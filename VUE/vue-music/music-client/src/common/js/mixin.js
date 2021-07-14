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
    }
  }
}