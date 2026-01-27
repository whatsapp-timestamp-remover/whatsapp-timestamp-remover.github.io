// [d/m, h:mm] Nom: //
const REGEX_TIMESTAMP_I_NOM = /^\[(\d{1,2}\/\d{1,2}),\s*(\d{1,2}:\d{2})\]\s+([^:\n]+):\s*/;
const REGEX_NOM = /\]\s([^:]+):/;

function text_input(text) {

    // text = parsejarEsborrarClaus(text);
    text = parsejarAgrupatNoms(text);

    document.getElementById("textarea-sortida").value = text;
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

        let nom = l.match(REGEX_NOM)?.[1].trim();
        if (!nom) { linies.push(l); return; }

        // Primera línia del nou parlant //
        if (nomPrevi != nom) {
            if (i != 0) linies.push("");
            linies.push(`${nom}:`);
        }
        
        linies.push(l.trim().replace(REGEX_TIMESTAMP_I_NOM, ""));
        
        nomPrevi = nom;
        return;
    });

    return linies.join("\n");
}
