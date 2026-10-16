function pindahLayar(nomor) {
  document.querySelectorAll(".layar").forEach(function(layar) {
    layar.style.display = "none";
  });

  document.getElementById("layar" + nomor).style.display =
    nomor === 1 ? "flex" : "block";
}