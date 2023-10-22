let kChecker = [];

function renderKanjis(kanjis, totalKanjis, randomSequence, difficulty) {
    kChecker = kanjis;
    console.log(totalKanjis);
    console.log(randomSequence);
    document.getElementById("kanjis_test_bottom").innerHTML = `
        <div class="kanjis_test_bottom_body">
            <div class="kanjis_test_bottom_left">
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[0]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[0].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_one">${kanjis[0].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_one">
                    <h2>${kanjis[0].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[1]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[1].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_two">${kanjis[1].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_two">
                    <h2>${kanjis[1].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[2]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[2].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_three">${kanjis[2].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_three">
                    <h2>${kanjis[2].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[3]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[3].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_four">${kanjis[3].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_four">
                    <h2>${kanjis[3].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[4]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[4].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_five">${kanjis[4].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_five">
                    <h2>${kanjis[4].meaning}</h2>
                </div>
            </div>
            <div class="kanjis_test_bottom_right">
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[5]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[5].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_six">${kanjis[5].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_six">
                    <h2>${kanjis[5].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[6]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[6].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_seven">${kanjis[6].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_seven">
                    <h2>${kanjis[6].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[7]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[7].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_eight">${kanjis[7].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_eight">
                    <h2>${kanjis[7].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[8]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[8].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_nine">${kanjis[8].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_nine">
                    <h2>${kanjis[8].meaning}</h2>
                </div>
                <div class="kanjis_test_single">
                    <div class="kanjis_test_single_target">
                        <h1>${totalKanjis[randomSequence[9]].kanji}</h1>
                    </div>
                    <div class="kanjis_test_single_label">
                        ${difficulty == 0 ? `<p>${kanjis[9].example_reading}</p>` : ""}
                        <h1 id="kanjis_label_ten">${kanjis[9].example_value}</h1>
                    </div>
                    <input type="text" id="kanjis_input_ten">
                    <h2>${kanjis[9].meaning}</h2>
                </div>
            </div>
        </div>
    `;
};

function validateKanjisForm() {
    let i_one = document.getElementById("kanjis_input_one").value;
    let i_two = document.getElementById("kanjis_input_two").value;
    let i_three = document.getElementById("kanjis_input_three").value;
    let i_four = document.getElementById("kanjis_input_four").value;
    let i_five = document.getElementById("kanjis_input_five").value;
    let i_six = document.getElementById("kanjis_input_six").value;
    let i_seven = document.getElementById("kanjis_input_seven").value;
    let i_eight = document.getElementById("kanjis_input_eight").value;
    let i_nine = document.getElementById("kanjis_input_nine").value;
    let i_ten = document.getElementById("kanjis_input_ten").value;

    if (
        kChecker[0].simple_reading == i_one && kChecker[1].simple_reading == i_two && kChecker[2].simple_reading == i_three &&
        kChecker[3].simple_reading == i_four && kChecker[4].simple_reading == i_five && kChecker[5].simple_reading == i_six &&
        kChecker[6].simple_reading == i_seven && kChecker[7].simple_reading == i_eight && kChecker[8].simple_reading == i_nine &&
        kChecker[9].simple_reading == i_ten
    ) {
        alert("Successful!");
        window.location.replace("tests.html");
    } else {
        alert("The forms are not correct. Please check again.");
    };
};

document.addEventListener("DOMContentLoaded", async function() {
    const versionJson = await fetch("../media/data/version.json")
        .then(resp => resp.json())

    const kanjisJson = await fetch("../media/data/kanjis.json")
        .then(resp => resp.json());

    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get("difficulty");

    let data = kanjisJson.value;

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

    let dataPreFiltered = [];
    randomSequence.forEach(x => dataPreFiltered.push(data[x]));

    let dataFiltered = [];
    for (x = 0; x < 10; x++) {
        let temp = Math.floor(Math.random() * dataPreFiltered[x].values.length);
        dataFiltered.push(dataPreFiltered[x].values[temp]);
    };

    renderKanjis(dataFiltered, kanjisJson.value, randomSequence, difficulty);
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;

    document.getElementById("kanjis_test_title").innerText = `Kanjis Test - Level ${difficulty}`;
});