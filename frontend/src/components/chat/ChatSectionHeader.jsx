import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

function ChatSectionHeader() {
    return (
        <>
            <div className="h-14 bg-primary flex justify-between items-center p-4 ">

                <div className="flex justify-center items-center gap-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <p className="text-white font-bold">
                        Aryan poddar
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <IoSearchSharp className="text-xl text-on-primary" />
                    <BsThreeDotsVertical className="text-xl text-on-primary" />
                </div>

            </div>
        </>
    )
}
export default ChatSectionHeader;