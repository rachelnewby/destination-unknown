import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '/form.css';
// import the backend thing that works - with the api key stuff
function FlightSearch() {
    const [formInput, setFormInput] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        adults: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // call your backend API function here with the formInput data
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.row}>
                    <div className={styles.col12}>
                        <h4>Flight</h4>
                        <span className={styles.textMuted}>Travel the world with us</span>
                    </div>
                    <div className={styles.colLg6 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <input type="text" className={styles.formControl} placeholder="FLYING FROM" />
                            <label>FLYING FROM</label>
                        </div>
                    </div>
                    <div className={styles.colLg6 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <input type="text" className={styles.formControl} placeholder="FLYING TO" />
                            <label>FLYING TO</label>
                        </div>
                    </div>
                    <div className={styles.colLg6 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <input type="date" className={styles.formControl} placeholder="DEPARTING" />
                            <label>DEPARTING</label>
                        </div>
                    </div>
                    <div className={styles.colLg6 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <input type="date" className={styles.formControl} placeholder="RETURNING" />
                            <label>RETURNING</label>
                        </div>
                    </div>
                    <div className={styles.colLg4 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <select className={styles.formSelect}>
                                <option selected hidden>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                                <option value="6">Six</option>
                                <option value="7">Seven</option>
                                <option value="8">Eight</option>
                            </select>
                            <label>ADULTS(18+)</label>
                        </div>
                    </div>
                    <div className={styles.col12 + ' ' + styles.mt4}>
                        <button className={styles.btn + ' ' + styles.btnPrimary + ' ' + styles.textUppercase} type="submit" onClick={handleSubmit}>Submit<i className="fa fa-plane ms-3"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<FlightSearch />, document.getElementById('root'));
