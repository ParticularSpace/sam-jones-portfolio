import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact</h2>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
