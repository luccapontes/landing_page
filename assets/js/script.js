qtde_paginas.addEventListener("change", calcularOrcamento)
js.addEventListener("change", calcularOrcamento)
layout_sim.addEventListener("change", calcularOrcamento)
layout_nao.addEventListener("change", calcularOrcamento)
prazo.addEventListener("change", calcularOrcamento)


function calcularOrcamento() {
    let qtde = qtde_paginas.value
    let preco = qtde * 100

    if (js.checked) preco *= 1.1

    if (layout_sim.checked) preco += 500

    let taxaUrgencia = preco * (1.1 - prazo.value * 0.1)
    preco += taxaUrgencia
    label_prazo.innerHTML = `Prazo: ${prazo.value} semana(s)`

    output.innerHTML = "R$ " + preco.toFixed(2)
}

// manipulação do DOM - Document Object Model