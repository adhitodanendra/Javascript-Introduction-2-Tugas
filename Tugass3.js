function InputNilai(nilaiAwal, nilaiAkhir, dataArray) {
    //nilaiAwal harus lebih kecil dari nilaiAkhir
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }

    //jumlah elemen dalam dataArray harus lebih dari 5
    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }

    //nilai yang berada di antara nilaiAwal dan nilaiAkhir
    let hasilSeleksi = dataArray.filter(function(nilai) {
        return nilai > nilaiAwal && nilai < nilaiAkhir;
    });

    //mengurutkan hasil seleksi
    hasilSeleksi.sort(function(a, b) {
        return a - b;
    });

    //memeriksa apakah ada nilai yang ditemukan
    if (hasilSeleksi.length === 0) {
        return "Nilai tidak ditemukan";
    }

    // Menampilkan hasil seleksi
    return hasilSeleksi;
}

//penggunaan fungsi
console.log(InputNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])); 
//Output: [8, 14, 17]

console.log(InputNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
//Output: "Nilai akhir harus lebih besar dari nilai awal"

console.log(InputNilai(4, 17, [2, 25, 4]));
//Output: "Jumlah angka dalam dataArray harus lebih dari 5"

console.log(InputNilai(5, 17, [2, 25, 4, 1, 30, 18]));
//Output: "Nilai tidak ditemukan"