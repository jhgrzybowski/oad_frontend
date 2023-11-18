import React from "react";

const WelcomePage = () => {
  return (
    <div className="main">
      <div className="welcome">
        <h1>Poznaj naszą aplikację</h1>
        <ul>
          <li>RAZ DZIENNIE</li>
          <p>
            Korzystanie z aplikacji w celu dodania aktywności odbywa się raz
            dziennie. Po zatwierdzeniu aktualizacji profilu nie można go zmienić
            przez 24 godziny. Pozwala to na utrzymanie cyfrowego dobrostanu oraz
            naturalność i organiczność swoich postów.
          </p>
          <li>AKTYWNOŚCI</li>
          <p>
            Wszystko to co użytkownik może dodać na swój profil to aktywności.
            Aplikacja umożliwia dodanie kilku różnorodnych aktywności: zdjęcia,
            linki do piosenek czy filmików, notatki (głosowe), opinie, punkty na
            mapie. Wszystko po to aby jak najlepiej zdefiniować się jako osobę i
            pokazać swój charakter jak najlepiej jest to możliwe poprzez
            Internet.
          </p>
          <li>POŁĄCZENIA</li>
          <p>
            Osoby z którymi piszemy w aplikacji to (aktywne) połączenia.
            Dziennie aplikacja oferuje nam kilka połączonych osób, z którymi
            możemy nawiązać kontakt. Liczba ta jest jednak ograniczona z uwagi
            na motywację utworzenia dłuższej i głębszej konwersacji z mniejszą
            liczbą osób.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
