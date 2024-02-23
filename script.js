function botonAdd() {
    alert("Se agregó a la bandeja");
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    var numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(function (number) {
        number.value = 0;
    });
}
