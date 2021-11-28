export default {
  props: {
    editId: {
      type: Number,
      default: null,
    },
    editData: {
      type: Object,
      default: () => ({ empty: true }),
    },
  },
  watch: {
    editData: {
      handler(newData) {
        this.assignFormEditData(newData)
      },
      deep: true,
    },
  },
  created() {
    this.assignFormEditData(this.editData)
  },
  computed: {
    isEditing() {
      return !!this.editId
    },
  },
  methods: {
    assignFormEditData(data) {
      this.form = { ...this.form, ...data }
    },
  },
}