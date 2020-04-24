import React from "react";
import { Card } from "react-bootstrap";
export function Footer() {
  return (
    <Card className="card-home">
      <Card.Body>
        <h5>Apa itu coronavirus?</h5>
        <p>
          Coronavirus adalah suatu kelompok virus yang dapat menyebabkan
          penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui
          menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek
          hingga yang lebih serius seperti Middle East Respiratory Syndrome
          (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis
          baru yang ditemukan menyebabkan penyakit COVID-19.
        </p>
        <h5>Apa itu COVID-19?</h5>
        <p>
          COVID-19 adalah penyakit menular yang disebabkan oleh jenis
          coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit
          yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan,
          Tiongkok, bulan Desember 2019.{" "}
        </p>
        <h5>Apa saja gejala COVID-19?</h5>
        <p>
          Gejala-gejala COVID-19 yang paling umum adalah demam, rasa lelah, dan
          batuk kering. Beberapa pasien mungkin mengalami rasa nyeri dan sakit,
          hidung tersumbat, pilek, sakit tenggorokan atau diare, Gejala-gejala
          yang dialami biasanya bersifat ringan dan muncul secara bertahap.
          Beberapa orang yang terinfeksi tidak menunjukkan gejala apa pun dan
          tetap merasa sehat. Sebagian besar (sekitar 80%) orang yang terinfeksi
          berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 6 orang
          yang terjangkit COVID-19 menderita sakit parah dan kesulitan bernapas.
          Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis
          yang sudah ada sebelumnya seperti tekanan darah tinggi, gangguan
          jantung atau diabetes, punya kemungkinan lebih besar mengalami sakit
          lebih serius. Mereka yang mengalami demam, batuk dan kesulitan
          bernapas sebaiknya mencari pertolongan medis.
        </p>
        <h5>Bagaimana cara COVID-19 menyebar?</h5>
        <p>
          Orang dapat tertular COVID-19 dari orang lain yang terjangkit virus
          ini. COVID-19 dapat menyebar dari orang ke orang melalui
          percikan-percikan dari hidung atau mulut yang keluar saat orang yang
          terjangkit COVID-19 batuk atau mengeluarkan napas. Percikan-percikan
          ini kemudian jatuh ke benda-benda dan permukaan-permukaan di sekitar.
          Orang yang menyentuh benda atau permukaan tersebut lalu menyentuh
          mata, hidung atau mulutnya, dapat terjangkit COVID-19. Penularan
          COVID-19 juga dapat terjadi jika orang menghirup percikan yang keluar
          dari batuk atau napas orang yang terjangkit COVID-19. Oleh karena itu,
          penting bagi kita untuk menjaga jarak lebih dari 1 meter dari orang
          yang sakit. WHO terus mengkaji perkembangan penelitian tentang cara
          penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.
        </p>
        <h6>Apakah virus penyebab COVID-19 ini dapat menular melalui udara?</h6>
        <p>
          Menurut penelitian sejauh ini, virus penyebab COVID-19 ini umumnya
          menular melalui kontak dengan percikan dari saluran pernapasan, bukan
          melalui udara. Lihat jawaban sebelumnya tentang “Bagaimana cara
          COVID-19 menyebar?”
        </p>
        <h6>
          Apakah COVID-19 dapat menular dari orang yang tidak menunjukkan
          gejala?
        </h6>
        <p>
          Cara utama penyebaran penyakit ini adalah melalui percikan saluran
          pernapasan yang dihasilkan saat batuk. Risiko penularan COVID-19 dari
          orang yang tidak ada gejala sama sekali sangatlah rendah. Namun,
          banyak orang yang terjangkit COVID-19 hanya mengalami gejala-gejala
          ringan, terutama pada tahap-tahap awal. Karena itu, COVID-19 dapat
          menular dari orang yang, misalnya, hanya batuk ringan tetapi merasa
          sehat. WHO terus mengkaji perkembangan penelitian tentang cara
          penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.
        </p>
        <h6>
          Apakah saya dapat tertular COVID-19 dari feses orang yang terjangkit
          penyakit ini?
        </h6>
        <p>
          Risiko penularan COVID-19 dari feses orang yang terinfeksi COVID-19
          adalah kecil. Penelitian awal memang mengindikasikan bahwa dalam
          kasus-kasus tertentu virus ini bisa ada di feses, tetapi dalam konteks
          wabah yang sedang terjadi ini, rute penularan ini tidak menjadi
          kekhawatiran. WHO terus mengkaji perkembangan penelitian tentang cara
          penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru. Namun
          demikian, karena risiko tetap ada (walaupun kecil), hal ini memperkuat
          alasan mengapa kita harus rajin mencuci tangan setelah menggunakan
          kamar mandi dan sebelum makan.
        </p>
        <a
          class="btn btn-secondary"
          href="https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public"
          role="button"
        >
          Selengkapnya ➤
        </a>
      </Card.Body>
    </Card>
  );
}
export default Footer;