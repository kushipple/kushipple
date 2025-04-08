import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！ 訪問いただき誠にありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新しい挨拶
      </button>
    </div>
  );
}

export function CountryCapitalGreeting({countries}) {

  const randomCountry = () => countries[(Math.floor(Math.random() * countries.length))];

  const [currentCountry, setCurrentCountry] = useState(countries[0]);

  return (
    <div>
      <h3>{`国: ${currentCountry.name}, 首都: ${currentCountry.capital}`}！ </h3>
      <button onClick={() => setCurrentCountry(randomCountry())}>
        新しい国と首都
      </button>
    </div>
  );
}