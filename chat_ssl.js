// script for chat module
var body = document.getElementsByTagName("BODY")[0];
var chatButton = document.createElement("BUTTON");
var chatIcon = document.createElement('img')
try {
    var socket = io("https://192.163.206.200:3002", {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
        }
    });
}
catch (error) {
    console.log(error)
}
socket.on("connect_error", () => {
    // revert to classic upgrade
    alert('Cant connect to socket io')
    socket.disconnect()
});
socket.on('connect_failed', err => {
    alert('hello')
})
var chatIcon = document.createElement("img");
var firstMessage = true;
chatIcon.src = "https://i.ibb.co/1LNw0Lf/chaticon.png";
chatIcon.alt = "not loaded";
chatButton.appendChild(chatIcon);
function css(element, style) {
    for (const property in style) element.style[property] = style[property];
}
var chat = document.createElement("div");
var chatHeader = document.createElement("div");
var chatHeaderLeft = document.createElement("div");
var chatHeaderLeftImage = document.createElement("img");
chatHeaderLeftImage.src = "https://i.ibb.co/vsQqSkr/userIcon.png";
var chatHeaderLeftName = document.createElement("span");
chatHeaderLeftName.innerHTML = "Searching ....";
chatHeader.appendChild(chatHeaderLeft);
chatHeaderLeft.appendChild(chatHeaderLeftImage);
chatHeaderLeft.appendChild(chatHeaderLeftName);
chatHeaderRightButton = document.createElement("button");
chatHeaderRightButton.innerHTML = "End chat";
chatHeader.appendChild(chatHeaderRightButton);
// body of chat Box
var chatBody = document.createElement("div");
var chatDateRow = document.createElement("div");
var chatDate = document.createElement("span");
var chatMessages = document.createElement("div");

chatDate.innerHTML = "19:25 Monday";
chatDateRow.appendChild(chatDate);
//chat messages
// Right Message
var RightMessage = document.createElement("div");
var RightMessageTitle = document.createElement("p");
var RightMessageBody = document.createElement("div");
// RightMessageBody.innerHTML =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend fames varius lectus diam habitant sagittis,";
// RightMessageTitle.innerHTML = "Ali(Assistant)";
// RightMessage.appendChild(RightMessageTitle);
// RightMessage.appendChild(RightMessageBody);
// chatMessages.append(RightMessage);
// chatMessages.append(RightMessage);
// Left Message
var LeftMessage = document.createElement("div");
var LeftMessageTitle = document.createElement("p");
var LeftMessageBody = document.createElement("div");
LeftMessage.appendChild(LeftMessageTitle);
// chatMessages.append(LeftMessage);
//footer of chat box
var chatFooter = document.createElement("div");
var messageField = document.createElement("textarea");
messageField.placeholder = "Enter Chat Here";
messageField.rows = 1;
var sendButton = document.createElement("button");
var icon = document.createElement("img");
icon.src = "https://i.ibb.co/n8j8czF/send-Button.png";
sendButton.appendChild(icon);
chatFooter.appendChild(messageField);
chatFooter.appendChild(sendButton);
var nameInput = document.createElement("input");
var emailInput = document.createElement("input");
var messageInput = document.createElement("textarea");
var inputElements = document.getElementsByTagName("input");
// assign values
nameInput.placeholder = "*Name";
emailInput.placeholder = "*Email";
messageInput.placeholder = "*Message";
// appending
body.appendChild(chatButton);
body.appendChild(chat);
chat.appendChild(chatHeader);
chat.appendChild(chatBody);
chatBody.appendChild(chatDateRow);
chatBody.appendChild(chatMessages);
chat.appendChild(chatFooter);
css(chatButton, {
    background: "linear-gradient(144.72deg, #1BA160 -58.12%, #2EDB90 136.39%)",
    border: "5px solid #FFFFFF",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
    color: "red",
    padding: "15px",
    width: "75px",
    height: "75px",
    border: "0px",
    position: "fixed",
    bottom: "0px",
    right: "0px",
    margin: "20px",
    "border-radius": "50%",
    zIndex: "9999900",
});
css(chat, {
    overflow: "hidden",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: "3px",
    height: "560px",
    width: "340px",
    minWidth: "300px",
    minHeight: "400px",
    display: "none",
    // 'box-shadow': '5px 5px 5px #03A84E',
    position: "fixed",
    bottom: "80px",
    right: "0px",
    margin: "20px",
    "background-color": "#fff",
    "flex-direction": "column",
    // 'justify-content': 'space-around',
    "border-radius": "10px",
    transition: "",
    zIndex: "100000",
    // border:'1px solid red'
});
css(chatHeader, {
    padding: "15px",
    background: "#1BA160",
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    alignItems: "center",
    // 'box-shadow': '0px 8px 10px rgba(0, 0, 0, 0.3)',
    paddingLeft: "10px",
    paddingRight: "10px",
});
css(chatHeaderLeft, {
    gap: "10px",
    display: "flex",
    alignItems: "center",
});
css(chatHeaderLeftName, {
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    alignItems: "center",
});
css(chatHeaderRightButton, {
    background: "#198D55",
    borderRadius: "3px",
    border: "none",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    color: "white",
    fontEeight: "500",
    display:'none'
});
css(chatBody, {
    padding: "15px",
    paddingTop: '40px',
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflowY: 'scroll',
});
css(chatDateRow, {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px",
});
css(chatDate, {
    color: "#161C2D",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "12px",
});
css(chatFooter, {
    display: "flex",
});
css(sendButton, {
    background: "#1BA160",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "20px",
    paddingLeft: "20px",
    border: "none",
});
css(messageField, {
    fontFamily: "Poppins",
    flexGrow: 1,
    border: "none",
    background: "#F4F4F4",
    padding: "10px",
    // paddingBottom:'10px',
});
css(chatMessages, {
    flexGrow: 1,
    fontFamily: "Poppins",
    // background:'red'
});
css(RightMessageTitle, {
    fontSize: '14px',
    marginBottom: "0px",
    marginTop: '10px'
});
css(LeftMessageTitle, {
    marginBottom: "0px",
});
css(RightMessageBody, {
    background: "#FFFFFF",
    boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px 10px 0px 10px",
    padding: "10px",
    fontSize: "14px",
    fontWeight: "400",
    marginTop: '10px',
    width: '80%',
    marginLeft: "auto",
});
css(RightMessage, {
    marginRight: "10px",
    marginTop: '10px'
});
css(LeftMessage, {
    marginLeft: "10px",
});
css(LeftMessageBody, {
    marginTop: '10px',
    background: "linear-gradient(144.72deg, #1BA160 -58.12%, #2EDB90 136.39%)",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px 10px 10px 0px",
    padding: "10px",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    width: '80%',
    marginRight: "auto",
});
css(chatHeaderLeftImage, {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
})

