import React from 'react';
import {ImLogo} from '../../assets';
import {HomeHeaderWrapper, Logo, IconWrapper} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {ButtonIcon} from '../../components';
import {Gap} from '../../utils';

export default function HomeHeader({onPressNotif, onPressMenu}) {
  return (
    <>
      <HomeHeaderWrapper>
        <Logo source={ImLogo} />
        <IconWrapper>
          <ButtonIcon
            Child={Icon}
            iconName="notifications-outline"
            onPress={onPressNotif}
          />
          <Gap width={15} />
          <ButtonIcon
            Child={IconMaterial}
            iconName="sort"
            onPress={onPressMenu}
          />
        </IconWrapper>
      </HomeHeaderWrapper>
    </>
  );
}
