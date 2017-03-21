this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.components.checkbox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template v-for=\"(option, index) in options\">\n  <label :for=\"name + '-' + index\">\n    <input type=\"checkbox\" :id=\"name + '-' + index\" :name=\"name\" v-model=\"value\" :value=\"option.id\"/> {{ option.id }}&nbsp;&nbsp;&nbsp;\n  </label>\n</template>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.field"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"form-group\">\n  <label class=\"col-sm-12 control-label\" :for=\"name\">{{ label }}</label>\n  <div class=\"col-sm-12\">\n    "
    + ((stack1 = ((helper = (helper = helpers.template || (depth0 != null ? depth0.template : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"template","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input :name=\"name\" :id=\"name\" class=\"form-control\" type=\"text\" v-model=\"value\" :placeholder=\"placeholder\" :required=\"required\" />";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.radio"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template v-for=\"(option, index) in options\">\n  <label :for=\"name + '-' + index\">\n    <input type=\"radio\" :id=\"name + '-' + index\" :name=\"name\" v-model=\"value\" :value=\"option.id\"/> {{ option.id }}&nbsp;&nbsp;&nbsp;\n  </label>\n</template>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.components.select"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<select class=\"form-control\" :name=\"name\" :id=\"name\" v-model=\"value\" :required=\"required\">\n  <option v-if=\"placeholder\" value=\"\" disabled=\"disabled\">{{ placeholder }}</option>\n  <option v-for=\"option in options\" :value=\"option.id\" :disabled=\"option.disabled\">\n    {{ option.id }}\n  </option>\n</select>";
},"useData":true});