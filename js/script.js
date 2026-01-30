// [d/m, h:mm] Nom: //
const REGEX_TIMESTAMP_I_NOM = /^\[((?:\d{1,4}\/){1,2}\d{1,4}),\s*(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM|)?)\]\s+([^:\n]+):\s*/i;
const REGEX_NOM = /\]\s([^:]+):/;

function text_input(text) {

    // text = parsejarEsborrarClaus(text);
    text = parsejarAgrupatNoms(text);

    document.getElementById("textarea-sortida").value = text;
    
    document.getElementById("boto-copiar").disabled = !text;
}


function parsejarEsborrarClaus(text) {
    text = text.split("\n").map(l => {
        return l.trim().replace(REGEX_TIMESTAMP_I_NOM, "");
    }).join("\n");

    return text;
}


function parsejarAgrupatNoms(text) {
    let linies = [];
    let nomPrevi;

    text.split("\n").forEach((l,i) => {
        if (!l) { linies.push(l); return; }

        // Netejar //
        l = l.replace(/^[\u200E\u200F\uFEFF]+/, '');

        let nom = l.match(REGEX_NOM)?.[1].trim();
        if (!nom) { linies.push(l); return; }

        // Primera línia del nou parlant //
        if (nomPrevi != nom) {
            nomPrevi = nom;
            
            if (i != 0) linies.push("");
            linies.push(`${nom}:`);
        }
        
        linies.push(l.trim().replace(REGEX_TIMESTAMP_I_NOM, ""));

        return;
    });

    return linies.join("\n");
}

function copiar() {
    navigator.clipboard?.writeText(
        document.getElementById("textarea-sortida").value
    );

    openToast();
}
