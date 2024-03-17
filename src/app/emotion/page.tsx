import Link from "next/link";

export default function Emotion() {
  const menu =[
    {
        href: '/',
        // icon: <HomeIcon />,
        // clickedIcon: <HomeFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">Home</p>,
        font: <p>Home</p>
      },
      {
        href: '/search',
        // icon: <SearchIcon />,
        // clickedIcon: <SearchFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">Search</p>,
        font: <p>Search</p>
      },
      {
        href: '/new',
        // icon: <NewIcon />,
        // clickedIcon: <NewFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">MyPage</p>,
        font: <p>MyPage</p>
      },

]

  return(
    <div>
        <Link href="/emotion">1</Link>
        <Link href="/calendar">2</Link>
        <Link href="/myPage">3</Link>
    </div>
  )
}