Fliplet.FormBuilder.field('number', {
  name: 'Number input',
  category: 'Text inputs',
  props: {
    placeholder: {
      type: String
    },
    positiveOnly: {
      type: Boolean,
      default: false
    },
    decimals: {
      type: Number,
      default: 0
    }
  },
  validations: function () {
    var rules = {
      value: {
        integer: window.validators.integer
      }
    };

    if (this.required) {
      rules.value.required = window.validators.required;
    }

    if (this.positiveOnly) {
      rules.value.minValue = window.validators.minValue(0);
    }

    if (this.decimals > 0) {
      delete rules.value.integer;
      rules.value.decimal = this.decimalValidator(this.decimals);
    }

    return rules;
  },
  methods: {
    decimalValidator: function (maxNumbersAfrerPoint) {
      return window.validators.helpers.withParams(
        {
          type: 'decimalValidator',
          value: maxNumbersAfrerPoint
        },
        function (value) {
          if (!value) {
            return false;
          }

          var decimal = /^(-?\d+\.?\d{0,9}|\.\d{1,10})$/;

          if (!decimal.test(value)) {
            return false;
          }

          value = parseFloat(value);

          if(_.isNaN(value)) {
            return false;
          }

          var currentNumbersAfterPoint = 0;

          if (Math.floor(value) !== value) {
            var valueParts = value.toString().split(".");
            currentNumbersAfterPoint = valueParts[1] ? valueParts[1].length : 0;
          }

          return maxNumbersAfrerPoint >= currentNumbersAfterPoint;
        }
      );
    }
  }
});
