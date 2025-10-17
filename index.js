import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const partners = [
    "https://via.placeholder.com/150x80?text=Company+1",
    "https://via.placeholder.com/150x80?text=Company+2",
    "https://via.placeholder.com/150x80?text=Company+3",
    "https://via.placeholder.com/150x80?text=Company+4",
  ];

  const testimonials = [
    {
      name: "Alice",
      text: "This course helped me land a data analyst job!",
    },
    { name: "Bob", text: "Practical and industry-focused, highly recommend!" },
    { name: "Charlie", text: "Great support and learning environment." },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Head>
        <title>Data Science Mastery</title>
        <meta
          name="description"
          content="Learn Data Science with top companies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Master Data Science
        </h1>
        <p style={{ fontSize: "1.3rem", margin: "20px 0" }}>
          Learn from top companies with hands-on projects and certification
        </p>
        <a
          href="#enroll"
          style={{
            display: "inline-block",
            padding: "15px 30px",
            backgroundColor: "#FBBF24",
            color: "#1F2937",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          Enroll Now
        </a>
      </section>

      {/* Partners Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
          Our Partner Companies
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          style={{ padding: "20px 0" }}
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={partner}
                alt={`Partner ${idx}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#F3F4F6",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
          Why Choose This Course?
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Industry Projects",
              desc: "Work on real-world data science projects from day one.",
            },
            {
              title: "Expert Mentors",
              desc: "Learn from professionals working in top tech companies.",
            },
            {
              title: "Certification",
              desc: "Get recognized certificates to boost your career.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 250px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
          Testimonials
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  padding: "30px",
                  backgroundColor: "#E5E7EB",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                  "{t.text}"
                </p>
                <h4 style={{ fontWeight: "bold", color: "#1F2937" }}>
                  - {t.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#1E293B",
          color: "white",
        }}
      >
        &copy; 2025 Data Science Mastery. Contact: info@datasciencemastery.com
      </footer>
    </div>
  );
      }
