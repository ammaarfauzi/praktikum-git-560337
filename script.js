// Menangkap elemen tombol dan body
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Memberikan "telinga" agar tombol mendengarkan interaksi klik
themeToggleBtn.addEventListener('click', function() {
    
    // Mengecek apakah saat ini body memiliki atribut data-theme="dark"
    const isDarkMode = bodyElement.getAttribute('data-theme') === 'dark';

    if (isDarkMode) {
        // Jika sedang dark mode, hapus atributnya (kembali ke light mode)
        bodyElement.removeAttribute('data-theme');
        themeToggleBtn.innerText = '🌙 Dark Mode'; // Ubah teks tombol
    } else {
        // Jika sedang light mode, tambahkan atribut dark
        bodyElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️ Light Mode'; // Ubah teks tombol
    }
    
});