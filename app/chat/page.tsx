import React from 'react';
import styles from './style.module.css';

const Chat = () => {

    // const newMessage = {
    //     body: message,
    //     from: sender
    // }

    return (
        <div className={styles.chat_container}>
            <div className={styles.users_chat}></div>
            <div className={styles.chat}>
                <div className={styles.chat_header}></div>
                <div className={styles.messages}>
                    mensaje de prueba
                    </div>
            </div>
        </div>
    )
}

const Page = () => {
    return (
        <div className={styles.background_container}>
            <Chat />
        </div>
    )
}

export default Page;