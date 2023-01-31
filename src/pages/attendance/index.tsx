import styled from 'styled-components';

import CircleComponent from '@attendance/CircleComponent';
import { ReactElement } from 'react';
import LayoutAttendance from '@common/layout/LayoutAttendance';

const Attendance = () => {
  return (
    <Wrapper>
      <CircleComponent />
    </Wrapper>
  );
};

export default Attendance;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Attendance.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAttendance>{page}</LayoutAttendance>;
};
