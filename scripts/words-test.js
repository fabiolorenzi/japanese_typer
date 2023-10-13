document.addEventListener("DOMContentLoaded", async function() {
    const versionJson = await fetch("../media/data/version.json")
        .then(resp => resp.json())

    const wordsJson = await fetch("../media/data/words.json")
        .then(resp => resp.json());

    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get("difficulty");

    let data = [];
    for (x = 0; x < wordsJson.value.length; x++) {
        if (difficulty == 0) {
            wordsJson.value[x].Katakana == false && data.push(wordsJson.value[x]);
        } else if (difficulty == 1) {
            wordsJson.value[x].Katakana && data.push(wordsJson.value[x]);
        } else {
            data.push(wordsJson.value[x]);
        };
    };

    let randomSequence = [];
    for (x = 0; x < 10; x++) {
        let passed = false;
        while (!passed) {
            let temp = Math.floor(Math.random() * data.length);
            if (randomSequence.length == 0 || !randomSequence.includes(temp)) {
                randomSequence.push(temp);
                passed = true;
            };
        };
    };
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;

    document.getElementById("words_test_title").innerText = `Words Test - Level ${difficulty}`;
});