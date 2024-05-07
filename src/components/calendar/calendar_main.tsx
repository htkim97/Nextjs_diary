'use client'
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import "./style/style.css";
import Modal from 'react-modal';
import { TextArea } from '@radix-ui/themes';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarMain() {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [memo, setMemo] = useState<string>('');
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setModalIsOpen(true);
    const savedMemo = localStorage.getItem(dayjs(date).format('YYYY-MM-DD'));
    setMemo(savedMemo || '');
  };

  const handleSaveMemo = () => {
    if (selectedDate) {
      localStorage.setItem(dayjs(selectedDate).format('YYYY-MM-DD'), memo);
      setModalIsOpen(false);
    }
  };

  const CustomDayTile = ({ date, view }: { date: Date, view: string }) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    const memo = localStorage.getItem(formattedDate) || '';
 

    return (
      <div>
        <div>{memo}</div>
      </div>
    );
  };

  const handleEmojiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmoji(e.target.value);
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
        className="text-sm border-b"
        calendarType="gregory"
        formatDay={(locale, date) => dayjs(date).format('D')}
        onClickDay={handleDateClick}
        tileContent={({ date, view }) => <CustomDayTile date={date} view={view} />}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "450px",
            height: "300px",
            borderRadius: "10px",
            overflow: 'auto',
            alignItems: 'center',
            padding: '20px',
          },
        }}
      >
        <div className='flex flex-col p-2'>
          <div className='text-xl font-bold'>
            {selectedDate && dayjs(selectedDate).format('YYYY-MM-DD')}
          </div>
          <div className='flex flex-col justify-center items-center mt-8'>
            <select name="emojis" id="emojis" onChange={handleEmojiSelect}>
              <option value="😀">😀</option>
              <option value="🤨">🤨</option>
              <option value="🥲">🥲</option>
              <option value="😡">😡</option>
            </select>
            <div className='mt-4'>
              <TextArea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="오늘의 일기"
                size="1"
              />
            </div>
            <div className='mt-5 flex gap-10'>
              <button className="bg-white rounded-xl border-2 border-black p-4 shadow-[0_5px_1px_1px_black] hover:shadow-[0_1px_2px_1px_black] hover:translate-y-1 hover:text-violet-700" onClick={handleSaveMemo}>저장</button>
              <button className="bg-white rounded-xl border-2 border-black p-4 shadow-[0_5px_1px_1px_black] hover:shadow-[0_1px_2px_1px_black] hover:translate-y-1 hover:text-violet-700" onClick={() => setModalIsOpen(false)}>닫기</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
