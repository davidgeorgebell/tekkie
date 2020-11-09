import React from 'react';

export const currecies = [
  { name: 'gbp' },
  { name: 'usd' },
  { name: 'jpy' },
  { name: 'eur' },
  { name: 'twd' },
  { name: 'cny' },
  { name: 'rub' },
];

export const CurrencyForm = ({ handleSelectCurrency }) => {
  return (
    <form>
      <label>
        Pick a currency:
        <select onChange={handleSelectCurrency}>
          {currecies.map(c => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};
