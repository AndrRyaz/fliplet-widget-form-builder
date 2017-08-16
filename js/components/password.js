Fliplet.FormBuilder.field('password', {
  name: 'Password input',
  category: 'Text inputs',
  props: {
    fieldType: {
      type: String,
      default: 'password'
    },
    placeholder: {
      type: String
    },
    hash: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    valueConfirmation: {
      type: String
    },
    hasConfirmationError: {
      type: Boolean,
      default: false
    }
  },
  created: function () {
    this.checkPasswordConfirmation();
  },
  methods: {
    updateValue: function () {
      this.$emit('_input', this.name, this.value);
      this.checkPasswordConfirmation();
    },
    checkPasswordConfirmation: function () {
      this.hasConfirmationError = this.confirm && (this.value || this.valueConfirmation) && this.valueConfirmation !== this.value;
    }
  }
});
