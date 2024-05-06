'use client'
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import dayjs from 'dayjs';
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';
import "./style/style.css";
import Modal from 'react-modal'; // react-modal 추가

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarMain() {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 선택한 날짜 상태 추가
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); // 모달 열림 상태 추가

  const AddContent = ({ date, view }: any) => {
    const dayList = [
      '2024-04-10',
      '2024-04-21',
      '2024-05-02',
      '2024-05-14',
      '2024-05-27',
      '2024-05-10',
      '2024-05-21',
      '2024-05-02',
      '2024-05-14',
      '2024-05-27',
    ];
    const content = [];
    if (dayList.find((day) => day === dayjs(date).format('YYYY-MM-DD'))) {
      content.push(<>😀</>);
    }
    return <div className='p-3'>{content}</div>;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date); // 선택한 날짜 업데이트
    setModalIsOpen(true); // 모달 열기
  };

  return (
    <>
      <Calendar
        locale="en"
        onChange={onChange}
        value={value}
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        calendarType="gregory"
        tileContent={AddContent}
        formatDay={(locale, date) => dayjs(date).format('D')}
        onClickDay={handleDateClick} // 날짜 클릭 핸들러 추가
      />

      {/* 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <div>선택한 날짜: {selectedDate && dayjs(selectedDate).format('YYYY-MM-DD')}</div>
        <button onClick={() => setModalIsOpen(false)}>닫기</button>
      </Modal>
    </>
  );
}
