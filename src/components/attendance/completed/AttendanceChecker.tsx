import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import { MemberStackKor } from '@@types/request';

import PMattendanceImg from '@image/PMattendance.png';
import DesignattendanceImg from '@image/Designattendance.png';
import FrontattendanceImg from '@image/Frontattendance.png';
import BackattendanceImg from '@image/Backattendance.png';

const borderURL = (inputColor: string) => {
  const color = inputColor.slice(1);
  //custom border url에 color만 주입해서 사용
  return `"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23${color}FF' stroke-width='3' stroke-dasharray='5%2c 9' stroke-dashoffset='27' stroke-linecap='square'/%3e%3c/svg%3e"`;
};

const image: Record<MemberStackKor, StaticImageData> = {
  기획: PMattendanceImg,
  디자인: DesignattendanceImg,
  프론트엔드: FrontattendanceImg,
  백엔드: BackattendanceImg,
};
interface IProps {
  color: string;
  number: number;
  userData: string[];
  type: MemberStackKor;
}

const AttendanceChecker = ({ color, number, userData, type }: IProps) => {
  const IS_ATTENDANCED = number < userData.length;
  if (IS_ATTENDANCED) {
    return (
      <ImageWrapper>
        <Image src={image[type]} alt={type} width={84} height={84} />
        <ImageText>{userData[number]}</ImageText>
      </ImageWrapper>
    );
  }

  return <Circle color={color}>{number}</Circle>;
};

export default AttendanceChecker;
const Circle = styled.div<{ color: string }>`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.color};
  background-image: url(${(props) => borderURL(props.color)});
  border-radius: 100px;
`;
const ImageWrapper = styled.div`
  position: relative;
  object-fit: cover;
  width: 84px;
  height: 84px;
  margin: 10px;
`;
const ImageText = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #fefeff;
  transform: rotate(-30deg);
  top: 42%;
  left: 25%;
`;
