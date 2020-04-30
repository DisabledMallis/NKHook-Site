$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: `https://api.github.com/repos/Flare-Client/Flare-Client/releases/latest`,
        crossDomain: true,
        success: function(result) {
            $("#github").html(
                `<p class="releases"><span class="font-weight-bold">${
          result["name"]
        }</span> || <span class="font-weight-bold">${result["body"]}</span>
                <br/>Created at <span class="font-weight-bold">${new Date(
                  Date.parse(result["created_at"])
                ).toDateString()}</span></p><a href="${
          result["assets"][0]["browser_download_url"]
        }"><button type="button" class="btn download">Download</button></a>`
            );

            return;
        }
    });
});