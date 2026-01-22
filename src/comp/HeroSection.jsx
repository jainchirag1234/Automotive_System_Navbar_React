import { MdArrowRightAlt } from "react-icons/md";
export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main ">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner">
              <h1 className="heading-xl">
                All Your Files in One Secure Location.
              </h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <MdArrowRightAlt />
              </button>
            </div>
            <div className="banner-img"></div>
          </div>
        </div>
      </main>
    </>
  );
};
