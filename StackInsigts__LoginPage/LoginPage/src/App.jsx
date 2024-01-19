import React from "react";
import { Row, Col, Flex } from "antd";
import Left from "../src/Left.jpg";

const App = () => {
  return (
    <>
      <Row style={{overflowY:"hidden"}}>
        <Col style={{ width: "35vw" }}>
          <img
            src={Left}
            alt=""
            style={{ height: "100vh", width: "35vw", margin: 0, padding: 0 }}
          />
        </Col>
        <Col style={{ width: "63vw" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginLeft: "20%",
              marginRight: "18%",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Row>
              <Col span={24}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  style={{ marginTop: "7px", marginRight: "6px" }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.6364 13.1818H1V18.6364C1 20.1426 5.39575 21.3636 10.8182 21.3636C16.2406 21.3636 20.6364 20.1426 20.6364 18.6364V13.1818Z"
                    fill="url(#paint0_linear_56_402)"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M1 13.1818V12.6818H0.5V13.1818H1ZM20.6364 13.1818H21.1364V12.6818H20.6364V13.1818ZM1 13.6818H20.6364V12.6818H1V13.6818ZM1.5 18.6364V13.1818H0.5V18.6364H1.5ZM10.8182 20.8636C8.13889 20.8636 5.73148 20.5614 4.0095 20.0831C3.145 19.8429 2.48163 19.5661 2.04603 19.28C1.59007 18.9806 1.5 18.7525 1.5 18.6364H0.5C0.5 19.2733 0.959394 19.7627 1.49709 20.1159C2.05514 20.4824 2.82962 20.7932 3.74186 21.0466C5.57337 21.5554 8.07505 21.8636 10.8182 21.8636V20.8636ZM20.1364 18.6364C20.1364 18.7525 20.0463 18.9806 19.5903 19.28C19.1547 19.5661 18.4914 19.8429 17.6269 20.0831C15.9049 20.5614 13.4975 20.8636 10.8182 20.8636V21.8636C13.5613 21.8636 16.063 21.5554 17.8945 21.0466C18.8067 20.7932 19.5812 20.4824 20.1393 20.1159C20.677 19.7627 21.1364 19.2733 21.1364 18.6364H20.1364ZM20.1364 13.1818V18.6364H21.1364V13.1818H20.1364Z"
                    fill="white"
                  />
                  <ellipse
                    cx="10.8182"
                    cy="13.1818"
                    rx="9.81818"
                    ry="2.72727"
                    fill="url(#paint1_linear_56_402)"
                    fill-opacity="0.4"
                    stroke="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.6364 8.27274H1V13.7273C1 15.2335 5.39575 16.4546 10.8182 16.4546C16.2406 16.4546 20.6364 15.2335 20.6364 13.7273V8.27274Z"
                    fill="url(#paint2_linear_56_402)"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M1 8.27274V7.77274H0.5V8.27274H1ZM20.6364 8.27274H21.1364V7.77274H20.6364V8.27274ZM1 8.77274H20.6364V7.77274H1V8.77274ZM1.5 13.7273V8.27274H0.5V13.7273H1.5ZM10.8182 15.9546C8.13889 15.9546 5.73148 15.6523 4.0095 15.174C3.145 14.9339 2.48163 14.657 2.04603 14.3709C1.59007 14.0715 1.5 13.8434 1.5 13.7273H0.5C0.5 14.3642 0.959394 14.8537 1.49709 15.2068C2.05514 15.5733 2.82962 15.8841 3.74186 16.1375C5.57337 16.6463 8.07505 16.9546 10.8182 16.9546V15.9546ZM20.1364 13.7273C20.1364 13.8434 20.0463 14.0715 19.5903 14.3709C19.1547 14.657 18.4914 14.9339 17.6269 15.174C15.9049 15.6523 13.4975 15.9546 10.8182 15.9546V16.9546C13.5613 16.9546 16.063 16.6463 17.8945 16.1375C18.8067 15.8841 19.5812 15.5733 20.1393 15.2068C20.677 14.8537 21.1364 14.3642 21.1364 13.7273H20.1364ZM20.1364 8.27274V13.7273H21.1364V8.27274H20.1364Z"
                    fill="white"
                  />
                  <ellipse
                    cx="10.8182"
                    cy="8.27273"
                    rx="9.81818"
                    ry="2.72727"
                    fill="url(#paint3_linear_56_402)"
                    fill-opacity="0.4"
                    stroke="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.6364 3.36365H1V8.81819C1 10.3244 5.39575 11.5455 10.8182 11.5455C16.2406 11.5455 20.6364 10.3244 20.6364 8.81819V3.36365Z"
                    fill="url(#paint4_linear_56_402)"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M1 3.36365V2.86365H0.5V3.36365H1ZM20.6364 3.36365H21.1364V2.86365H20.6364V3.36365ZM1 3.86365H20.6364V2.86365H1V3.86365ZM1.5 8.81819V3.36365H0.5V8.81819H1.5ZM10.8182 11.0455C8.13889 11.0455 5.73148 10.7432 4.0095 10.2649C3.145 10.0248 2.48163 9.74792 2.04603 9.46184C1.59007 9.16239 1.5 8.93434 1.5 8.81819H0.5C0.5 9.45516 0.959394 9.94457 1.49709 10.2977C2.05514 10.6642 2.82962 10.975 3.74186 11.2284C5.57337 11.7372 8.07505 12.0455 10.8182 12.0455V11.0455ZM20.1364 8.81819C20.1364 8.93434 20.0463 9.16239 19.5903 9.46184C19.1547 9.74792 18.4914 10.0248 17.6269 10.2649C15.9049 10.7432 13.4975 11.0455 10.8182 11.0455V12.0455C13.5613 12.0455 16.063 11.7372 17.8945 11.2284C18.8067 10.975 19.5812 10.6642 20.1393 10.2977C20.677 9.94457 21.1364 9.45516 21.1364 8.81819H20.1364ZM20.1364 3.36365V8.81819H21.1364V3.36365H20.1364Z"
                    fill="white"
                  />
                  <ellipse
                    cx="10.8182"
                    cy="3.36364"
                    rx="9.81818"
                    ry="2.72727"
                    fill="url(#paint5_linear_56_402)"
                    fill-opacity="0.4"
                    stroke="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_56_402"
                      x1="20.4482"
                      y1="21.4546"
                      x2="16.7791"
                      y2="8.73853"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_56_402"
                      x1="20.4482"
                      y1="15.9697"
                      x2="18.7447"
                      y2="7.11423"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_56_402"
                      x1="20.4482"
                      y1="16.5455"
                      x2="16.7791"
                      y2="3.82944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_56_402"
                      x1="20.4482"
                      y1="11.0606"
                      x2="18.7447"
                      y2="2.20514"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_56_402"
                      x1="20.4482"
                      y1="11.6364"
                      x2="16.7791"
                      y2="-1.07965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_56_402"
                      x1="20.4482"
                      y1="6.15153"
                      x2="18.7447"
                      y2="-2.70395"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF95C3" />
                      <stop offset="1" stop-color="#FF00C7" />
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ fontSize: "24px" }}>data</span>
                <span style={{ fontSize: "24px", color: "rgb(212, 60, 162)" }}>
                  insights
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Login</h1>
                <p style={{ fontSize: "18px", color: "#8A94A6" }}>
                  Welcom back, youve been missed!
                </p>
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="Username"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="Username"
                  style={{
                    fontSize: "18px",
                    color: "#8A94A6",
                    borderRadius: "4px",
                    border: "1px solid rgba(187, 57, 243, 0.40)",
                    width: "37.8vw",
                    height: "3vw",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                />
                <label
                  htmlFor="password"
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                    fontWeight: "500",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  style={{
                    fontSize: "18px",
                    color: "#8A94A6",
                    borderRadius: "4px",
                    border: "1px solid rgba(0,0,0,0.10)",
                    width: "37.8vw",
                    height: "3vw",
                    paddingLeft: "20px",
                    marginTop: "10px",
                  }}
                />

                <div
                  style={{
                    height: "vh",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "30px",
                    marginBottom: "50px",
                    position: "relative",
                  }}
                >
                  <Row>
                    <input
                      style={{
                        position: "absolute",
                        left: "0px",
                        height: "18px",
                        width: "18px",
                      }}
                      type="checkbox"
                      name="check"
                      id=""
                    />
                    <label
                      style={{
                        marginLeft: "10px",
                        position: "absolute",
                        left: "23px",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#8A94A6",
                      }}
                      htmlFor="check"
                    >
                      Remember me
                    </label>{" "}
                    <a
                      style={{
                        position: "absolute",
                        right: "0px",
                        fontSize: "16px",
                        textDecorationLine: "underline",
                        color: "#8A94A6",
                      }}
                      href=""
                    >
                      Forgot Password?
                    </a>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <button
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "39.8vw",
                  height: "3vw",
                  color: "white",
                  background: "#902ABC",
                  borderRadius: "4px",
                  border: "0px",
                  fontSize: "20px",
                }}
              >
                Login
              </button>
            </Row>
            <Row style={{display:"flex", flexDirection:"row", width:"39.8vw", alignItems:"center", justifyContent:"center"}}>
                Don't have an account yet? &nbsp;<b><a style={{color:"purple", fontWeight:"700"}} href="">Sign up</a></b>
             
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default App;
