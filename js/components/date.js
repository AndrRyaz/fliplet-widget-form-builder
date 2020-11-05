var DATE_FORMAT = 'YYYY-MM-DD';

Fliplet.FormBuilder.field('date', {
  name: 'Date picker',
  category: 'Text inputs',
  props: {
    placeholder: {
      type: String
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      datePicker: null
    }
  },
  validations: function() {
    var rules = {
      value: {}
    };

    if (this.required) {
      rules.value.required = window.validators.required;
    }
    return rules;
  },
  computed: {
    isWeb: function() {
      return Fliplet.Env.get('platform') === 'web'
    }
  },
  mounted: function() {
    var $vm = this;

    if (Fliplet.Env.get('platform') === 'web') {
      this.datePicker = $(this.$el).find('input.date-picker').datepicker({
        format: "yyyy-mm-dd",
        todayHighlight: true,
        autoclose: true
      }).on('changeDate', function(e) {
        $vm.value = moment(e.date).format(DATE_FORMAT);
      });

      this.datePicker.datepicker('setDate', this.value || new Date());
    }

    if (!this.value) {
      // HTML5 date field wants YYYY-MM-DD format
      $vm.updateValue(moment().format('YYYY-MM-DD'));
    }
    $vm.$v.$reset();
  },
  watch: {
    value: function(val) {
      if (Fliplet.Env.get('platform') === 'web') {
        this.datePicker.datepicker('setDate', val);
      }

      this.highlightError();
      this.$emit('_input', this.name, val);
    }
  }
});
