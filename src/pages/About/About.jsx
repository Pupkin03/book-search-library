import "./About.css";
import aboutImg from "../../images/about-img.jpg"

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">This is a digital platform that provides a vast collection of 
            books, ebooks, and audiobooks. Users can browse, search, and discover new titles, read 
            reviews, and create personalized reading lists. The website offers features like 
            recommendations, borrowing options, and social interactions with other book lovers.
            </p>
            <p className="fs-17">We are a fantastic resource for book lovers. Its intuitive interface 
            and extensive collection make it easy to find and explore new titles. The community features 
            are engaging, allowing users to connect with fellow readers and share recommendations. Whether you're 
            a casual reader or a dedicated bibliophile, BookWebsite has something to offer.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About