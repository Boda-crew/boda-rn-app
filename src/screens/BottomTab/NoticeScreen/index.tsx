import React, { useState } from 'react';
import {
  AScrollView,
  AText,
  Blank,
  Container,
  SegmentedTab,
  TabHeader,
  Wrapper,
} from '@components';
import { useScrollY } from '@hooks';
import { NoticeItem } from './NoticeItem';

export const NoticeScreen = () => {
  const { scrollY, onScrollY } = useScrollY();
  const [tabIndex, setTabIndex] = useState(0);

  const noticeList = [...new Array(10)];

  return (
    <Container>
      <AScrollView stickyHeaderIndices={[1]} onScroll={onScrollY}>
        <Blank height={16} />
        <TabHeader title="공지" subTitle={'사과학원'} scrollY={scrollY} />

        <SegmentedTab
          selectedIdx={tabIndex}
          setSelectedIdx={setTabIndex}
          views={[
            {
              name: '전체',
              child: (
                <Wrapper
                  style={{ paddingHorizontal: 24 }}
                  gapStyle={{ marginTop: 30 }}
                >
                  {noticeList.map((_, index) => (
                    <NoticeItem key={index} isPrimary={!index} />
                  ))}

                  {!noticeList.length && (
                    <AText pcolor="gray3">아직 공지가 없습니다</AText>
                  )}
                </Wrapper>
              ),
            },
            {
              name: '사과학원',
              child: (
                <Wrapper
                  style={{ paddingHorizontal: 24 }}
                  gapStyle={{ marginTop: 30 }}
                >
                  {noticeList.map((_, index) => (
                    <NoticeItem key={index} isPrimary={!index} hideAcademy />
                  ))}

                  {!noticeList.length && (
                    <AText pcolor="gray3">아직 공지가 없습니다</AText>
                  )}
                </Wrapper>
              ),
            },
          ]}
        />
      </AScrollView>
    </Container>
  );
};
