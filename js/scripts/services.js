document.addEventListener("DOMContentLoaded", function () {
    let btnSoftware = document.getElementById(
        "service_software_development_btn"
    );
    let btnSpecialized = document.getElementById(
        "service_specialized_service_btn"
    );
    let btnProjectBased = document.getElementById(
        "service_project_based_services_btn"
    );

    let modalSoftware = document.getElementById("service_1_des");
    let modalSpecialized = document.getElementById("service_2_des");
    let modalProjectBased = document.getElementById("service_3_des");

    function openModal(modal) {
        modal.classList.add("active");
    }

    function closeModal(modal) {
        modal.classList.remove("active");
    }

    btnSoftware.addEventListener("click", function () {
        openModal(modalSoftware);
    });

    btnSpecialized.addEventListener("click", function () {
        openModal(modalSpecialized);
    });

    btnProjectBased.addEventListener("click", function () {
        openModal(modalProjectBased);
    });

    let closeButtons = document.querySelectorAll(".services__modal-close");
    closeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let modal = btn.closest(".services__modal");
            closeModal(modal);
        });
    });
});