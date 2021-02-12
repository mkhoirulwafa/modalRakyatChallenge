import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {Gap} from '../../utils';
import {Description} from '../index';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, CustomDivider} from '../index';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const CardButtonWrapper = styled.View`
  flex-direction: row;
  width: ${wp('90')};
  height: 70px;
  border-radius: 10px;
  background-color: #1b78e2;
  align-self: center;
  justify-content: space-between;
  align-content: center;
  elevation: 5;
  margin-top: -35px;
`;
const CardSummary = styled.View`
  width: ${wp('45')};
  height: 110px;
  background-color: #fff;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  elevation: 1;
`;
const CardDataWrapper = styled.TouchableOpacity`
  width: ${(props) => wp(props.width) || wp('90')};
  height: ${(props) => wp(props.height) || `300px`};
  background-color: #fff;
  margin-horizontal: ${(props) => props.mh || `20px`};
  margin-vertical: ${(props) => props.mv || `10px`};
  padding-horizontal: 10px;
  padding-vertical: 10px;
  elevation: 4;
`;
const CardImage = styled.Image`
  height: 100px;
  width: ${(props) => wp(props.width) || wp('90')};
  position: absolute;
  shadow-color: #000;
  shadow-opacity: 0.1;
`;
const DescriptionWrapper = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justify || `space-between`};
`;
const Chip = styled.View`
  width: ${(props) => props.width || `25px`};
  height: ${(props) => props.height || `25px`};
  background-color: ${(props) => props.bgColor || `#ffab24`};
  justify-content: center;
  border-radius: 4px;
  flex-direction: row;
`;
const CardPinjaman = ({
  nama,
  bg,
  nilaiPinjaman,
  tenor,
  jenisPinjaman,
  bunga,
  skorKredit,
  sisaWaktu,
  onPress,
  width,
  mh,
  mv,
}) => {
  return (
    <>
      <CardDataWrapper
        width={width || null}
        mh={mh || null}
        mv={mv || null}
        activeOpacity={0.8}
        onPress={onPress}>
        <CardImage width={width || null} resizeMode="cover" source={bg} />
        <Gap height={60} />
        <View style={{flexDirection: 'row'}}>
          <Chip>
            <Text align="center" color="#fff">
              {skorKredit}
            </Text>
          </Chip>
          <Gap width={5} />
          <Chip width="110px" bgColor="#E7E7E7">
            <MaterialCommunityIcons
              style={{alignSelf: 'center'}}
              name="clock-time-four-outline"
              color="#DF6D6D"
              size={15}
            />
            <Gap width={5} />
            <Text
              family="AkwePro-DemiBold"
              align="center"
              color="#49505A"
              size={14}>
              {sisaWaktu}
            </Text>
            <Text
              family="AkwePro-Regular"
              align="center"
              color="#49505A"
              size={14}>
              {' '}
              hari lagi
            </Text>
          </Chip>
        </View>
        <Gap height={10} />
        <Text color="#1b78e2" size={15} align="left" family="AkwePro-DemiBold">
          {nama}
        </Text>
        <Gap height={5} />
        <ProgressBar
          indeterminate={false}
          styleAttr="Horizontal"
          color="#1b78e2"
          progress={0.6}
        />
        <Gap height={5} />
        <DescriptionWrapper justify="flex-start">
          <MaterialCommunityIcons
            name="checkbox-multiple-marked-circle-outline"
            color="#A8D461"
            size={20}
          />
          <Gap width={5} />
          <Text align="left">63% Terkumpul - Rp 3.600.000</Text>
        </DescriptionWrapper>
        <Gap height={10} />
        <CustomDivider width={wp('85')} height="1" color="#c2c2c2" />
        <Gap height={10} />
        <DescriptionWrapper>
          <View>
            <Description title="Nilai Pinjaman" subtitle={nilaiPinjaman} />
            <Gap height={15} />
            <Description title="Tenor" subtitle={tenor} prefixSub=" hari" />
          </View>
          <View>
            <Description title="Jenis Pinjaman" subtitle={jenisPinjaman} />
            <Gap height={15} />
            <Description
              title="Bunga Efektif"
              subtitle={bunga}
              prefixSub="% p.a"
            />
          </View>
          <Gap width={5} />
        </DescriptionWrapper>
      </CardDataWrapper>
    </>
  );
};
const renderItem = ({item, index}) => {
  return (
    <>
      <Description
        title={item.title}
        subtitle={item.subtitle}
        prefixSub={item.prefix}
      />
      <Gap height={8} />
    </>
  );
};
const renderItem2 = ({item, index}) => {
  return (
    <>
      <Description
        title={item.title}
        subtitle={item.subtitle}
        prefixSub={item.prefix}
      />
      <Gap height={8} />
    </>
  );
};

const DetailData = ({arr, arr2}) => {
  return (
    <>
      <CardDataWrapper
        width={wp('80') || null}
        mh="0"
        mv="0"
        activeOpacity={1}
        height="85">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{flex: 1}}
              data={arr}
              keyExtractor={(item, index) => index.toString()}
              numColumns={1}
              renderItem={renderItem}
            />
          </View>
          <Gap width={40} />
          <FlatList
            style={{flex: 1}}
            data={arr2}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
            renderItem={renderItem2}
          />
        </View>
      </CardDataWrapper>
    </>
  );
};

export {
  CardImage,
  CardDataWrapper,
  CardSummary,
  CardButtonWrapper,
  DescriptionWrapper,
  CardPinjaman,
  DetailData,
};
