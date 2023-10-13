function renderWords(words, randomSequence, difficulty) {
    document.getElementById("words_test_bottom").innerHTML = `
        <div class="words_test_bottom_body">
            <div class="words_test_bottom_left">
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[0].Kanji != words[0].Kana ? `<p>${words[0].Kana}</p>` : ""}
                        <h1 id="word_label_one">${difficulty == 3 && words[0].Kanji ? words[0].Kanji : words[0].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_one">
                    <h2>${words[0].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[1].Kanji != words[1].Kana ? `<p>${words[1].Kana}</p>` : ""}
                        <h1 id="word_label_two">${difficulty == 3 && words[1].Kanji ? words[1].Kanji : words[1].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_two">
                    <h2>${words[1].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[2].Kanji != words[2].Kana ? `<p>${words[2].Kana}</p>` : ""}
                        <h1 id="word_label_three">${difficulty == 3 && words[2].Kanji ? words[2].Kanji : words[2].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_three">
                    <h2>${words[2].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[3].Kanji != words[3].Kana ? `<p>${words[3].Kana}</p>` : ""}
                        <h1 id="word_label_four">${difficulty == 3 && words[3].Kanji ? words[3].Kanji : words[3].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_four">
                    <h2>${words[3].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[4].Kanji != words[4].Kana ? `<p>${words[4].Kana}</p>` : ""}
                        <h1 id="word_label_five">${difficulty == 3 && words[4].Kanji ? words[4].Kanji : words[4].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_five">
                    <h2>${words[4].Meaning}</h2>
                </div>
            </div>
            <div class="words_test_bottom_right">
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[5].Kanji != words[5].Kana ? `<p>${words[5].Kana}</p>` : ""}
                        <h1 id="word_label_six">${difficulty == 3 && words[5].Kanji ? words[5].Kanji : words[5].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_six">
                    <h2>${words[5].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[6].Kanji != words[6].Kana ? `<p>${words[6].Kana}</p>` : ""}
                        <h1 id="word_label_seven">${difficulty == 3 && words[6].Kanji ? words[6].Kanji : words[6].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_seven">
                    <h2>${words[6].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[7].Kanji != words[7].Kana ? `<p>${words[7].Kana}</p>` : ""}
                        <h1 id="word_label_eight">${difficulty == 3 && words[7].Kanji ? words[7].Kanji : words[7].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_eight">
                    <h2>${words[7].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[8].Kanji != words[8].Kana ? `<p>${words[8].Kana}</p>` : ""}
                        <h1 id="word_label_nine">${difficulty == 3 && words[8].Kanji ? words[8].Kanji : words[8].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_nine">
                    <h2>${words[8].Meaning}</h2>
                </div>
                <div class="words_test_single">
                    <div class="words_test_single_label">
                        ${difficulty == 3 && words[9].Kanji != words[9].Kana ? `<p>${words[9].Kana}</p>` : ""}
                        <h1 id="word_label_ten">${difficulty == 3 && words[9].Kanji ? words[9].Kanji : words[9].Kana}</h1>
                    </div>
                    <input type="text" id="word_input_ten">
                    <h2>${words[9].Meaning}</h2>
                </div>
            </div>
        </div>
    `;
};

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

    renderWords(data, randomSequence, difficulty);
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;

    document.getElementById("words_test_title").innerText = `Words Test - Level ${difficulty}`;
});