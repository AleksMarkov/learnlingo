import heroImage from "../../assets/svg/imageLingo.svg";

function HomeLingo() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">LearnLingo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Teachers</li>
            <li>Log In</li>
            <li>Registration</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Unlock your potential with the best language tutors</h1>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button>Get started</button>
        <img src={heroImage} alt="lingo face" />
        {/* <img src="/path/to/your/image.jpg" alt="Image description" /> */}
      </section>

      <section className="stats">
        <div className="stat">
          <h2>32,000+</h2>
          <p>Experienced tutors</p>
        </div>
        <div className="stat">
          <h2>300,000+</h2>
          <p>5-star tutor reviews</p>
        </div>
        <div className="stat">
          <h2>120+</h2>
          <p>Subjects taught</p>
        </div>
        <div className="stat">
          <h2>200+</h2>
          <p>Tutor nationalities</p>
        </div>
      </section>
    </div>
  );
}

export default HomeLingo;
