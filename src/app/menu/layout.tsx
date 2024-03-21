import Menu from "../../components/mainPage/tabMenu"
export default function Layout ({children} : {children : React.ReactNode}) {
return(
<div className="flex flex-col w-full max-w-screen-2xl mx-auto">
<div className="grow">{children}</div>
<header className="sticky top-0 z-10"><Menu/></header>
</div>
)
}