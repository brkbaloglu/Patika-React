import './App.css';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { useState, useEffect } from 'react';

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var"
  },
  "en-US": {
    title: "Hello world",
    description: "You have {count} new messages"
  }
}

function App() {

  const defaultLocale = localStorage.getItem("locale") ? localStorage.getItem("locale") : navigator.language
  const [lang, setLang] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", lang)
  }, [lang])
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id='title'></FormattedMessage>
        <p><FormattedMessage id='description' values={{count: 5}}></FormattedMessage></p>
        <br /><br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
