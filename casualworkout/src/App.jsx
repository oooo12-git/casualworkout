import {  useEffect, useState } from 'react'
import './App.css'
import Today from './components/Today'
import Workout from './components/Workout'


function App() {
  // workouts 배열을 상태로 관리
  const [workouts, setWorkouts] = useState([0]); // 초기값으로 하나의 Workout 표시
  //[0,1]
  //['재현','혬니',"잼동","혬동"]
  
  useEffect(() => {
    console.log('workouts',workouts);
  }, [workouts]);


  // ()=>{~~~~~}
  //()=>~~~~~
  // 새로운 Workout을 추가하는 함수
  const handleAddWorkout = () => {
    setWorkouts((prev) => ([...prev, prev.length]));
  };

  return (
    <>
     <nav className='nav'>
      <span className='nav-title'>대충운동</span>
      <span className='nav-item'>오늘운동</span>
      <span className='nav-item'>옛날운동</span>
      <span className='nav-item'>커뮤니티</span>
     </nav>
     <div className='container'>
      <Today />
      {/* workouts 배열을 매핑하여 Workout 컴포넌트들을 렌더링 */}
      {workouts.map((_, index) =>         
          (<Workout key={index} />) 
      )}
      <button className='machine-add-button' onClick={handleAddWorkout}>추가</button>
      <br></br>
      <button className='end-button'>운동종료</button>
      <br></br>
     </div>
    </>
  )
}

export default App
