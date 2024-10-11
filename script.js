// Event listener for form submission
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun kendi işlemini durduruyoruz

    // Formdan girilen değerleri alıyoruz
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Verilerin tabloya eklenmesi
    addDataToTable(name, age);

    // Formu sıfırlıyoruz
    document.getElementById("dataForm").reset();
});

// Verileri tabloya ekleyen fonksiyon
function addDataToTable(name, age) {
    // Tablonun body kısmını alıyoruz
    const tableBody = document.getElementById("dataTable");

    // Yeni bir satır oluşturuyoruz
    const newRow = tableBody.insertRow();

    // İsimi ve yaşı ekliyoruz
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = age;
}

// Örnek bir for loop: Tablodaki mevcut verileri döngüyle yazdırma
const rows = document.getElementById("dataTable").rows;
for (let i = 0; i < rows.length; i++) {
    console.log(`Row ${i}:`, rows[i].textContent);
}
