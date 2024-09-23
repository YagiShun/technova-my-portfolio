import Image from "next/image";
import "./globals.css";
import React from 'react';

const Header: React.FC = () => {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="#top">Top</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#works">Works</a></li>
          </ul>
        </nav>
      </header>
    );
};

const Top: React.FC = () => {
    return (
        <section id="top" className="section top">
            <h1>Yagi Shunsuke Portfolio Site</h1>

        </section>
    );
}
const About: React.FC = () => {
    return (
      <section id="about" className="section about">
        <h2>About ~自己紹介~</h2>
        <div className="profile">
          <img src="./profile.png" alt="プロフィール" className="profile-image" />
          <div className="profile-text">
            <p>名前: 八木駿輔</p>
            <p>大学: 芝浦工業大学</p>
            <p>学部: デザイン工学部</p>
            <p>年齢: 21歳（26卒）</p>
          </div>
        </div>
      </section>
    );
};
const Skill: React.FC = () => {
    return (
      <section id="skill" className="section skill">
        <h2>Skill ~できること~</h2>
        <div className="skills-grid">
          {/* アイコンを表示する部分 */}
          <div className="skill-item">C言語</div>
          <div className="skill-item">C#</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">Linux</div>
          <div className="skill-item">MySQL</div>
          <div className="skill-item">Python</div>
        </div>
      </section>
    );
};
  
const Works: React.FC = () => {
    return (
      <section id="works" className="section works">
        <h2>Works ~制作物~</h2>
        <div className="works-grid">
          {/* 画像を6つ表示する部分 */}
          <div className="work-item">Image</div>
          <div className="work-item">Image</div>
          <div className="work-item">Image</div>
          <div className="work-item">Image</div>
          <div className="work-item">Image</div>
          <div className="work-item">Image</div>
        </div>
      </section>
    );
};

export default function Home() {
    return (
        <div className="container">
          <Header />
          <main>
            <About />
            <Skill />
            <Works />
          </main>
          <footer className="footer">
            <p>Thank you for coming!</p>
          </footer>
        </div>
    );
}

