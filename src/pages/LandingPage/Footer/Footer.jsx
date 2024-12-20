import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";

import { Button, Input } from '../../../components';

import logo from "../../../assets/RePlatform_logo.png";
import twitterLogo from "../../../assets/commonImages/twitter.svg";
import linkedinLogo from "../../../assets/commonImages/linkedin.svg";

import "./Footer.scss";


const INITIAL_VALUES = {
    email: "",
};

const Footer = () => {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        setFieldValue,
      } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: (formValues) => {
           handleReset();
        },
      });

    return (
        <section id='contact' className='footer-section'>
            <div className="footer-top">
                <div className="replatform-info-wrapper">
                    <div className='replatform-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="replatform-info-text">
                        <p>
                            Replatform simplifies your DevOps/SRE needs
                        </p>
                    </div>
                    <div className="replatform-social-links">
                        <Link to={"https://x.com/RePlatform_"} className='twitter' target='_blank'>
                            <img src={twitterLogo} alt="twitter" />
                        </Link>
                        <Link to={"https://www.linkedin.com/company/re-platform-dev/about/"} className='linkedin' target='_blank'>
                            <img src={linkedinLogo} alt="linkedin" />
                        </Link>
                    </div>
                </div>

                <div className="contact-info-wrapper">
                    <h4>Contact</h4>
                    <p>contact@replatform.in</p>
                    <p>+91- 9876543210 </p>
                </div>

                <div className="nav-link-wrapper">
                    <h4>
                        Company
                    </h4>
                    <ul>
                        <li>
                            <a href="#footer">About</a>
                        </li>
                        <li>
                            <a href="#footer">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#footer">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="#footer">Privacy Policy</a>
                        </li>
                    </ul> 
                </div>


                <div className="blogpost-input-wrapper">
                    <h4>
                        Subscribe to New Blog Posts
                    </h4>

                    <form onSubmit={handleSubmit}>
                        <Input
                            className={"rp-md-field"}
                            input={{
                            id: "email",
                            type: "email",
                            autoComplete: "off",
                            placeholder: "Enter email",
                            value: values.email,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            error: {
                                errorData: errors.email,
                                touchedData: touched.email,
                            },
                            }}
                        />

                        <div>
                            <Button
                                type={"submit"}
                                text={"Subscribe"}
                                className={`button_32_primary`}
                            />
                        </div>
                    </form>
                </div>

            </div>
            <div className="footer-bottom">
                <div className='footer-bottom-content-wrapper'>
                    <p> &copy;2024 Replatform, All Rights Reserved </p>
                </div>
            </div>
        </section>
    )
}

export default Footer