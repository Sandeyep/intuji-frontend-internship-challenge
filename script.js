function toggleContent(icon) {
    var paragraph = icon.nextElementSibling;
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}