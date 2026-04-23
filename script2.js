function showCertificate(imagePath, title) {
  document.getElementById("certTitle").innerText = title;

  const img = document.getElementById("certImage");
  img.src = imagePath;
  img.style.display = "block";

  document.querySelector(".cert-viewer").scrollIntoView({
    behavior: "smooth"
  });
}