document.addEventListener("DOMContentLoaded", function() {

    const downloadBtn = document.getElementById("downloadBtn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function() {

            const resumePath = "resume.pdf";

            const link = document.createElement("a");
            link.href = resumePath;
            link.download = "Your_Name_FullStack_Resume.pdf";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            downloadBtn.innerText = "Downloading...";
            downloadBtn.style.opacity = "0.7";

            setTimeout(() => {
                downloadBtn.innerText = "Download Resume";
                downloadBtn.style.opacity = "1";
            }, 2000);
        });
    }

});