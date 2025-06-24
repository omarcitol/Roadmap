$(document).ready(function() {
    $.ajax({
        url: 'data/roadmap.json',
        dataType: 'json',
        success: function(data) {
            let html = '';
            data.etapas.forEach(etapa => {
                html += `
                <div class="etapa ${etapa.completado ? 'completada' : ''}">
                    <h2>${etapa.titulo}</h2>
                    <ul>
                        ${etapa.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    ${etapa.completado ? '✅' : '⌛'}
                </div>`;
            });
            $('#roadmap-container').html(html);
        },
        error: function(xhr, status, error) {
            console.error("Error cargando el roadmap:", error);
        }
    });
});