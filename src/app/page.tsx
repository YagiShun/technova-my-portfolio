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
            <li><a href="https://twitter.com/yagi_siba"><img src="https://github.com/YagiShun/technova-my-portfolio/blob/main/src/app/icon/X.png?raw=true" height="25px" width="25px" alt="Xリンク"/></a></li>
            <li><a href="https://github.com/YagiShun"><img src="https://github.com/YagiShun/technova-my-portfolio/blob/main/src/app/icon/git.png?raw=true" height="25px" width="25px" alt="gitリンク"/></a></li>
          </ul>
        </nav>
      </header>
    );
};

const Top: React.FC = () => {
    return (
        <section id="top" className="section top">
            <h1>Yagi Shunsuke Portfolio Site</h1>
            <div><Image src="/icon/icon.jpg" height={500} width={500} alt="アイコン" className="icon-image" /></div>

        </section>
    );
}
const About: React.FC = () => {
    return (
      <section id="about" className="section about">
        <h2>About ~自己紹介~</h2>
        <div className="profile">
            <div className="profile-text">
                <p>名前: 八木駿輔</p>
                <p>大学: 芝浦工業大学</p>
                <p>学部: デザイン工学部</p>
                <p>学科: デザイン工学科ロボティクス・情報デザイン系</p>
                <p>年齢: 21歳（26卒）</p>
            </div>
            <div className="profile-img"><img src="https://github.com/YagiShun/technova-my-portfolio/blob/main/src/app/icon/profile.png?raw=true" height="490px" width="300px" alt="プロフィール" /></div>
        </div>
      </section>
    );
};
const Skill: React.FC = () => {
    return (
      <section id="skill" className="section skill">
        <h2>Skill ~できること~</h2>
        <div className="skills-grid">
          
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/C.svg" height="200px" width="200px" alt="C" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CS.svg" height="200px" width="200px" alt="C#" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg" height="200px" width="200px" alt="CSS" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg" height="200px" width="200px" alt="HTML" /></div>
            <div className="skill-item">C言語</div>
            <div className="skill-item">C#</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">HTML</div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Java-Dark.svg" height="200px" width="200px" alt="Java" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Linux-Dark.svg" height="200px" width="200px" alt="Linux" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MySQL-Dark.svg" height="200px" width="200px" alt="MySQL" /></div>
            <div><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Python-Dark.svg" height="200px" width="200px" alt="Python" /></div>
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
            <Top />
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
