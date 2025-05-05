document.addEventListener('DOMContentLoaded', function() {
    const btnCatalogar = document.getElementById('btnCatalogar');
    const modal = document.getElementById('modal');
    const btnFecharModal = document.querySelector('.fechar-modal');

    btnCatalogar.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    btnFecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});