import React from 'react';
import {Alert, FlatList, ScrollView, StatusBar, View} from 'react-native';
import {
  HomeHeader,
  CardButton as CB,
  Text,
  Balance,
  CardSummary,
  CardButtonWrapper,
  CustomDivider,
  CardPinjaman,
} from '../../components';
import Gap from '../../utils/Gap';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import dataSummary from '../../helpers/summaryData.json';
import data from '../../helpers/mockup.json';
import {ImMicrosoft} from '../../assets';

export default function Dashboard(props) {
  const RenderItems = ({item, index}) => {
    return (
      <CardSummary key={index}>
        {item.icon === 'FontAwesome5' ? (
          <FontAwesome5 name={item.iconName} size={30} color="#F5A623" />
        ) : (
          <Icon name={item.iconName} size={30} color="#F5A623" />
        )}
        <Gap height={18} />
        <Text color="#C2C2C2" size={13} align="left" family="AkwePro-DemiBold">
          {item.title}
        </Text>
        <Text color="#1b78e2" size={17} align="left" family="AkwePro-DemiBold">
          {item.nominal}
        </Text>
      </CardSummary>
    );
  };
  const RenderItemsData = ({item, index}) => {
    return (
      <>
        <CardPinjaman
          onPress={() => {
            props.navigation.navigate('Details', {
              peminjam: item.peminjam,
              riwayat: item.riwayatPinjaman,
              detail: item.detailPinjaman,
            });
          }}
          nama={item.detailPinjaman.nama}
          bg={ImMicrosoft}
          bunga={item.detailPinjaman.bunga}
          jenisPinjaman={item.detailPinjaman.jenisPinjaman}
          key={index}
          nilaiPinjaman={item.detailPinjaman.nilaiPinjaman}
          tenor={item.detailPinjaman.tenor}
          skorKredit={item.detailPinjaman.skorKredit}
          sisaWaktu={item.detailPinjaman.sisaWaktu}
        />
      </>
    );
  };
  const renderHeaderComponent = () => {
    return (
      <>
        <HomeHeader
          onPressNotif={() => Alert.alert('Navigate to Notification Screen')}
          onPressMenu={() => props.navigation.push('MyModal')}
        />
        <View style={{backgroundColor: '#fff'}}>
          <Text>
            Welcome <Text style={{fontWeight: '700'}}>Wafa,</Text>{' '}
            <Icon name="checkmark-circle" size={25} color="#A8D461" />
          </Text>
          <Gap height={30} />
          <Text>Dana Tersedia</Text>
          <Balance>Rp 100.900.000</Balance>
          <Gap height={50} />
        </View>
        <CardButtonWrapper>
          <CB
            icon={Icon}
            iconName="home-outline"
            iconSize={20}
            iconColor="#fff"
            onPress={() => Alert.alert('Deposit Dana Clicked')}
            text="Deposit Dana"
          />
          <CustomDivider />
          <CB
            icon={Icon}
            iconName="home-outline"
            iconSize={20}
            iconColor="#fff"
            onPress={() => Alert.alert('Mulai Mendanai Clicked')}
            text="Mulai Mendanai"
          />
        </CardButtonWrapper>
        <Gap height={30} />
      </>
    );
  };
  const renderFooterComponent = () => {
    return (
      <>
        <Text align="left">
          <Text size={25} family="AkwePro-Bold">
            l{' '}
          </Text>
          {''}
          Peluang Terbaik
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          renderItem={RenderItemsData}
        />
      </>
    );
  };
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView
        style={{backgroundColor: '#F5F6FA'}}
        showsVerticalScrollIndicator={false}>
        <FlatList
          ListHeaderComponent={renderHeaderComponent}
          data={dataSummary}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={RenderItems}
          ListFooterComponent={renderFooterComponent}
        />
      </ScrollView>
      {/* <BottomTab /> */}
    </>
  );
}
