$(document).ready(function() {
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();
        const tarefa = $('#input-tarefa').val();
        if (tarefa) {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>');
            $('#input-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completada');
    });
});
