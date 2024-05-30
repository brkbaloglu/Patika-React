import io from "socket.io-client"

let socket
export const init = () => {
    console.log("Sunucuya bağlanılıyor.");
    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    })
    socket.on("connect", () => {
        console.log("Sunucuya başarıyla bağlanıldı.");
    })
}


export const send = (color) => {
    socket.emit("newColor", color)
}


export const subscribe = (setActiveColor) => {
    socket.on("receive", (color) => {
        console.log(color);
        setActiveColor(color)
    })
}