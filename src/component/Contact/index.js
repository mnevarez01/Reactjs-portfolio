import React from 'react';

const Contact = () => {
  return (
    <div className="ContactPage">
      <h3>Please send an reach out!</h3>

      <form className="InputField">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <hr />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <hr />
        <label>
          Message:
          <input type="text" name="message" />
        </label>

      </form>


    </div>

  )
}
export default Contact
