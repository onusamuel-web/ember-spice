import { useState } from "react";
import "./App.css";

const dishes = [
  {
  name: "Smoked Jollof",
  description: "Fire-roasted party jollof with grilled chicken and plantain.",
  price: "₦8,500",
  category: "Mains",
  image:
    "https://www.gpafronigerianrestaurant.co.uk/media/gallery/2024-03-18%20%2811%29.jpg?utm_source=chatgpt.com",
},
  {
  name: "Suya Platter",
  description: "Charred beef suya, onions, peppers and our house spice.",
  price: "₦12,000",
  category: "Mains",
  image:
    "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/nigerian_suya.jpg?utm_source=chatgpt.com",
},
 {
  name: "Peppered Prawns",
  description: "Pan-seared prawns finished with a bold pepper glaze.",
  price: "₦15,500",
  category: "Mains",
  image:
    "https://www.daleeeel.com/f/res/h08/articles-photos/000/219/0021944-343-rinnoo-69dd5daa9f49402c8ee447d1ff2e0587.jpg?utm_source=chatgpt.com",
},
  {
  name: "Plantain & Beans",
  description: "Slow-cooked beans, sweet plantain and palm-oil relish.",
  price: "₦7,500",
  category: "Classics",
  image:
    "https://diaryofakitchenlover.com/diary_ktchen/uploads/2023/02/WhatsApp-Image-2023-02-23-at-16.08.52-2.jpeg?utm_source=chatgpt.com",
},
  {
  name: "Chicken Wings",
  description: "Crispy grilled wings coated in our signature smoky pepper glaze.",
  price: "₦8,000",
  category: "Starters",
  image:
    "https://static.wixstatic.com/media/c1e626_91b0a24a587042baad585250ab3f673d~mv2.png/v1/fill/w_810%2Ch_1440%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/c1e626_91b0a24a587042baad585250ab3f673d~mv2.png?utm_source=chatgpt.com",
},
  {
  name: "Jollof Rice",
  description: "Our signature smoky jollof cooked slowly over open flame.",
  price: "₦6,500",
  category: "Classics",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Nigerian_Jollof_02.jpg",
},
  {
  name: "Puff Puff",
  description: "Golden Nigerian puff puff served warm with spiced honey.",
  price: "₦4,500",
  category: "Starters",
  image:
    "https://image.api.sportal365.com/process/smp-images-production/pulse.ng/25072024/270c7f30-02bf-4494-81bc-206661fafc8e?utm_source=chatgpt.com",
},
 {
  name: "Ofada Rice & Sauce",
  description: "Local Ofada rice with rich ayamase sauce and assorted meats.",
  price: "₦10,500",
  category: "Classics",
  image:
    "https://cdn.shopify.com/s/files/1/0807/4903/5848/files/Ofada_Rice_and_Sauce.jpg?v=1742858596&utm_source=chatgpt.com",
},
 {
  name: "Grilled Chicken",
  description: "Charcoal-grilled chicken finished with our house pepper sauce.",
  price: "₦11,500",
  category: "Mains",
  image:
    "https://www.gpafronigerianrestaurant.co.uk/media/gallery/2024-03-18%20%2811%29.jpg?utm_source=chatgpt.com",
},
 {
  name: "Fried Plantain",
  description: "Sweet golden plantain with a lightly caramelised finish.",
  price: "₦3,500",
  category: "Sides",
  image:
    "https://138726329.cdn6.editmysite.com/uploads/1/3/8/7/138726329/P4BEEQ23E26DUNSSKQ5MKPAC.jpeg",
},
  {
  name: "Yam Fries",
  description: "Crispy golden yam fries served with spicy house dip.",
  price: "₦4,500",
  category: "Sides",
  image:
    "https://tawonafoods.com.ng/product-images/-48154971755594108.jpg",
},
  {
  name: "Zobo Spritz",
  description: "Chilled hibiscus drink with citrus, ginger and fresh herbs.",
  price: "₦4,000",
  category: "Drinks",
  image:
    "https://img-global.cpcdn.com/recipes/2e5aec87bd42d29f/680x781f0.489405_0.5_1.0q80/zobo-drink-recipe-main-photo.jpg?utm_source=chatgpt.com",
},
{
  name: "Pineapple Ginger",
  description: "Fresh pineapple, ginger and lime served ice cold.",
  price: "₦4,500",
  category: "Drinks",
  image:
    "https://shamlola.s3.amazonaws.com/Shamlola_Images/6/src/f41c196792a34305084788af036f1f3b1ab7632e.jpg",
},
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="brand-mark">E</span>
        <span>
          <strong>EMBER</strong>
          <small>& SPICE</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#menu" onClick={() => setMenuOpen(false)}>
          Menu
        </a>

        <a href="#story" onClick={() => setMenuOpen(false)}>
          Our Story
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          href="#reserve"
          className="nav-button"
          onClick={() => setMenuOpen(false)}
        >
          Reserve a Table
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">MODERN NIGERIAN DINING • LAGOS</p>

        <h1>
          Fire.
          <span>Flavour.</span>
          Culture.
        </h1>

        <p className="hero-text">
          A modern expression of Nigerian cuisine, crafted around fire,
          bold flavours and unforgettable moments.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="primary-button">
            Explore the Menu <span>↗</span>
          </a>

          <a href="#story" className="text-button">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>EST. 2026</span>
        <span>IKOYI • LAGOS</span>
        <span>DINNER DAILY</span>
      </div>
    </section>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Mains",
    "Classics",
    "Sides",
    "Drinks",
  ];

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-intro">
        <div>
          <p className="section-label">THE EMBER MENU</p>

          <h2>
            Crafted with
            <span> fire.</span>
          </h2>
        </div>

        <div className="menu-intro-side">
          <p>
            Nigerian flavours, elevated through fire, technique and
            carefully selected ingredients.
          </p>

          <span className="menu-note">
            FRESHLY PREPARED • MADE TO ORDER
          </span>
        </div>
      </div>

      <div className="menu-toolbar">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <span className="menu-count">
          {filteredDishes.length.toString().padStart(2, "0")} DISHES
        </span>
      </div>

      <div className="dish-grid">
        {filteredDishes.map((dish, index) => (
          <article
            className={`dish-card ${
              index === 0 ? "featured-dish" : ""
            }`}
            key={dish.name}
          >
            <div className="dish-image">
              <img src={dish.image} alt={dish.name} />

              <div className="dish-image-overlay">
                <span>
                  {index === 0
                    ? "CHEF'S SELECTION"
                    : `0${index + 1}`}
                </span>

                <span>↗</span>
              </div>

              <span className="dish-category">
                {dish.category}
              </span>
            </div>

            <div className="dish-info">
              <div className="dish-copy">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>

              <div className="dish-price">
                <strong>{dish.price}</strong>
                <span>↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="menu-bottom">
        <span>EVERY PLATE HAS A STORY</span>
        <span>EMBER & SPICE — LAGOS</span>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="story-top">
        <p className="section-label">OUR STORY</p>

        <div className="story-heading">
          <h2>
            Rooted in <span>home.</span>
          </h2>

          <p>
            A modern Nigerian dining experience shaped by fire, flavour,
            culture and the memories that bring people together.
          </p>
        </div>
      </div>

      <div className="story-main">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
            alt="Warm restaurant interior"
          />

          <div className="story-image-tag">
            <span>EST.</span>
            <strong>2024</strong>
          </div>
        </div>

        <div className="story-content">
          <p className="story-kicker">FROM OUR KITCHEN</p>

          <h3>
            Nigerian food,
            <br />
            <span>reimagined.</span>
          </h3>

          <p>
            Ember & Spice was born from a simple idea: Nigerian food
            deserves to be experienced with the same creativity,
            detail and care given to the world's great dining cultures.
          </p>

          <p>
            From smoky suya to slow-cooked classics, every plate carries
            something familiar — but with a fresh perspective.
          </p>

          <div className="story-details">
            <div>
              <strong>01</strong>
              <span>Fire-led cooking</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Nigerian ingredients</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Modern experience</span>
            </div>
          </div>

          <a href="#reserve" className="text-button">
            Experience Ember & Spice ↗
          </a>
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=90",
      label: "THE DINING ROOM",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90",
      label: "FROM THE KITCHEN",
    },
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=90",
      label: "THE EXPERIENCE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=90",
      label: "AFTER DARK",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div>
          <p className="section-label">THE EMBER EXPERIENCE</p>

          <h2>
            More than
            <span> dinner.</span>
          </h2>
        </div>

        <div className="gallery-intro">
          <p>
            Step inside Ember & Spice — where food, atmosphere and
            Nigerian culture come together around the table.
          </p>

          <span className="gallery-note">
            A TABLE WORTH REMEMBERING
          </span>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div
            className={`gallery-item gallery-item-${index + 1}`}
            key={item.label}
          >
            <img src={item.image} alt={item.label} />

            <div className="gallery-overlay">
              <span className="gallery-number">
                0{index + 1}
              </span>

              <div className="gallery-label">
                <strong>{item.label}</strong>
                <span>↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section className="reservation" id="reserve">
      <div className="reservation-copy">
        <p className="section-label">YOUR TABLE AWAITS</p>

        <h2>
          Come hungry.
          <span> Leave inspired.</span>
        </h2>

        <p className="reservation-description">
          Good food deserves good company. Reserve your table and make
          your next meal one worth remembering.
        </p>
      </div>

      <div className="reservation-action">
        <span className="reservation-note">
          DINNER • LAGOS • NIGERIA
        </span>

        <a
          href="mailto:reservations@emberandspice.com"
          className="primary-button"
        >
          Make a Reservation <span>↗</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark">E</span>

          <div>
            <strong>EMBER & SPICE</strong>
            <p>Modern Nigerian dining.</p>
          </div>
        </div>

        <div className="footer-message">
          <p>
            Come for the fire.
            <span> Stay for the flavour.</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-details">
          <span>LAGOS, NIGERIA</span>
          <span>OPEN 12PM — 11PM</span>
        </div>

        <div className="footer-links">
          <a href="#menu">MENU</a>
          <a href="#story">OUR STORY</a>
          <a href="#gallery">GALLERY</a>
          <a href="#reserve">RESERVE</a>
        </div>

        <span className="footer-copy">
          © 2026 EMBER & SPICE
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Menu />
        <Story />
        <Gallery />
        <Reservation />
      </main>

      <Footer />
    </>
  );
}

export default App;