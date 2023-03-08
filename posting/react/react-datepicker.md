---
title: react datepicker
description: React datepicker 사용하기
category: react
date: "2023-03-03"
---

# React Datepicker 사용하기

공식 문서

https://reactdatepicker.com/

### package 설치

```bash
yarn add react-datepicker
```

패키지 설치 후 아래와 같이 import해 사용할 수 있다.

```javascript
import DatePicker from "react-datepicker"; // 데이트픽커 import
import "react-datepicker/dist/react-datepicker.css"; // 데이트픽커 기본 CSS
import { ko } from "date-fns/esm/locale"; // 한국어 변환

export default function DatePickerTest() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <DatePicker local={ko} />
    </>
  );
}
```

달력은 props 설정을 통해 다양한 방식의 달력을 설정해줄 수 있다.

아래는 범위 지정 달력을 만드는 코드이다.

```javascript
export default function DatePickerTest() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      elected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      locale={ko}
      selectsRange
      inline
    />
  );
}
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5DkxI%2FbtrMUTz6YZb%2FpYNfcGfYjpM5GZlENLALTk%2Fimg.png)

위 코드는 selectsRange라는 속성의 달력을 이용한다.
다양한 속성은 상단의 공식 페이지 링크를 참고하면 좋다.

## 스타일 적용

custom header 같은 props 옵션 등을 통해 css 스타일을 줄 수 있지만, 스타일이 원하는대로 입히기 어려운 점도 있었고 전체적인 코드가 보기 불편하다는 생각이 들어 styled component를 통해 css를 적용해줬다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzDzqF%2FbtrMWeKqb6T%2FkKiJfjfF1fP7vPcnWpyHOK%2Fimg.png)

```javascript

const StyledDatePickerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 380px;
  border-radius: 20px;
  box-shadow: 0 0 5px 0 rgb(71, 181, 255);

  .react-datepicker {
    background-color: white;
    border-color: rgb(198, 232, 255);
    border-radius: 20px;
  }

  /* ... */

```

코드가 길어지더라도 jsx와 철저하게 분리하고 싶다면 이런 방법도 나쁘지 않은 것 같다.
