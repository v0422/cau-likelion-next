import { useQuery } from 'react-query';
import { TodayAttendanceListData, MemberStack, MemberStackKor } from '@@types/request';

import { getAttendanceList } from 'src/apis/attendance';
import Track from './TrackAttendance';
import { Primary, Secondary } from '@utils/constant/color';
import { ITrackController } from './componentType';
import Loading from '@common/loading/loading';

const trackController: Record<MemberStack, ITrackController> = {
  pm: {
    title: '기획',
    arrayLength: 6,
    color: Primary.light,
    titleColor: Primary.default,
  },
  design: {
    title: '디자인',
    arrayLength: 6,
    color: '#FFF2EB',
    titleColor: Secondary.default,
  },
  frontend: {
    title: '프론트엔드',
    arrayLength: 12,
    color: '#ECFDE8',
    titleColor: '#36CA60',
  },
  backend: {
    title: '백엔드',
    arrayLength: 12,
    color: '#FDF3FF',
    titleColor: '#F33EA0',
  },
};

const EntireTrackAttendance = () => {
  const trackStacks = Object.keys(trackController) as MemberStack[];
  const { data, isLoading } = useQuery<TodayAttendanceListData>(['getAttendanceList'], getAttendanceList);

  if (isLoading) return <Loading/>;

  return (
    <>
      {trackStacks.map((track, index) => (
        <Track track={trackController[track]} key={index} trackData={data![track]} />
      ))}
    </>
  );
};

export default EntireTrackAttendance;
