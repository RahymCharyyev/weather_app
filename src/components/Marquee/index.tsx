import { FC } from 'react';
import { CustomIcons } from '../../utils/customIcons';
import { Flex, Typography, Image, Divider } from 'antd';
import './style.css';

type MarqueeItemProps = {
  city: string;
  temperature: string;
  weatherCondition: string;
  customIcons: CustomIcons;
};

export const MarqueeItem: FC<MarqueeItemProps> = ({
  city,
  temperature,
  weatherCondition,
  customIcons,
}) => {
  return (
    <Flex align='center' gap={10} className='marquee'>
      <Typography.Text className='marquee__text'>{city}</Typography.Text>
      <Typography.Text className='marquee__text'>{temperature}</Typography.Text>
      <Image
        src={`${customIcons[weatherCondition]}`}
        alt='Weather Icon'
        width={'60px'}
        preview={false}
      />
      <Divider className='marquee__divider' type='vertical' />
    </Flex>
  );
};