var joinedID = ''
let agentJoined = false
var initialMessages = []
const fetchChatData = (ID) => {
    const data = { id: ID };
    fetch('https://192.163.206.200:3002/chats/chat', {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => {
            if (data.length) {
                agentJoined = true
                console.log('length')
                firstMessage = false;
                console.log(firstMessage)
                chatHeaderLeftName.innerHTML = data[0].agent_name
                console.log(data[0].agent_name)
                socket.emit('client join room', { id: data[0].customer_id, agent: data[0].agent_name })
                // load all messages
                console.log('ID:' + ID)
                const LoadMessageID = { id: ID };
                fetch('https://192.163.206.200:3002/chats/messages', {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify(LoadMessageID)
                }).then(response => {
                    console.log(response)
                    return response.json()
                }).then(dataMessages => {
                    console.log('nessages:' + JSON.stringify(dataMessages))
                    initialMessages = JSON.parse(JSON.stringify(dataMessages))
                    initialMessages.map(mess => {
                        if (mess.source !== 'Agent') {
                            LeftMessageBody.innerHTML = mess.message
                            LeftMessage.appendChild(LeftMessageBody);
                            chatMessages.innerHTML += LeftMessage.innerHTML
                            messageField.value = ''
                            chatBody.scrollTop = (chatBody.scrollHeight - chatBody.clientHeight)
                        }
                        else {

                            RightMessageBody.innerHTML = mess.message
                            RightMessage.appendChild(RightMessageBody);
                            chatMessages.innerHTML += RightMessage.innerHTML
                            chatBody.scrollTop = (chatBody.scrollHeight - chatBody.clientHeight)
                        }
                    })
                })
            }
            console.log('Success:', data);
        })
}
// function to check customer chat history start
const checkChat = () => {
    asyncLocalStorage.getItem('joined').then(response => {

        const join = response ?? false
        if (join) {

            agentJoined = true
            chatHeaderRightButton.style.display='block'
            joinedID = response
            fetchChatData(response)
        }
    })
    asyncLocalStorage.getItem('image').then(response => {
        const join = response ?? false
        if (join) {
            console.log('image exists')
            chatHeaderLeftImage.src = `https://192.163.206.200:3002/images/${response}`
        }
    })
}
// function to check customer chat history end
chatButton.addEventListener("click", () => {
    if (chat.style.display == "flex") {
        chatMessages.innerHTML = ''
        chat.style.display = "none";
        // chatButton.innerHTML = 'start chat'
    } else {
        checkChat()
        chat.style.display = "flex";
        // chatButton.innerHTML = 'close chat'
    }
});
chatHeaderRightButton.addEventListener("click", () => {
    chatMessages.innerHTML = ''
    asyncLocalStorage.getItem('joined').then(response => {
        const join = response ?? false
        if (join) {
            chatHeaderRightButton.style.display='none'
            socket.emit("leave room", response);
            localStorage.removeItem('joined')
            localStorage.removeItem('image')
        }
        else {
            alert('no id found' + response)
        }
    })
    chat.style.display = "none";
    // console.log(socket)
    agentJoined = false
    chatHeaderLeftImage.src = "https://i.ibb.co/vsQqSkr/userIcon.png";
    chatHeaderLeftName.innerHTML = "Searching ....";
    firstMessage = true
    console.log(firstMessage)
    // chatHeaderLeftImage.src=''
    // socket.disconnect(true)
});
// keep the scroll to bottom
// All Messages
let Messages = []
window.addEventListener('popstate', function (event) {
    console.log('changed')
});
document.addEventListener("DOMContentLoaded", () => {
})
// socket.emit('join room', { id: 'uQcrIyHRd9VmpDhIAAAo', agent: 'anas' })
// asyn localStorage
const asyncLocalStorage = {
    setItem: async function (key, value) {
        await null;
        return localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await null;
        return localStorage.getItem(key);
    }
};
const sendMessageHandler = () => {
    if (!messageField.value)
        return
    if (firstMessage === true) {
        //socket connection

  
    
      
        socket.emit("first message", { msg: messageField.value, id: socket.id });
        console.log('first message sent')
        console.log(window.location.href)
        firstMessage = false;
    } else {
        const messagebody = messageField.value
        asyncLocalStorage.getItem('joined').then(res => {
            if (res)
                socket.emit("new message", messagebody, res);
            else
                socket.emit("new message", messagebody, socket.id);
        })
        firstMessage = false;
    }
    LeftMessageBody.innerHTML = messageField.value
    LeftMessage.appendChild(LeftMessageBody);
    chatMessages.innerHTML += LeftMessage.innerHTML
    messageField.value = ''
    chatBody.scrollTop = (chatBody.scrollHeight - chatBody.clientHeight)
}
sendButton.addEventListener("click", () => {
    sendMessageHandler()
});
messageField.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        sendButton.click();
    }
})
socket.on("agent Message", (msg) => {
    Messages.push({
        MessageType: 'agent', Message: msg
    })
});
function agentbox(name) {
    var AgentAvaliable = document.createElement('p')
    AgentAvaliable.innerHTML = name + ' joined your chat'
    css(AgentAvaliable, {
        marginTop: '10px',
        marginBottom: '10px',
        color: '#1BA160'
    })
    chatMessages.appendChild(AgentAvaliable)
}



socket.on('room joined', (data) => {
    localStorage.setItem('joined', data.id)
    console.log('agent joined;' + agentJoined)
    console.log('agent jnoined with:' + data)
    if (!agentJoined) {
        localStorage.setItem('image', data.image)
        chatHeaderLeftImage.src = `https://192.163.206.200:3002/images/${data.image}`
        agentJoined = true
        chatHeaderRightButton.style.display='block'
        agentbox(data.agent)
        console.log(data.agent)
        chatHeaderLeftName.innerHTML = data.agent
    }
})
if(firstMessage){

}
socket.on('new Message', (data) => {
    console.log('socket id:' + socket.id)
    RightMessageBody.innerHTML = data.message
    RightMessage.appendChild(RightMessageBody);
    chatMessages.innerHTML += RightMessage.innerHTML
    chatBody.scrollTop = (chatBody.scrollHeight - chatBody.clientHeight)
})
socket.on('disconnect',()=>{
  
    socket.connect()
})
