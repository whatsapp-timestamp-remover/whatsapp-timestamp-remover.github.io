function openToast() {
    // Mostrar Toast //
    document.getElementById("toast").classList.add("visible");

    setTimeout(() => {
        // Ocultar Toast //
        document.getElementById("toast").classList.remove("visible");
    }, 2000);
}
