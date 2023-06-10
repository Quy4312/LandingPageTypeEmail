import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Container">
          <div className="HeaderTop">
            <a className="HeaderLogo">
              <img className="HeaderIcon" src="img/logo.svg" alt="" />
              <span>Type Email</span>
            </a>

            <ul className="HeaderMenu">
              <li className="MenuItem">
                <a href="#" className="MenuLink">
                  Home
                </a>
              </li>
              <li className="MenuItem">
                <a href="#" className="MenuLink">
                  Pricing
                </a>
              </li>
              <li className="MenuItem">
                <a href="#" className="MenuLink">
                  Reasources
                </a>
              </li>
              <li className="MenuItem">
                <a href="#" className="MenuLink">
                  Support
                </a>
              </li>
            </ul>
            <a href="" className="HeaderLogin">
              Login
            </a>
          </div>
          <div className="HeaderContent">
            <h1 className="HeaderHeading TextPrimary">
              Online shoppers into loyal, lifetime customers with email & sms
              marketing
            </h1>
            <div className="HeaderButtons">
              <a href="#" className="HeaderStarted">
                Get started
              </a>
              <a href="#" className="HeaderWorks">
                <span>How it works</span>
                <img src="img/videobutton.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="HeaderImg">
            <img srcSet="img/img1.png 2x" alt="" />
          </div>
        </div>
      </header>
      <main>
        <section className="CountDown">
          <div className="Container">
            <div className="CountDownList">
              <div className="CountDownItem">
                <h3 className="CountDownTitle">1,700+</h3>
                <p className="CountDownText">Companies using Sendlance</p>
              </div>
              <div className="CountDownItem">
                <h3 className="CountDownTitle">40 milion+</h3>
                <p className="CountDownText">Emails sent daily</p>
              </div>
              <div className="CountDownItem">
                <h3 className="CountDownTitle">20,000+</h3>
                <p className="CountDownText">Users on sendlance</p>
              </div>
            </div>
          </div>
        </section>
        <section className="NewsLetter">
          <div className="Container">
            <div className="NewLetterHeader">
              <div className="Heading HeadingBig">
                More than just drips and newsletters
              </div>
              <p className="NewsLetterText">
                {" "}
                awareness through email became a must-have, and our ESP wasn't
                cutting{" "}
              </p>
            </div>
            <div className="NewsLetterMain">
              <div className="NewsLetterContent">
                <h3 className=" Heading NewsLetterTitle">
                  Drive 30-40% of your revenue with email marekiting
                </h3>
                <p className="Text">
                  Unlock customer insights to grow your business faster. Store
                  all your customer data collected from storefront to marketing
                  channels in one central hub far easy use in every strategy.
                </p>
                <div className="NewsLetterList">
                  <div className="NewsLetterItem">
                    <img
                      className="NewsLetterIcon"
                      srcSet="img/logohome.png 2x"
                      alt=""
                    />
                    <h4 className="NewsLetterName">Marketing Automation</h4>
                    <p className="NewsLetterItemText">
                      From open rates to conversion performance, get access to
                      tons of data.
                    </p>
                    <a href="#" className="ReadMore">
                      Read More
                    </a>
                  </div>
                  <div className="NewsLetterItem">
                    <img
                      className="NewsLetterIcon"
                      srcSet="img/logohome.png 2x"
                      alt=""
                    />
                    <h4 className="NewsLetterName">Marketing Automation</h4>
                    <p className="NewsLetterItemText">
                      From open rates to conversion performance, get access to
                      tons of data.
                    </p>
                    <a href="#" className="ReadMore">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="" NewsLetterImage>
                <img srcSet="img/img2.png 2x" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
