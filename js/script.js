// [d/m, h:mm] Nom: //
const REGEX_TIMESTAMP_I_NOM = /^\[(\d{1,2}\/\d{1,2}),\s*(\d{1,2}:\d{2})\]\s+([^:\n]+):\s*/;

function text_input(text) {




    text = parsejarEsborrarClaus(text);
    

    // text = text.trim();
    document.getElementById("textarea-sortida").value = text;

}


function parsejarEsborrarClaus(text) {
    text = text.split("\n").map(l => {
        return l.trim().replace(REGEX_TIMESTAMP_I_NOM, "");
    }).join("\n");

    return text;
}
