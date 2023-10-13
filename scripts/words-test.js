document.addEventListener("DOMContentLoaded", async function() {
    const versionJson = await fetch("../media/data/version.json")
        .then(resp => resp.json())

    const urlParams = new URLSearchParams(window.location.search);
    const difficulty = urlParams.get("difficulty");
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;

    document.getElementById("words_test_title").innerText = `Words Test - Level ${difficulty}`;
});