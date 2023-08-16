import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ className }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className="rn-section-gapTop">
            <div className="container">
                <div className="row g-5 justify-content-center mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/esatya/launch.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={21}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Projects Launched
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/esatya/registered.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={16000}
                                    duration={4}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Beneficiaries Impacted
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/esatya/social-engagement.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={77}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Vendors Engaged</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/rumsan-group/rahat-metrics-woman.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={7900}
                                    duration={4}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Women Impacted</div>
                        </div>
                    </div>
                </div>

                <div className="row g-5 justify-content-center mt-3 mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/rumsan-group/children-mertics-rahat.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={4200}
                                    duration={4}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Children Impacted
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/rumsan-group/local-partners-impact.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={21}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Local Partners</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/rumsan-group/nepal-pakistan-rahat-impact.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={2}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                {" "}
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "24px",
                                                            marginLeft: "-10px",
                                                        }}
                                                    >
                                                        Countries
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Nepal And Pakistan
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.com/esatya/money.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={154}
                                    duration={4}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <>
                                                <span
                                                    style={{
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    $
                                                </span>
                                            </>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "30px",
                                                        }}
                                                    >
                                                        K
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Aid Distributed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FunFact.propTypes = {
    className: PropTypes.string,
    counter: PropTypes.number.isRequired,
    title: PropTypes.string,
    suffix: PropTypes.string,
};

export default FunFact;
