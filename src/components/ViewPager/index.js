import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {DetailData} from '..';

export function TabData({detailPinjaman, peminjam, riwayat}) {
  const dataDetailPinjaman = [
    {
      title: 'Nominal Pinjaman',
      subtitle: detailPinjaman.nominalPinjaman,
      prefix: '',
    },
    {
      title: 'Skor Kredit',
      subtitle: detailPinjaman.skorKredit,
      prefix: '',
    },
    {
      title: 'Tenor',
      subtitle: detailPinjaman.tenor,
      prefix: ' hari',
    },
    {
      title: 'Pengembalian Bunga',
      subtitle: detailPinjaman.pengembalianBunga,
      prefix: '',
    },
    {
      title: 'Toleransi Keterlambatan',
      subtitle: detailPinjaman.terlambat,
      prefix: '',
    },
    {
      title: 'Tenor Minimal',
      subtitle: detailPinjaman.tenorMin,
      prefix: ' hari',
    },
  ];
  const dataDetailPinjaman2 = [
    {
      title: 'Jenis Pinjaman',
      subtitle: detailPinjaman.jenisPinjaman,
      prefix: '',
    },
    {title: 'Bunga Efektif', subtitle: detailPinjaman.bunga, prefix: '% p.a'},
    {
      title: 'Pengembalian Pokok',
      subtitle: detailPinjaman.pengembalianPokok,
      prefix: '',
    },
    {title: 'Beragunan', subtitle: detailPinjaman.beragunan, prefix: ''},

    {
      title: 'Asuransi',
      subtitle: detailPinjaman.asuransi,
      prefix: '',
    },
  ];
  const dataInformasiPeminjam = [
    {
      title: 'Peminjam',
      subtitle: peminjam.nama,
      prefix: '',
    },
    {title: 'Industri', subtitle: peminjam.industri, prefix: ''},
    {
      title: 'Provinsi',
      subtitle: peminjam.provinsi,
      prefix: '',
    },
    {title: 'Tenor', subtitle: detailPinjaman.tenor, prefix: ' hari'},
    {
      title: 'Status Lokasi Usaha',
      subtitle: peminjam.statusLokasiUsaha,
      prefix: '',
    },
  ];
  const dataInformasiPeminjam2 = [
    {
      title: 'Bentuk Usaha',
      subtitle: peminjam.bentukUsaha,
      prefix: '',
    },
    {title: 'Tahun Berdiri', subtitle: peminjam.tahunBerdiri, prefix: ''},
    {
      title: 'Jumlah Pegawai',
      subtitle: peminjam.jumlahPegawai,
      prefix: '',
    },
    {
      title: 'Pengembalian Pokok',
      subtitle: detailPinjaman.pengembalianPokok,
      prefix: '',
    },
  ];
  const dataRiwayatPinjaman = [
    {
      title: 'Dalam Penggalangan',
      subtitle: riwayat.dalamPenggalangan,
      prefix: '',
    },
    {title: 'Nilai Total Pinjaman', subtitle: riwayat.nilaiTotal, prefix: ''},
    {
      title: 'Pinjaman Dipercepat',
      subtitle: riwayat.pinjamanDipercepat,
      prefix: '',
    },
    {title: 'Terlambat', subtitle: riwayat.terlambat, prefix: ' hari'},
  ];
  const dataRiwayatPinjaman2 = [
    {
      title: 'Pinjaman Aktif',
      subtitle: riwayat.pinjamanAktif,
      prefix: '',
    },
    {title: 'Nilai Pinjaman Lunas', subtitle: riwayat.lunas, prefix: ''},
    {
      title: 'Tepat Waktu',
      subtitle: riwayat.tepatWaktu,
      prefix: '',
    },
  ];
  return (
    <ScrollableTabView
      tabBarBackgroundColor="#fff"
      tabBarActiveTextColor="#1b78e2"
      tabBarInactiveTextColor="#9C9C9C"
      tabBarTextStyle={{fontFamily: 'AkwePro-DemiBold', fontSize: 16}}
      tabBarUnderlineStyle={{backgroundColor: '#1b78e2'}}
      style={{marginTop: 15}}
      onScroll={(e) => console.log(e)}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        tabLabel="Detail Pinjaman">
        <DetailData arr={dataDetailPinjaman} arr2={dataDetailPinjaman2} />
      </ScrollView>
      <ScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        tabLabel="Informasi Peminjam">
        <DetailData arr={dataInformasiPeminjam} arr2={dataInformasiPeminjam2} />
      </ScrollView>
      <ScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        tabLabel="Riwayat Pinjaman">
        <DetailData arr={dataRiwayatPinjaman} arr2={dataRiwayatPinjaman2} />
      </ScrollView>
    </ScrollableTabView>
  );
}
