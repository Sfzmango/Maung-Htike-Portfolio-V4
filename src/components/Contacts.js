import React from 'react';

export default function Contacts() {

    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2 uk-margin-large uk-margin-large-left">
            <form className="uk-container">
                <fieldset className="uk-fieldset">

                    <legend className="uk-legend">Contact Me</legend>

                    <div className="uk-margin">
                        <input className="uk-input" type="text" placeholder="Name" />
                    </div>

                    <div className="uk-margin">
                        <input className="uk-input" type="text" placeholder="Email" />
                    </div>

                    <div className="uk-margin">
                        <textarea className="uk-textarea" rows="5" placeholder="Message"></textarea>
                    </div>

                    <button className="uk-button uk-button-default uk-align-right">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}