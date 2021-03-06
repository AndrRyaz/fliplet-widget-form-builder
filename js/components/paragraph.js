Fliplet.FormBuilder.field('paragraph', {
  name: 'Paragraph',
  category: 'Formatting',
  submit: false,
  props: {
    label: undefined,
    showLabel: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: 'Paragraph'
    }
  },
  computed: {
    htmlValue: function() {
      return this.value.replace(/\r?\n/g, '<br />');
    }
  }
});
