MktoForms2.onFormRender(function() {
  console.log("override styles ...")
  e = $(".register .mktoForm *")
  e.removeAttr("style")
  $("#mktoForm_3219").removeAttr("style")
})

$(window).resize(function() {
  console.log("override styles ...")
  e = $(".register .mktoForm *")
  e.removeAttr("style")
  $("#mktoForm_3219").removeAttr("style")
})
