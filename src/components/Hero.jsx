import profile from '../assets/profile.png'

function Hero() {
  return (
    <section id="hero" className="hero" >
    
      <div className="hero-content reveal">
        <h1>Arpit Yadav</h1>
        <p className="hero-subtitle">
          B.Tech CSE · Developer
        </p>
        <p className="hero-description">
          I build clean, scalable software and focus on turning ideas into
          reliable systems.
        </p>
      </div>

       <div className="hero-image">
            <div className="image-circle">
            <img src={profile} alt="Arpit Yadav" />
        </div>
        </div>


    </section>
  )
}

export default Hero
