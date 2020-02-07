angular.module("myApp", ['ngSanitize'])
  .controller("myCtrl", function($scope) {
  var editorName=["#editor","#editor1"];
     for(var i=0;i<editorName.length;i++)
     {
      var editorvalue=editorName[i];
      var quill = new Quill(editorvalue, {
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        ['bold', 'italic', 'underline', 'link'],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['clean'],                                         // remove formatting button
        [{ 'list': 'ordered'}, { 'list': 'bullet' }]
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });
     (editorvalue=="#editor")?quill.clipboard.dangerouslyPasteHTML("<strong>hello</strong>"):quill.clipboard.dangerouslyPasteHTML("<strong>hello1</strong>");
     }
  });