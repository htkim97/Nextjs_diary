'use client'
import { useState } from 'react';
import {Calendar} from 'react-calendar';
import dayjs from 'dayjs';

import 'react-calendar/dist/Calendar.css';
import "./style/style.css"


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Sample() {
  const [value, onChange] = useState<Value>(new Date());


const AddContent = ({date,view}:any) =>{

  const dayList = [
    '2024-03-10',
    '2024-03-21',
    '2024-03-02',
    '2024-03-14',
    '2024-03-27',
    '2024-04-10',
    '2024-04-21',
    '2024-04-02',
    '2024-04-14',
    '2024-04-27',
    ];

  const content = [];

  if
  (
    dayList.find((day)=>day === dayjs(date).format('YYYY-MM-DD'))
  ) {
    content.push(<>😀</>)
  }
  return <div className='p-3'>{content}</div>
}

  


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
          calendarType="gregory" // 일요일 부터 시작
          tileContent={AddContent}
          formatDay={(locale, date) => dayjs(date).format('D')}
          />
    </>
  );
}