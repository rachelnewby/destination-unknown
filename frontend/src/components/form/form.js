import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-router-dom';
import styles from './form.css';

// import the backend thing that works - with the api key stuff
function FlightSearch() {
    const [formInput, setFormInput] = useState({
        inboundDestination: '',
        outboundDestination: '',
        departureDate: '',
        returnDate: '',
        numberOfTravellers: ''
    });
    handleNumberOfTravellersChange = (event) => {
        this.setState({ numberOfTravellers: event.target.value });
      }
    
      handleOutboundDestinationChange = (event) => {
        this.setState({ outboundDestination: event.target.value });
      }
    
      handleInboundDestinationChange = (event) => {
        this.setState({ inboundDestination: event.target.value });
      }
    
      handleDepartureDateChange = (event) => {
        this.setState({ departureDate: event.target.value });
      }
    
      handleReturnDateChange = (event) => {
        this.setState({ returnDate: event.target.value });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const { numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate } = this.state;
        FlightClient.loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate)
          .then((flights) => {
            // handle the API response
          })
          .catch((error) => {
            // handle the error
          });
      }

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
                            <label>DEPARTING DATE</label>
                        </div>
                    </div>
                    <div className={styles.colLg6 + ' ' + styles.colMd12}>
                        <div className={styles.formFloating}>
                            <input type="date" className={styles.formControl} placeholder="RETURNING" />
                            <label>RETURNING DATE</label>
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

export default Form;
