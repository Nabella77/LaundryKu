console.log("LaundryKu System Ready");

let rowYangDiedit = null;

// Tambah Pelanggan
function tambahPelanggan() {

    const nama = document.getElementById("inputNama").value.trim();
    const noHP = document.getElementById("inputNoHP").value.trim();

    if (nama === "" || noHP === "") {
        alert("Mohon lengkapi data!");
        return;
    }

    const tbody = document.getElementById("tbodyPelanggan");

    const jumlahBaris = tbody.rows.length + 1;

    const row = tbody.insertRow();

    row.innerHTML = `
        <td>${jumlahBaris}</td>
        <td>${nama}</td>
        <td>${noHP}</td>
        <td>
            <button class="btn btn-warning btn-sm me-2"
                onclick="editPelanggan(this)">
                Edit
            </button>

            <button class="btn btn-danger btn-sm"
                onclick="hapusPelanggan(this)">
                Hapus
            </button>
        </td>
    `;

    document.getElementById("inputNama").value = "";
    document.getElementById("inputNoHP").value = "";
}

// Edit Pelanggan
function editPelanggan(btn) {

    rowYangDiedit = btn.parentElement.parentElement;

    document.getElementById("editNama").value =
        rowYangDiedit.cells[1].innerText;

    document.getElementById("editNoHP").value =
        rowYangDiedit.cells[2].innerText;

    const modal = new bootstrap.Modal(
        document.getElementById("editModal")
    );

    modal.show();
}

// Simpan Edit
function simpanEdit() {

    const namaBaru =
        document.getElementById("editNama").value.trim();

    const noHPBaru =
        document.getElementById("editNoHP").value.trim();

    if (namaBaru === "" || noHPBaru === "") {
        alert("Data tidak boleh kosong!");
        return;
    }

    rowYangDiedit.cells[1].innerText = namaBaru;
    rowYangDiedit.cells[2].innerText = noHPBaru;

    bootstrap.Modal.getInstance(
        document.getElementById("editModal")
    ).hide();
}

// Hapus Pelanggan
function hapusPelanggan(btn) {

    if (confirm("Yakin ingin menghapus pelanggan ini?")) {

        btn.parentElement.parentElement.remove();

        updateNomor();
    }
}

// Perbarui Nomor Urut
function updateNomor() {

    const rows =
        document.querySelectorAll("#tbodyPelanggan tr");

    rows.forEach((row, index) => {

        row.cells[0].innerText = index + 1;

    });
}

