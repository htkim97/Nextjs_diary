
export default function Layout({ 
    children,
    modal
 }: {
    children: React.ReactNode;
    modal:React.ReactNode; 

}) {
    return (
        <>
            <div className="flex flex-col p-10">
                <div className="flex justify-center p-10">{children}</div>
                <div className="flex justify-center p-10">{modal}</div>
            </div>
           
           
        </>

    )
}