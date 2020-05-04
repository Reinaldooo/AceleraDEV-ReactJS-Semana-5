import React, { Component } from "react";

class Contact extends Component {
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  render() {
    const {
      avatar,
      name,
      company,
      department,
      admissionDate,
      phone,
      country,
    } = this.props.data;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar">
          {avatar && <img src={avatar} alt={name} />}
        </span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{this.formatDate(admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>
    );
  }
}

export default Contact;
