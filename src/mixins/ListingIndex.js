export default {
  data() {
    return {
      data: [],
      pagination: {},
      isLoading: false,
    }
  },
  created() {
    this.loadData()
  },
  watch: {
    query() {
      this.loadData()
    },
  },
  computed: {
    query() {
      return this.$route.query
    },
  },
  methods: {
    getRequest() {
      throw new Error("Must return the request function")
    },
    async loadData() {
      this.isLoading = true
      const { data } = await this.getRequest(this.query)

      this.data = data.data
      this.pagination = data.meta
      this.isLoading = false
    },
    changePage(page) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page,
        },
      })
    },
  },
}