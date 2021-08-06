import React from 'react';
import Email from './Email';
import PropTypes from 'prop-types';

export default function Emaillist({ keyword, emails }) {

    return(
        <ul className={ "Emaillist" }>
            {
                emails.filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1)
                        .map((email) =>  <Email
                                            key = {email.no}
                                            firstName = {email.firstName}
                                            lastName = {email.lastName}
                                            email = {email.email}/> )
            }
        </ul>
    );
}

Emaillist.propTypes ={
    // emails: PropTypes.arrayOf(PropTypes.shape({
    //     no: PropTypes.number.isRequired,
    //     firstName: PropTypes.string.isRequired,
    //     lastName: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired
    // }))
    emails: PropTypes.arrayOf(PropTypes.shape( Email.propTypes ))
}