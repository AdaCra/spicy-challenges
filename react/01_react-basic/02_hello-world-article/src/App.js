import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}


export const HelloWorldArticle = () => {
  return (
    <article>
      <h1>Witaj świecie</h1>
      <h2>Dlaczego zawsze jest po angielsku</h2>
      <p>Co ciekawe, kilka komentarzy pochodzi od osób, które nie są rodzimymi użytkownikami języka angielskiego, którzy preferują angielskie języki programowania - niektóre z nich z powodu efektów sieciowych (przykładowy kod i dokumentacja są łatwiejsze do znalezienia w języku angielskim), niektóre z nich, ponieważ wszystkie są abstrakcyjne/nienaturalne język i tak, a angielski sprawdza się wystarczająco dobrze w tym kontekście. Na przykład Bjorn: Zakładasz, że posiadanie słów kluczowych we własnym języku jest korzystne. To nie jest. Tylko Anglicy tego nie rozumieją. Posiadanie angielskich słów kluczowych sprawia, że programowanie jest dla nas abstrakcją od normalnego języka, dla was tubylców musi to być ciągłe zamieszanie, z którym muszą sobie radzić wasze umysły. Więc dzięki, ale nie, dzięki… NIE chcemy słów kluczowych w lokalnym języku do programowania. Każdy, kto stworzył własny język programowania na uniwersytecie i wypróbował lokalne słowa kluczowe, zgodzi się ze mną co do tego, jak mylące jest czytanie kodu. youki: W latach 90-tych stworzyłem pewien projekt używając Windeva, pomimo faktu, że jestem Francuzem, programowanie po francusku było naprawdę bardzo trudne, w tym czasie nie było możliwe posiadanie słowa kluczowego w języku angielskim z Windevem i naprawdę tego żałuję. „Myślenie” po francusku było bardzo bolesne. Myślę, że tylko dlatego, że mój mózg nie był do tego wyszkolony. mysoft : wiem, że tutaj, w Brazylii, ludzie robią DUŻO rzeczy po portugalsku, a na uniwersytecie uczysz się angielskich pojęć po portugalsku, osobiście tego nie lubię…. ponieważ wiele przykładów w Internecie będzie w języku angielskim, a we wcześniejszych dniach masz 2-literowe zmienne…. więc odgadywanie ich znaczenia było trudnym zadaniem, zanim nauczyłem się angielskiego… więc myślę, że skupienie się na języku angielskim jest dobrą rzeczą, a także myślę, że każdy, kto zajmuje się kodowaniem, POWINIEN bardzo dobrze znać angielski…. hpm : Jestem niemieckim programistą i często używam angielskich komentarzy i angielskich nazw zmiennych, ponieważ są one krótsze i bardziej wyraziste niż niemieckie.</p>
    </article>
  )
}
