function botonAdd() {
    var comidas = document.querySelectorAll(".beverage");

    var cantidadTotal = 0;
    var costoTotal = 0;
    var detallePedido = "";

    comidas.forEach(function (comida) {
        var inputCantidad = comida.querySelector('input[type="number"]');
        var spanPrecio = comida.querySelector(".price");
        var labelComida = comida.querySelector("label");

        var nombreComida = labelComida.textContent;
        var cantidad = parseInt(inputCantidad.value);
        var precio = parseFloat(spanPrecio.textContent.replace("$", ""));

        if (cantidad > 0) {
            cantidadTotal += cantidad;
            costoTotal += cantidad * precio;
            detallePedido +=
                cantidad +
                "x " +
                nombreComida +
                " - $" +
                (cantidad * precio).toFixed(2) +
                "\n";
        }
    });

    var mensaje =
        "Se agregó a la bandeja:\nCantidad total: " +
        cantidadTotal +
        "\nCosto total: $" +
        costoTotal.toFixed(2) +
        "\n\nDetalle del pedido:\n" +
        detallePedido;
    alert(mensaje);

    var numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(function (number) {
        number.value = 0;
    });
}
