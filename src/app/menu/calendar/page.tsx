'use client'

import Calendar from "@/components/calendar/claendar";
import Link from "next/link";
import { useCallback, useState } from "react";


export default function CalendarPage() {

  return (
    <div>
      <Calendar />
      <Link href='/menu/calendar/login'>
      <button className="rounded-2xl border-2 p-2">
        로그인
      </button>
      </Link>
      
    </div>
  )
}