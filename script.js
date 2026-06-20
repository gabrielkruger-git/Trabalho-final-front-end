async function cliqueBotao() {

    const cep =
        document.getElementById("inputCEP").value;

    const resultado =
        document.getElementById("resultadoCEP");

    try {

        const response = await fetch(
            `https://brasilapi.com.br/api/cep/v1/${cep}`
        );

        const json = await response.json();

        resultado.innerHTML = `
            <p><strong>CEP:</strong> ${json.cep}</p>
            <p><strong>Rua:</strong> ${json.street}</p>
            <p><strong>Bairro:</strong> ${json.neighborhood}</p>
            <p><strong>Cidade:</strong> ${json.city}</p>
            <p><strong>Estado:</strong> ${json.state}</p>
        `;

    } catch {

        resultado.innerHTML =
            "<p>CEP não encontrado.</p>";

    }

}

async function consultarDDD() {

    const ddd =
        document.getElementById("inputDDD").value;

    const resultado =
        document.getElementById("resultadoDDD");

    try {

        const response = await fetch(
            `https://brasilapi.com.br/api/ddd/v1/${ddd}`
        );

        const json = await response.json();

        resultado.innerHTML = `
            <p><strong>Estado:</strong> ${json.state}</p>
            <p><strong>Cidades:</strong></p>
            <p>${json.cities.join(", ")}</p>
        `;

    } catch {

        resultado.innerHTML =
            "<p>DDD não encontrado.</p>";

    }

}

async function consultarCNPJ() {

    const cnpj =
        document.getElementById("inputCNPJ").value;

    const resultado =
        document.getElementById("resultadoCNPJ");

    try {

        const response = await fetch(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
        );

        const json = await response.json();

        resultado.innerHTML = `
            <p><strong>Razão Social:</strong> ${json.razao_social}</p>
            <p><strong>Nome Fantasia:</strong> ${json.nome_fantasia}</p>
            <p><strong>Município:</strong> ${json.municipio}</p>
            <p><strong>UF:</strong> ${json.uf}</p>
            <p><strong>Situação:</strong> ${json.descricao_situacao_cadastral}</p>
        `;

    } catch {

        resultado.innerHTML =
            "<p>CNPJ não encontrado.</p>";

    }

}

async function consultarBanco() {

    const codigo =
        document.getElementById("inputBanco").value;

    const resultado =
        document.getElementById("resultadoBanco");

    resultado.innerHTML = "Consultando...";

    try {

        const response = await fetch(
            `https://brasilapi.com.br/api/banks/v1/${codigo}`
        );

        const json = await response.json();

        console.log(json);

        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${json.name || "-"}</p>
            <p><strong>Código:</strong> ${json.code || "-"}</p>
            <p><strong>ISPB:</strong> ${json.ispb || "-"}</p>
        `;

    } catch (erro) {

        console.error(erro);

        resultado.innerHTML =
            "<p>Erro ao consultar banco.</p>";

    }

}

