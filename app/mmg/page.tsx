import React from 'react';

const ChatIZQ = () => {
    return (
        <div 
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'red',
                display: 'flex',
                justifySelf: 'flex-end',
                alignSelf: 'flex-end',
            }}>
            ChatIZQ
        </div>
    )
}

const ChatRGH = () => {
    return (
        <div 
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'red',
                display: 'flex',
                justifySelf: 'flex-end',
                alignSelf: 'flex-start',
            }}>
            ChatIZQ
        </div>
    )
}

const Page = () => {
    
    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <ChatIZQ />
            <ChatRGH/>
        </div>
    )
}

export default Page;