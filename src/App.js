import { useEffect, useState } from 'react';
import './App.css';
import { BiDotsVerticalRounded } from 'react-icons/bi';

function App() {
  const [asc, setAsc] = useState(null);
  const handleAsc = () => {
    setAsc(true)
  }
  const handleDesc = () => {
    setAsc(false)
  }
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setChefs(data))
  }, [])
  const data = (asc === null && chefs) || (asc && chefs.sort((a, b) => a.fName > b.fName ? 1 : -1)) || (!asc && chefs.sort((a, b) => a.fName > b.fName ? -1 : 1))

  return (
    <div className="App">
      <div className="overflow-x-auto w-[1280px] mx-auto pt-10 px-5 lg:px-0">
        <table className="table-normal w-full">
          <thead className='bg-gray-200 rounded-t-xl'>
            <tr>
              <th>
              </th>
              <th className='flex items-center'>First Name <ul className='menu menu-horizontal px-1'><li tabIndex={0}>
                <a>
                  <BiDotsVerticalRounded className='text-xl' />
                </a>
                <ul className="p-2 bg-base-100">
                  <li className='disabled'><button>Unsort</button></li>
                  <li><button className={`${asc === true && "active"}`} onClick={handleAsc}>Sort by ASC</button></li>
                  <li><button className={`${asc === false && "active"}`} onClick={handleDesc}>Sort by DESC</button></li>
                </ul>
              </li></ul></th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(chef => <tr key={chef.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox"/>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <h1>{chef.fName}</h1>
                  </div>
                </td>
                <td>
                  <h1>{chef.lName}</h1>
                </td>
                <td>{chef.age}</td>
                <td>
                  <h1>{chef.fName} {chef.lName}</h1>
                </td>
                <td>{chef.gender}</td>
                <td>
                  <h1 className={`${chef.status === "true" ? 'text-green-600' : 'text-red-600'}`}>{chef.status}</h1>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
