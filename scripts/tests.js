function wordsTest() {
    difficulty = document.getElementById("words_input").value;
    difficulty >= 0 && difficulty < 4
        ? window.location.replace(`words-test.html?difficulty=${difficulty}`)
        : alert("The input value for the Words Test has to be 0 (just Hiragana), 1 (just Katakana), 2 (just Kana) or 3 (all).");
};

function kanjisTest() {
    difficulty = document.getElementById("kanjis_input").value;
    difficulty >= 0 && difficulty < 1
        ? window.location.replace(`kanjis-test.html?difficulty=${difficulty}`)
        : alert("The input value for the Kanjis Test has to be 0 (easy mode) or 1 (hard mode).");
};

document.addEventListener("DOMContentLoaded", async function() {
    const versionJson = await fetch("../media/data/version.json")
        .then(resp => resp.json())
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;
});