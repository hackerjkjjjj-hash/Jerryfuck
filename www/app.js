cat << 'EOF' > www/app.js
document.getElementById("btnAction").addEventListener("click", function() {
    // បង្ហាញសារនៅលើអេក្រង់
    alert("អស្ចារ្យណាស់! App របស់អ្នកដំណើរការបានយ៉ាងល្អ 🎉");
    
    // ប្តូរអត្ថបទ និងពណ៌ប៊ូតុងបន្ទាប់ពីចុចរួច
    this.innerText = "បានចុចរួចរាល់ ✅";
    this.style.background = "#28a745";
});
EOF
