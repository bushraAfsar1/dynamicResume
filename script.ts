// console.log("hi")
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const previewButton = document.getElementById("preview-btn") as HTMLDivElement;
    const editButton = document.getElementById("edit-btn") as HTMLButtonElement;
    const resumePreview = document.getElementById("resume-preview") as HTMLElement;
    const previewContent = document.getElementById("preview-content") as HTMLElement;

    previewButton.addEventListener("click", () => {
        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const address = formData.get("address") as string;
        const education = formData.get("education") as string;
        const experience = formData.get("experience") as string;
        const skills = formData.get("skills") as string;


        previewContent.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Education:</strong></p>
            <p>${education.replace(/\n/g, "<br>")}</p>
            <p><strong>Experience:</strong></p>
            <p>${experience.replace(/\n/g, "<br>")}</p>
            <p><strong>Skills:</strong></p>
            <p>${skills.replace(/\n/g, "<br>")}</p>
        `;

        form.style.display = "none";
        previewButton.style.display= "none";
        resumePreview.style.display = "block";
    });

    editButton.addEventListener("click", () => {
        resumePreview.style.display = "none";
        previewButton.style.display= "block";

        form.style.display = "block";
    });
});
