function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
  }
  function equal() {
    var a = document.form1.textview.value;
    if (a) {
      document.form1.textview.value = eval(a);
    }
  }
  function backspace() {
    var a = document.form1.textview.value;
    document.form1.textview.value = a.substring(0, a.length - 1);
  }