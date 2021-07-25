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
    editData(newData) {
      this.assignFormEditData(newData)
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