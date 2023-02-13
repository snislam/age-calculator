import { useState } from 'react';
import './App.css';

function App() {
  const [presentDate, setPresentDate] = useState(new Date().toISOString().split('T')[0])
  const [birthDate, setBirthDate] = useState('')
  const [dayCount, setDayCount] = useState(0)
  const [monthCount, setmonthCount] = useState(0)
  const [yearCount, setyearCount] = useState(0)

  const handlePresentOnChange = (e: any) => {
    e.preventDefault();
    setPresentDate(e.target.value)
  }
  const handleBirthOnChange = (e: any) => {
    e.preventDefault();
    setBirthDate(e.target.value)
  }

  const handleCalculate = () => {
    if (presentDate && birthDate) {
      let birthDay = Number(birthDate.split('-')[2])
      let birthMonth = Number(birthDate.split('-')[1])
      let birthYear = Number(birthDate.split('-')[0])
      let presentDay = Number(presentDate.split('-')[2])
      let presentMonth = Number(presentDate.split('-')[1])
      let presentYear = Number(presentDate.split('-')[0])
      let day;
      let month;
      let year;

      if (presentDay < birthDay) {
        presentDay += 30;
        presentMonth--;
        day = presentDay - birthDay
        setDayCount(day)

      } else {
        day = presentDay - birthDay
        setDayCount(day)
      }

      if (presentMonth < birthMonth) {
        presentMonth += 12;
        presentYear--
        month = presentMonth - birthMonth
        year = presentYear - birthYear
        setmonthCount(month)
        setyearCount(year)
      } else {
        month = presentMonth - birthMonth
        year = presentYear - birthYear
        setmonthCount(month)
        setyearCount(year)
      }
      // console.log(`Your age ${year} year ${month} ${month > 1 ? "months" : "month"} and ${day} ${day > 1 ? "days" : "day"}`)
    } else {
      console.log("Enter all field")
    }
  }

  return (
    <div className="main-page">
      <div className='main-body'>
        <div className='main-body-header'>
          <h1>Calculate your Age</h1>
          <p>I know it can't control your age but it can aware yourself!</p>
        </div>
        {(dayCount || monthCount || yearCount) ? (<div className='main-body-display'>
          <p>{`Your age ${yearCount} ${yearCount > 1 ? "years" : "year"} ${monthCount} ${monthCount > 1 ? "months" : "month"} and ${dayCount} ${dayCount > 1 ? "days" : "day"}`}</p>
        </div>) : ""}
        <div className='main-body-form'>
          <form className='form-body'>
            <div className='input-group'>
              <label htmlFor="birthDate">Birth Date</label>
              <input onChange={handleBirthOnChange} type="date" defaultValue={birthDate} />
            </div>
            <div className='input-group'>
              <label htmlFor="present-date">Present Date</label>
              <input onChange={handlePresentOnChange} type="date" defaultValue={presentDate} />
            </div>
            <input onClick={handleCalculate} className='submit-btn' type="button" value="Calculate" />
          </form>
        </div>
      </div>
      <p>Copyright &copy; <a href="https://www.linkedin.com/in/najmulshaikh/" target="_blank">Najmul Islam</a> - {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
