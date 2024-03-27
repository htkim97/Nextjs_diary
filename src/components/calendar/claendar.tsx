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

  return (
    <>
          <Calendar 
          onChange={onChange} 
          value={value}
          minDetail="month"
          maxDetail="month"
          showNeighboringMonth={false}
          className="mx-auto w-full text-sm border-b"
          calendarType="gregory" // 일요일 부터 시작
          formatDay={(locale, date) => dayjs(date).format('DD')}
          />
    </>
  );
}