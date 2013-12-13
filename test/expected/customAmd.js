define(['hogan','otherDependency'], function(Hogan,$) {
this["Templates"] = this["Templates"] || {};
this["Templates"]["test/fixtures/template.html"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<article>");_.b("\n" + i);_.b("  <h1>");_.b(_.v(_.f("title",c,p,0)));_.b("</h1>");_.b("\n" + i);_.b("  <p>");_.b(_.v(_.f("content",c,p,0)));_.b("</p>");_.b("\n" + i);_.b("</article>");return _.fl();;});
return this["Templates"];
});