import React from 'react';

import oneClickDeployment from "../../../assets/homeServicesImages/one_click_deployment.svg";
import appConfig from "../../../assets/homeServicesImages/app_config.svg";
import appAlert from "../../../assets/homeServicesImages/app_alerts.svg";
import appCatalog from "../../../assets/homeServicesImages/app_catalog.svg";
import appIncident from "../../../assets/homeServicesImages/app_incident.svg";
import appLogging from "../../../assets/homeServicesImages/app_logging.svg";
import appMonitoring from "../../../assets/homeServicesImages/app_monitoring.svg";
import appSliSlo from "../../../assets/homeServicesImages/app_sli_slo.svg";

import "./Features.scss";


const FeaturesList = [
    {
        feature: "One-click Kubernetes deployment",
    //   description: "Streamline Kubernetes deployment with a single click.",
        description: "Instantly deploy Kubernetes clusters with just one click, simplifying your operations.",
        imgUrl: oneClickDeployment,
    },
    {
      feature: "App config Management",
      description:
        "Efficiently handle application configuration with streamlined App Config Management.",
      imgUrl: appConfig,
    },
    {
      feature: "Incident/RCA management",
      description:
        "Efficiently handle incident and root cause analysis (RCA) management.",
      imgUrl: appIncident,
    },
    {
      feature: "SLIs/SLOs management",
      description:
        "Efficiently manage SLIs (Service Level Indicators) and SLOs (Service Level Objectives) for optimal performance and reliability.",
      imgUrl: appSliSlo,
    },
    {
      feature: "App Monitoring",
      description:
        "Continuous monitoring of application performance for optimal functionality and user experience.",
      imgUrl: appMonitoring,
    },
    {
      feature: "App Logging",
      description:
        "Efficient app logging for streamlined troubleshooting and analysis.",
      imgUrl: appLogging,
    },
    {
      feature: "Alert Management",
      description:
        "Efficiently oversee and respond to alerts through strategic alert management.",
      imgUrl: appAlert,
    },
    {
      feature: "Service Catalog",
      description:
        "A Service Catalog organizes and presents a comprehensive list of available services within an organization.",
      imgUrl: appCatalog,
    },
];
  

const Features = () => {
  return (
    <section id='features' className='features-section'>
        <div className="features-wrapper">
            <div className=" center">
                <p className="service-chip">OUR FEATURES</p>
                <p className="section-heading">What we are doing for you?</p>
            </div>
            <div className="features">
            {FeaturesList.map((feature) => (
                <div key={feature.feature} className="card-details">
                <img src={feature.imgUrl} />
                <h2 className="heading">{feature.feature}</h2>
                <p className="description">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Features