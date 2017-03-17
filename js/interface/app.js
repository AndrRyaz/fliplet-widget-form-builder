var data = Fliplet.Widget.getData() || {};

var fields = data.fields || [];

Vue.directive('sortable', {
  inserted: function (el, binding) {
    if (Sortable) {
      new Sortable(el, binding.value || {})
    }
  }
});

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      formFields: Fliplet.FormBuilder.fields(),
      fields: fields,
      activeFieldId: null,
      activeFieldConfigType: null,
      activeField: {}
    }
  },
  methods: {
    onSubmit: function () {
      console.log(JSON.stringify(this.fields, null, 2))
    },
    onSort: function (event) {
      this.fields.splice(event.newIndex, 0, this.fields.splice(event.oldIndex, 1)[0]);
      this.$forceUpdate();
    },
    onAdd: function (event) {
      event.item.remove();
      this.fields.splice(event.newIndex, 0, {
        id: Date.now(),
        type: Fliplet.FormBuilder.fields()[event.oldIndex]
      });
      this.$forceUpdate();
    },
    deleteField: function (index) {
      this.fields.splice(index, 1);
      this.activeFieldConfigType = null;
    },
    onFieldClick: function (field) {
      this.activeFieldId = field.id;
      this.activeFieldConfigType = field.type.toString() + 'Config';
      this.activeField = field;
      this.$forceUpdate();
    }
  },
  mounted: function () {
    var $vm = this;

    Fliplet.Widget.onSaveRequest(function () {
      Fliplet.Widget.save({ fields: $vm.fields }).then(function () {
        Fliplet.Widget.complete();
      });
    });
  }
});