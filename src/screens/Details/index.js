import React from 'react';
import {StatusBar, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  Text,
  CardPinjaman,
  TabData,
  ButtonPrimary,
  Header,
} from '../../components';
import Gap from '../../utils/Gap';
import {ImMicrosoft} from '../../assets';

export default function Details(props) {
  const {detail, peminjam, riwayat} = props.route?.params;

  const dataDetailPinjaman = {
    nominalPinjaman: detail?.nilaiPinjaman,
    skorKredit: detail?.skorKredit,
    jenisPinjaman: detail?.jenisPinjaman,
    bunga: detail?.bunga,
    tenor: detail?.tenor,
    pengembalianBunga: detail?.pengembalianBunga,
    pengembalianPokok: detail?.pengembalianPokok,
    tenorMin: detail?.tenorMinimal,
    beragunan: detail?.beragunan ? 'Ya' : 'Tidak',
    asuransi: detail?.asuransi ? 'Ya' : 'Tidak',
    terlambat: detail?.toleransiKeterlambatan,
  };
  const dataPeminjam = {
    nama: peminjam?.nama,
    industri: peminjam?.industri,
    provinsi: peminjam?.provinsi,
    statusLokasiUsaha: peminjam?.statusLokasiUsaha,
    bentukUsaha: peminjam?.bentukUsaha,
    tahunBerdiri: peminjam?.tahunBerdiri,
    jumlahPegawai: peminjam?.jumlahPegawai,
  };
  const dataRiwayatPinjaman = {
    nilaiTotal: riwayat?.nilaiTotal,
    dalamPenggalangan: riwayat?.dalamPenggalangan,
    pinjamanDipercepat: riwayat?.pinjamanDipercepat,
    terlambat: riwayat?.terlambat,
    pinjamanAktif: riwayat?.pinjamanAktif,
    lunas: riwayat?.lunas,
    tepatWaktu: riwayat?.tepatWaktu,
  };
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        title={detail?.nama}
        onPressBack={() => props.navigation.goBack()}
      />
      <Gap height={10} />
      <View style={{backgroundColor: '#F5F6FA'}}>
        <CardPinjaman
          width="100"
          mh="0"
          mv="0"
          nama={detail?.nama}
          bg={ImMicrosoft}
          bunga={detail?.bunga}
          jenisPinjaman={detail?.jenisPinjaman}
          nilaiPinjaman={detail?.nilaiPinjaman}
          tenor={detail?.tenor}
          skorKredit={detail?.skorKredit}
          sisaWaktu={detail?.sisaWaktu}
        />
      </View>
      <TabData
        detailPinjaman={dataDetailPinjaman}
        peminjam={dataPeminjam}
        riwayat={dataRiwayatPinjaman}
      />
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          paddingVertical: 10,
          width: wp('100'),
        }}>
        <ButtonPrimary activeOpacity={0.8}>
          <Text color="#fff">Beri Pendanaan</Text>
        </ButtonPrimary>
      </View>
    </>
  );
}
