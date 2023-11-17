import { FC } from 'react';
import { CustomIcons } from '../../utils/customIcons';
import { Divider } from 'antd';
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
    <div className='marquee'>
      <p className='marquee__text'>{city}</p>
      <p className='marquee__text'>{temperature}</p>
      <img
        src={`${customIcons[weatherCondition]}`}
        alt='Weather Icon'
        width={'50px'}
      />
      <Divider className='marquee__divider' type='vertical' />
    </div>
  );
};
