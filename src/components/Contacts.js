import React from 'react';

export default function Contacts() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form Successful!")
    }

    function handleBlur(e) {
        if (e.target.value) {
            e.target.classList.add("uk-form-success");
        }
        else {
            e.target.classList.add("uk-form-danger");
        }
    }

    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2 uk-margin-large uk-margin-large-left">
            <form className="uk-container">
                <fieldset className="uk-fieldset">

                    <legend className="uk-legend">Contact Me</legend>

                    <div className="uk-margin">
                        <input className="uk-input" onBlur={handleBlur} id="name" type="text" placeholder="Name" />
                    </div>

                    <div className="uk-margin">
                        <input className="uk-input" onBlur={handleBlur} id="email" type="text" placeholder="Email" />
                    </div>

                    <div className="uk-margin">
                        <textarea className="uk-textarea" onBlur={handleBlur} id="message" rows="5" placeholder="Message"></textarea>
                    </div>

                    <button className="uk-button uk-button-default uk-align-right" type="submit" onClick={handleSubmit}>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}