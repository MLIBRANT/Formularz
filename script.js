document.addEventListener () {
    const form = document.getElementById("formularz");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form); 

        fetch(form.action, {
            method: form.method,
            body: formData,
        });

    });
});