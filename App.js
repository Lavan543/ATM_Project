import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCardInserted, setIsCardInserted] = useState(false);
  const [pin, setPin] = useState('');
  const [balance, setBalance] = useState(1000); // Initial balance

  const handleCardInsertion = () => {
    setIsCardInserted(true);
  };

  const handleWithdrawal = () => {
    const amount = parseFloat(prompt('Enter amount to withdraw:'));
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      alert(`You have withdrawn ₹${amount}. New balance is ₹${balance - amount}.`);
    } else {
      alert('Invalid amount or insufficient balance.');
    }
  };

  const handleDeposit = () => {
    const amount = parseFloat(prompt('Enter amount to deposit:'));
    if (amount > 0) {
      setBalance(balance + amount);
      alert(`You have deposited ₹${amount}. New balance is ₹${balance + amount}.`);
    } else {
      alert('Invalid amount.');
    }
  };

  const checkBalance = () => {
    alert(`Your available balance is ₹${balance}.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ATM MACHINE</h1>
        {!isCardInserted ? (
          <div className="insert-card">
            <button onClick={handleCardInsertion}>Insert Card</button>
          </div>
        ) : (
          <div className="atm-form">
            <label>
              PIN:
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </label>
            <button onClick={handleWithdrawal}>Withdraw</button>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={checkBalance}>Check Balance</button>
            <button onClick={() => window.location.reload()}>Exit</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
