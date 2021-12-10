import { useEffect } from "react";

const useTitleCount = (count) => {

    useEffect(() => {
        if(count >= 1) {
            document.title = `Chats (${count})`
        } else {
            document.title = `Chats `
        }       
    },[count]);

}

export default useTitleCount;