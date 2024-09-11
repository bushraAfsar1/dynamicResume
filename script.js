// console.log("hi")
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var previewButton = document.getElementById("preview-btn");
    var editButton = document.getElementById("edit-btn");
    var resumePreview = document.getElementById("resume-preview");
    var previewContent = document.getElementById("preview-content");
    previewButton.addEventListener("click", function () {
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var address = formData.get("address");
        var education = formData.get("education");
        var experience = formData.get("experience");
        var skills = formData.get("skills");
        previewContent.innerHTML = "\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>Education:</strong></p>\n            <p>").concat(education.replace(/\n/g, "<br>"), "</p>\n            <p><strong>Experience:</strong></p>\n            <p>").concat(experience.replace(/\n/g, "<br>"), "</p>\n            <p><strong>Skills:</strong></p>\n            <p>").concat(skills.replace(/\n/g, "<br>"), "</p>\n        ");
        form.style.display = "none";
        previewButton.style.display = "none";
        resumePreview.style.display = "block";
    });
    editButton.addEventListener("click", function () {
        resumePreview.style.display = "none";
        previewButton.style.display = "block";
        form.style.display = "block";
    });
});
