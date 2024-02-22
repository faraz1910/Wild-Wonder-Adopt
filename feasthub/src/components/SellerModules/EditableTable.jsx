import React, { useState } from 'react';

const data = [
  {
    Id: '01',
    day: 'Monday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '02',
    day: 'Tuesday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '03',
    day: 'Wednesday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '04',
    day: 'Thursday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '05',
    day: 'Friday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '06',
    day: 'Saturday',
    lunch: '',
    dinner: '',
  },
  {
    Id: '07',
    day: 'Sunday',
    lunch: '',
    dinner: '',
  },
];

const EditableTable = () => {
  const [menu, setMenu] = useState(data);

  const onChangeInput = (e, Id, field) => {
    const { value } = e.target;

    const editData = menu.map((item) =>
      item.Id === Id ? { ...item, [field]: value } : item
    );

    setMenu(editData);
  };

  return (
    <div className='py-2 ...'>
      <table className='w-full ... border-solid border-2 border-slate-300 ... p-6 '>
        <thead>
          <tr className='w-full ... border-solid border-2 border-slate-300 ... '>
            <th className='border-solid border-2 border-slate-300 ...'>Day</th>
            <th className='border-solid border-2 border-slate-300 ...'>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody className='ps-10 ...'>
          {menu.map(({ Id, day, lunch, dinner }) => (
            <tr key={Id} className='w-full ... border-solid border-2 border-slate-300 ... '>
              <td className='text-center border-solid border-2 border-slate-300 ... p-2'>
                {day} {/* Display day without input field */}
              </td>
              <td className='text-center border-solid border-2 border-slate-300 ... p-2'>
                <input
                  value={lunch}
                  type='text'
                  onChange={(e) => onChangeInput(e, Id, 'lunch')}
                  placeholder='Type lunch'
                />
              </td>
              <td className='text-center p-2'>
                <input
                  value={dinner}
                  type='text'
                  onChange={(e) => onChangeInput(e, Id, 'dinner')}
                  placeholder='Type dinner'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
