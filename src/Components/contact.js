import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='form-con'>
            <div className="wrapper">
                <form action="#" method="post">
                    <div className="field">
                        <input type="text" id="name" name="name" placeholder="Who are you?" autofocus />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="field">
                        <input type="text" id="email" name="email" placeholder="abc@example.com" />
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="field">
                        <textarea id="msg" rows={4} name="msg" placeholder="Your message...." defaultValue={""} />
                        <label htmlFor="msg">Message</label>
                    </div>
                    <input className="button" type="submit" defaultValue="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
