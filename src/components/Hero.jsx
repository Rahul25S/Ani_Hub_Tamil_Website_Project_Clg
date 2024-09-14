import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.Webp';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const images = [
  image1, image2, image3, image4, image5, 
  image6, image7, image8, image9, image10
];

const imageTexts = [
  { title: "My Hero Academia", description: "The appearance of quirks, newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powe...", dynamicLabel1: "Ep-0", dynamicLabel2: "13", dynamicLabel3: "MAL Score: 8.18" },
  { title: "Black Clover", description: "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the...", dynamicLabel1: "Ep-4", dynamicLabel2: "170", dynamicLabel3: "MAL Score: 7.29" },
  { title: "That Time I Got Reincarnated as a Slime", description: "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, ...", dynamicLabel1: "Ep-12", dynamicLabel2: "24", dynamicLabel3: "MAL Score: 8.08" },
  { title: "Dr. Stone", description: "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turnin...", dynamicLabel1: "Ep-4", dynamicLabel2: "24", dynamicLabel3: "MAL Score: 8.3" },
  { title: "Ranking of Kings", description: "The web manga centers around Bojji, a deaf, powerless prince who cannot even wield a children's sword. As the firstborn son, he strives hard and dreams of becoming the world's greatest king. However, people mutter about him behind his back as a good-for-nothing ...", dynamicLabel1: "Ep-4", dynamicLabel2: "23", dynamicLabel3: "MAL Score:8.85" },
  { title: "DARLING in the FRANXX", description: "In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as Fran...", dynamicLabel1: "Ep-4", dynamicLabel2: "24", dynamicLabel3: "MAL Score: 7.36" },
  { title: "The Daily Life of the Immortal King", description: "As a cultivation genius who has achieved a new realm every two years since he was a year old, Wang Ling is a near-invincible existence with prowess far beyond his control. But now that he’s sixteen, he faces his greatest battle yet – Senior High School. With one ...", dynamicLabel1: "Ep-15", dynamicLabel2: "15", dynamicLabel3: "MAL Score: 7.16" },
  { title: "Fire Force", description: "Spontaneous Human Combustion: a chaotic phenomenon that has plagued humanity for years, randomly transforming ordinary people into flaming, violent creatures known as Infernals. While Infernals make up the first-generation accounts of Human Combustion, the second..",dynamicLabel1: "Ep-4", dynamicLabel2: "24", dynamicLabel3: "MAL Score: 7.72" },
  { title: "Tomo-chan Is a Girl!", description: "Childhood friends Tomo Aizawa and Junichirou Jun Kubota do everything together, whether it be training or just enjoying a fun day out. Anyone would think that these two are best friends for life. The only issue is that the tomboyish Tomo is in love with Jun, bu...", dynamicLabel1: "Ep-4", dynamicLabel2: "13", dynamicLabel3: "MAL Score: 7.85" },
  { title: "Makeine: Too Many Losing Heroines!", description: "Kazuhiko Nukumizu, a self-proclaimed background character, accidentally witnessed his popular classmate Anna Yanami being rejected by her childhood friend. Since then, Kazuhiko has become involved with several loser heroines, including Anna. ...", dynamicLabel1: "Ep-4", dynamicLabel2: "7+", dynamicLabel3: "MAL Score: ?" },
  ];

const imageUrls = [
  "/My-Hero-Academia",
  "/Black-Clover",
  "/That-Time-I-Got-Reincarnated-as-a-Slime",
  "/Dr-Stone",
  "/Ranking-of-Kings",
  "/DARLING-in-the-FRANXX",
  "/The-Daily-Life-of-the-Immortal-King",
  "/Fire-Force",
  "/Tomochan-Is-a-Girl",
  "/Makeine-Too-Many-Losing-Heroines"
];  

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right'); // Track the direction of the slide
  const navigate = useNavigate(); 
  const totalImages = images.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImage === totalImages - 1) {
        setCurrentImage(0); // Restart from the first image after reaching the last one
      } else {
        setCurrentImage((prevImage) => prevImage + 1);
      }
    }, 4000);

    return () => clearInterval(intervalId); 
  }, [currentImage, totalImages]);

  const handleButtonClick = () => {
    navigate(imageUrls[currentImage]);
  };

  const handleNextImage = () => {
    if (currentImage === totalImages - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevImage) => prevImage + 1);
    }
    setSlideDirection('right'); // Move to the right
  };

  const handlePreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(totalImages - 1);
    } else {
      setCurrentImage((prevImage) => prevImage - 1);
    }
    setSlideDirection('right'); // Move to the left
  };

  return (
    <div className="relative w-full h-[80vh] lg:h-[85vh] overflow-hidden">
      <div
        className={`absolute inset-0 flex transition-transform duration-1000 ease-in-out ${slideDirection === 'right' ? 'slide-right' : 'slide-left'}`}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img 
              className="w-full h-full object-cover object-center"
              src={image} 
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute bottom-10 left-4 right-16 p-4 flex flex-col">
              <h2 
                className="hero-title text-4xl md:text-5xl lg:text-6xl font-nsans-medium absolute bottom-36"
                style={{
                  maxWidth: '50%',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  marginBottom: '1.5em',
                }}
              >
                {imageTexts[index].title}
              </h2>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 text-sm text-white bg-green-600 rounded">PG-13</span>
                <span className="px-2 py-1 text-sm text-white bg-blue-600 rounded">{imageTexts[index].dynamicLabel1}</span>
                <span className="px-2 py-1 text-sm text-white bg-gray-600 rounded">{imageTexts[index].dynamicLabel2}</span>
                <span className="px-2 py-1 text-sm text-white bg-purple-600 rounded">{imageTexts[index].dynamicLabel3}</span>
              </div>
              <p 
                className="mt-4 mb-4 overflow-hidden max-h-[7em] leading-tight w-[40%]" 
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 7,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {imageTexts[index].description}
              </p>
              <div className="flex gap-2">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-l-full rounded-r-full hover:bg-blue-700 transition-all duration-300"
                  onClick={handleButtonClick}
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 right-4 flex flex-col gap-2">
        <button 
          className="p-3 bg-gray-700 text-white rounded hover:bg-blue-600 hover:text-black transition-all duration-300"
          onClick={handleNextImage}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
        <button 
          className="p-3 bg-gray-700 text-white rounded hover:bg-blue-600 hover:text-black transition-all duration-300"
          onClick={handlePreviousImage}
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
};



export default Hero;
