$.ajax({
    type: "GET",
    url: `https://api.github.com/repos/TDToolbox/NKHook6/releases`,
    crossDomain: true,
    success: function(result) {
        var isLatest = true;
        var i = 0;
        result.forEach(release => {
            if(isLatest){
                $("#latest_download").html(`
                <a href="${ release["assets"][0]["browser_download_url"]}">
                <button type="button" class="btn btn-dark">Download latest</button>
                </a>
                `)
            }
            isLatest = false;
            var releaseName = release["name"];
            var releaseDownload = release["assets"][0]["browser_download_url"];
            console.log(releaseName);
            console.log(releaseDownload);

            $("#download_section").append(`
            <tr>
                <td class="download-name">${releaseName}</td>
                <td>
                    <a href="${ release["assets"][0]["browser_download_url"]}">
                        <button type="button" class="btn btn-dark download-button">Download</button>
                    </a>
                </td>
            </tr>
            `);
        });
    }
});