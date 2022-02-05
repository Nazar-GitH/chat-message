let rerenderEntireTree = () => {

}
let state = {
  dialogsData: [
    { src: 'https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg', text: 'You are the worst', data: '5/17/22,3:50 AM' }
  ],
  dialogsData2: [
    { src: 'https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=', text: 'We are losing money! Quick', data: '4/17/22,4:00 AM' }
  ],
  dialogsData3: [
    { src: 'https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=', text: 'Quickly come to the meeting room 1B', data: '5/17/22,1:30 AM' }
  ]
}

export let addMessage = (dialogsData) => {
  let newMessage = {
    src: "https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg",
    text: dialogsData,    
    data: '5/17/22,3:55 AM'
  }
  state.dialogsData.push(newMessage)
  rerenderEntireTree(state)
}
export let addMessage2 = (dialogsData2) => {
  let newMessage = {
    src: "https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=",
    text: dialogsData2,
    data: '4/17/22,4:10 AM'
  }
  state.dialogsData2.push(newMessage)
  rerenderEntireTree(state)
}
export let addMessage3 = (dialogsData3) => {
  let newMessage = {
    src: "https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=",
    text: dialogsData3,
    data: '30/12/21,1:32 AM'
  }
  state.dialogsData3.push(newMessage)
  rerenderEntireTree(state)
}


export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state