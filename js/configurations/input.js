Fliplet.FormBuilder.configuration('input', {
  template: [
    '<div>',
      '<div class="form-group">',
        '<label>Field name</label>',
        '<input class="form-control" type="text" v-model="name" placeholder="Field name" />',
      '</div>',
      '<div class="form-group">',
        '<label>Default value</label>',
        '<input class="form-control" type="text" v-model="value" placeholder="Default value" />',
      '</div>',
    '<div>'
  ].join('')
});