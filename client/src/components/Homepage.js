export default function Homepage() {
  return (
    <>
      {/* <div>
        <p>
          Try Wodat? now and never loose track of your stuff again! <br />
          Scattered after a big move? <br />
          Random souvenirs that need a new home? <br />
          Where did you put that nice jacket you got last christmas? <br /> File
          and track safe places to find your beloved but easy to forget objects
        </p>
      </div> */}

      <div className="hero h-screen bg-movingday object-none">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Try{" "}
              <span className="italic font-normal tracking-wider">Wodat?</span>{" "}
              now and never loose track of your stuff again!
            </h1>
            <p className="mb-5">
              Scattered after a big move? <br />
              Random souvenirs that need a new home? <br />
              Where did you put that nice jacket you got last christmas? <br />{" "}
              File and track safe places to find your beloved but easy to forget
              objects
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
