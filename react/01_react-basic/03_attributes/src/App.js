import React from "react";
import "./styles.css";

export default function App() {
  return <RunThisShit/>;
}


export const RunThisShit = () => {
  return (
    <article>
      <h2 className="article__title">Neden aynı şeyleri tekrar tekrar yapmaya devam ediyorum?</h2>
      <label htmlFor="article_input">Önceki girişi tekrar dene:</label>
      <input id="article_input" placeholder="Bunun nasıl çalıştığını biliyorsun! Sadece yap, şimdiden!"></input>
      <a className="article__link" href="https://www.turkceterapi.com/blog/kendinden-nefret-etmekkendini-sevememek">Yardım etmenin bir yolunu bul.</a>
    </article>
  )
}
