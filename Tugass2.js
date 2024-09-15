const names = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
    'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
    'Olivia', 'Penelope'
  ];
  
  //untuk mencari nama berdasarkan substring dan batasan jumlah output
  function searchName(searchTerm, limit, callback) {
    const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const limitedNames = filteredNames.slice(0, limit);
    
    callback(limitedNames);
  }
  
  // Callback function untuk menampilkan hasil pencarian
  function displayResult(result) {
    console.log(result);
  }
  
  // Contoh penggunaan
  searchName("an", 4, displayResult);