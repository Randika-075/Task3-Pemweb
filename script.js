
//3
function klik(){
//1
const judul = document.getElementById('judul');
judul.innerHTML = "Ngeyel";

const bahan = document.getElementById('bahan');
bahan.innerHTML = '<table border="10" align="center"> <tr> <td> <h1>Randika Sagala</h1> <br> <h2>Tentang Saya</h2> <p>Nama saya Randika Sagala biasa dipanggil Dika. Saya berasal dari Sumatera Utara dan saya merupakan mahasiswa di Institut Teknologi Sumatera.</p> <br> <h2>Kontak</h2> <a href="wa.me/+6282273476690">Klik Disini</a>';
//2
const elemenH2 = document.createElement('h2');
const isiTeksH2 = document.createTextNode('SALAM KENAL DEH KALAU GITU');

elemenH2.append(isiTeksH2);

const cetak = document.getElementById('body');
cetak.append(elemenH2);

}

