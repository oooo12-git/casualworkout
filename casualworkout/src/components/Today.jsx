import { useState, useRef, useEffect } from 'react';
import classes from './Today.module.css';

function Today() {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  // 컴포넌트가 마운트될 때 초기 높이 설정
  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <div className={classes.modal}>
      <h2>오늘의 운동</h2>
      <p>날짜<input type="date"></input></p>
      <p>시작시간<input type="time"></input></p>
      <p>메모</p>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder='오늘의 운동을 기록해주세요'
      ></textarea>
    </div>
  );
}

export default Today;
