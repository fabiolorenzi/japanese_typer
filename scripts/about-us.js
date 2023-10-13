document.addEventListener("DOMContentLoaded", async function() {
    const versionJson = await fetch("../media/data/version.json")
        .then(resp => resp.json())
    
    document.getElementById("footer_link").innerText = "Developed by " + versionJson.author;
    document.getElementById("footer_link").href = versionJson.github_url;
    document.getElementById("footer_version").innerText = "V" + versionJson.version;
    document.getElementById("about_version").innerText = "V" + versionJson.version;
    document.getElementById("about_author").innerText = versionJson.author;
    document.getElementById("about_url").href = versionJson.github_url;
});