import React from 'react';
import './style.css'

const Contact = () => {
  return (
    <div className="ContactPage">
      <h3>Please reach out!</h3>

      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <hr />
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <hr />

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a Message!"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark Submit">Send</button>

      </form>

    </div>

  )
}
export default Contact
