import React, { useState } from 'react';

function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
   // const [msg, setMsg] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = {};
        //let formSuccess = {};
        //let formError = {};


        if (!name) {
            formErrors.name = 'Name is required.';
        }

        if (!email) {
            formErrors.email = 'Email is required.';
        } else if (!validateEmail(email)) {
            formErrors.email = 'Please enter a valid email address.';
        }

        if (!phone) {
            formErrors.phone = 'Phone number is required.';
        } else if (!validatePhone(phone)) {
            formErrors.phone = 'Please enter a valid phone number.';
        }

        setErrors(formErrors);
        //setErrors(formSuccess);
        //setErrors(formError);


        if (Object.keys(formErrors).length === 0) {
            // Form is valid, submit the form or perform any action
            console.log('Form submitted:', { name, email, phone });

            document.signupform.submit();
            
            /*try {
                const response = await fetch('/sendmail.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, phone }),
                });

                if (response.ok) {
                    formErrors.successmsg = 'Form submitted successfully!';
                } else {
                    formErrors.msg = 'Form submission failed.';
                }
            } catch (error) {
                formErrors.msg = 'Form submission failed.';
            }*/
            

        }
    };

    return (
        
        <form className="contact-form" onSubmit={handleSubmit} id="signup-form" name='signupform' action="/sendmail.php" method='post' >
            <div className="input-box">
                <input
                    name="Name"
                    id="Name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="input-box">
                <input
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-box">
                <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="input-box">
                <button className="submite-button" type="submit">Submit</button>
                {errors.successmsg && <p className="success">{errors.msg}</p>}
                {errors.msg && <p className="error">{errors.msg}</p>}
            </div>
        </form>
    );
}

export default SignupForm;
