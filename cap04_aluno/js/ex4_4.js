const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", ouvirte);

function ouvirte(e) {
    e.preventDefault(); // Evita envio do formulário

    // Obtém o horário do Brasil (exemplo: 14 para 14:00)
    let horaBrasil = Number(frm.inHoraBrasil.value);

    // Calcula o horário na França (diferença de fuso: +5 horas)
    let horaFranca = horaBrasil + 5;

    // Ajusta se ultrapassar 24 horas
    if (horaFranca >= 24) {
        horaFranca -= 24;
    }

    // Exibe a resposta
    resp.innerText = `Horário na França: ${horaFranca}:00`;
}