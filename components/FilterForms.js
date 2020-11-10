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

export const FilterForms = ({
  handleSelectCurrency,
  handleRankOrder,
  handleSearchFilter,
}) => {
  return (
    <form className="flex flex-wrap py-10">
      <div className="container max-w-2xl pb-6 pt-1">
        <input
          className="w-64 shadow appearance-none border border-teal-400 rounded py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 "
          placeholder="Search crypto coin "
          type="text"
          onChange={handleSearchFilter}
        />
      </div>
      <div className="pr-4">
        <label className="text-teal-400 font-bold">
          Rank:
          <select
            className="block bg-transparent py-1 text-gray-100 font-medium text-base focus:outline-none"
            name="rank"
            onChange={handleRankOrder}>
            <option value="desc">Des</option>
            <option value="asc">Asc</option>
          </select>
        </label>
      </div>
      <div>
        <label className="font-bold text-teal-400">
          Currency:
          <select
            className="block uppercase bg-transparent pl-2 pr-8 py-1 text-gray-100 font-medium text-base focus:outline-none "
            onChange={handleSelectCurrency}>
            {currecies.map(c => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
};
