---
title: sw first test4
description: 정보처리기사 필기(4) - 프로그래밍 언어 활용
category: sw
keyword: 정보처리기사, 정처기, 필기, 프로그래밍 언어 활용
date: "2023-12-27"
---

## 필기 시험 공략

개인적으로 필기 시험의 경우 기출문제를 많이 풀어보는 것으로 충분하다고 생각한다.

구글 앱 스토어에서 "**정보처리기출문제**"라는 키워드로 검색해서 앱에 등록된 문제들을 많이 풀어보면 좋을 것 같다.

나의 경우 아래의 순서로 필기한 후, 기출문제를 많이 풀어본 후에 시험을 쳤다.

표 등 일부 내용은 깃허브에서 보는 것이 더 편하다.

1. [소프트웨어 설계](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/1.%20%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%20%EC%84%A4%EA%B3%84)

2. [소프트웨어 개발](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/2.%20%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%20%EA%B0%9C%EB%B0%9C)

3. [DB구축](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/3.%20%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%20%EA%B5%AC%EC%B6%95)

4. [프로그래밍 언어 활용](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/4.%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EC%96%B8%EC%96%B4%20%ED%99%9C%EC%9A%A9)

5. [정보시스템 구축 관리](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/5.%20%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EA%B4%80%EB%A6%AC)

본문은 요약본으로, 노출 빈도가 높다고 느낀 키워드는 ★표로 강조하였다.

---

# 모듈화와 결합도/응집도 ★★★

### 모듈화

- 모듈화는, 거대한 문제를 작은 조각의 문제로 나누어 다루기 쉽도록 하는 과정으로, 작게 나누어진 각 부분을 모듈이라고 한다.
- 소프트웨어의 모듈은 프로그래밍 언어에서 Subroutine, Function 등으로 표현될 수 있다.
- 모듈화는 시스템을 지능적으로 관리할 수 있도록 해주며, 복잡도 문제를 해결하는데 도움을 준다.
- 모듈화는 시스템의 유지보수와 수정을 용이하게 한다.

#### 모듈의 개념

- 하나의 프로그램을 몇 개의 작은 부분으로 분할한 단위이다.
- 모듈의 독립성은 결합도와 응집도에 의해 측정된다.
- 각 모듈은 논리적 또는 기능적으로 분리되어 격리되고 독립적인 일을 수행한다.
- 특성 : Unity(한 가지 일만 수행), Smallness(간단 명료), Simplicity(단순성), Independency(독십성) 등

### 결합도(Coupling)

- 한 모듈과 다른 모듈 간의 상호 의존도 또는 두 모듈 사이의 연관 관계를 의미한다.
- 모듈 간의 결합도를 약하게 하면 모듈 독립성이 향상된다.
- 인터페이스가 정확히 설정되어 있지 않을 경우 불필요한 인터페이스가 나타나 모듈 사이의 의존도는 높아지고 결합도가 증가한다.
- 다른 모듈과 데이터 교류가 필요한 경우 전역 변수(Global Variable)보다는 매개 변수(Parameter)를 사용하는 것이 결합도를 낮추는데 도움이 된다.
- 결합도 정도 : 데이터 결합도 < 스탬프 결합도 < 제어 결합도 < 외부 결합도 < 공통 결합도 < 내용 결합도

- 데이터 결합도(Data Coupling)
  - 한 모듈이 파라미터나 인수로 다른 모듈에 데이터를 넘겨주고 호출받은 모듈은 받은 데이터에 대한 처리 결과를 다시 돌려주는 경우의 결합도.
- 스탬프 결합도(Stamp Coupling)
  - 두 모듈이 동일한 자료 구조를 조회하는 경우의 결하볻
- 제어 결합도(Control Coupling)
  - 한 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우의 결합도
- 외부 결합도(External Coupling)
  - 한 모듈에서 외부로 선언한 변수를 다른 모듈에서 참조할 경우의 결합도
- 공통 결합도(Common Coupling)
  - 한 모듈이 다른 모듈에 제어 요소를 전달하고 여러 모듈이 공통 자료 영역을 사용하는 경우의 결합도
- 내용 결합도(Content Coupling)
  - 한 모듈이 다른 모듈의 내부 기능 및 그 내부 자료를 참조하는 경우의 결합도

### 응집도(Cohesion)

- 한 모듈 내부의 처리 요소 간의 기능적 연관도를 의미한다.
- 모듈 내부 요소는 명령어, 명령어의 모임, 호출문, 특정 작업 수행 코드 등이다.
- 응집도 정도 : 기능적 응집도 > 순차적 응집도 > 교환적 응집도 > 절차적 응집도 > 시간적 응집도 > 논리적 응집도 > 우연적 응집도

- 기능적 응집도(Functional Cohesion)
  - 한 모듈 내부의 한 기능 요소에 의한 출력 자료가 다음 기능 원소의 입력 자료로써 제공되는 경우의 응집도
- 순차적 응집도(Sequential Cohesion)
  - 모듈의 구성 요소가 하나의 활동으로부터 나온 출력 자료를 그다음 활동의 입력 자료로 사용하는 같은 모듈 내에서의 응집도
- 교환적 응집도(Communicational Cohesion)
  - 동일한 입력과 출력을 사용하는 소 작업들이 모인 모듈에서 볼 수 있는 응집도.
- 절차적 응집도(Procedural Cohesion)
  - 모듈이 다수의 관련 기능을 가질 때 모듈 내부의 기능 요소들이 그 기능을 순차적으로 수행할 경우의 응집도
- 시간적 응집도(Temporal Cohesion)
  - 특정 시간에 처리되는 여러 기능을 모아 한 개의 모듈로 작성할 경우의 응집도
- 논리적 응집도(Logical Cohesion)
  - 유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 하나의 모듈이 형성되는 경우의 응집도
- 우연적 응집도(Coincidental Cohesion)
  - 서로 간에 어떠한 의미 있는 연관 관계도 지니지 않은 기능 요소로 구성되는 경우의 응집도

### 효과적인 모듈화 설계 방법

- 응집도는 강하게, 결합도는 약하게 설계한다.
- 복잡도와 중복성을 줄이고 일관성을 유지할 수 있도록 설계한다.
- 유지보수가 용이하도록 설계한다.
- 모듈 크기는 시스템의 전반적인 기능과 구조를 이해하기 쉬운 크기로 설계한다.
- 모듈 기능은 예측이 가능해야 하며 지나치게 제한적이어서는 안 된다.

# C 언어

### C언어의 기본 구조

- main 함수를 반드시 포함해야 하며, main 함수에서 실행이 시작된다.
- 영문 대/소문자를 엄격하게 구별한다.
- 문장을 끝마칠 때는 세미콜론(;)을 사용한다.
- 여러 개의 문장을 묶어 하나의 블록으로 구성할 때 중괄호({})를 사용한다.
- 주석문은 /_ ~ _/로 표기한다.

### 기본 자료형

| 자료형 | 예약어 | 크기  |
| :----: | :----: | :---: |
| 정수형 |  int   | 2Byte |
|        |  long  | 4Byte |
| 실수형 | float  | 4Byte |
|        | double | 8Byte |
| 문자형 |  char  | 1Byte |

### 입/출력 함수

- 표준 입/출력 함수
  - scanf() : 표준 입력 함수
  - printf() : 표준 출력 함수
  - getchar() : 문자 입력 함수
  - putchar() : 문자 출력 함수
  - gets() : 문자열 입력 함수
  - puts() : 문자열 출력 함수
- 변환 문자(출력 형식 지정 문자)
  - %d : 10진 정수
  - %o : 8진 정수
  - %x : 16진 정수
  - %f : 실수형
  - %e : 지수형
  - %c : 문자
  - %s : 문자열

### 탈출문(Escape Sequence)

| 문자 |      의미       |               기능                |
| :--: | :-------------: | :-------------------------------: |
|  \n  |    new line     | 커서를 다음 줄 처음으로 이동한다. |
|  \r  | carriage return | 커서를 현재 줄 처음으로 이동한다. |
|  \t  |       tab       |   커서를 일정 간격만큼 띄운다.    |
|  \b  |    backspace    |    커서를 뒤로 한 칸 이동한다.    |
|  \f  |    form feed    |        한 페이지를 넘긴다.        |
|  \0  | null character  |        널 문자를 출력한다.        |
|  \'  |  single quote   |      작은 따옴표를 출력한다.      |
|  \"  |  double quote   |       큰따옴표를 출력한다.        |
| \ \\ |    backslash    |       역슬래시를 출력한다.        |
|  \a  |      alert      |        벨 소리를 발생한다.        |

### C언어 변수명 작성 규칙

- 영문 대소문자(A~Z, a~z), 숫자(0~9), '\_'를 혼용하여 사용할 수 있다.
- 첫 글자는 숫자로 시작할 수 없고, 영문자나 "\_"로 시작해야 한다.
- 영문자는 대소문자를 구분한다.
- 공백을 포함할 수 없다.
- auto, beak, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register,return, short, signed, sizeof, static, struct, switch, typedef, union, unsigend, void, volatile, while 32개 예약어(Reserved Word)를 사용할 수 없다.

### 포인터 변수

- 다른 변수의 주소값을 저장할 수 있다.
- 표인터 변수는 자료형에 상관없이 메모리 크기가 동일하다.
- 가리키고 있는 변수값을 읽기 위해서는 포인터 연산자를 사용한다.
- 포인터 변수에 일반 변수의 주소를 대입하기 위해서는 &(주소) 연산자를 사용한다.
- 포인터 변수를 가리키는 포인터 변수를 선언할 수 있다.

### 표준 라이브러리 함수

- stdio.h : C언어의 표준 입/출력 라이브러리(Standard Input and Output Library)이다.
- stdlib.h : C 표준 유틸리티 함수를 모아놓은 헤더 파일이다. 문자형 변환, 수치를 문자형으로 변환, 동적 할당 관련 함수, 난수 생성 함수, 정수의 연산 함수, 검색 및 정렬 함수 등이다.
- stdlib.h 함수 종류
  - atoi() : 문자열을 정수형으로 변환
  - atof() : 문자열을 실수형으로 변환
  - atol() : 문자열을 log형 정수로 변환
  - itoa() : 숫자를 문자열로 변환
  - ceil() : 자리 올림
  - floor() : 자리 버림
  - rand() : 난수 발생
  - div() : 정수 나눗셈

### C언어 연산자의 특징

#### 단항 연산자

- ! : 부정(NOT)
- ~ : 1의 보수(0->1, 1->0)를 구한다.
- ++ : 1씩 증가를 의미한다.
- \-- : 1씩 감소를 의미한다.
- & : 변수의 주소를 의미한다.
- \* : 변수의 내용을 의미한다.
- sizeof : 변수, 변수형, 배열의 저장 장소의 크기를 Byte 단위로 구한다.

#### 산술 연산자

- 이항 연산자는 +, -는 \*, /, % 보다 우선순위가 낮다.
- % : 정수 나눗셈 연산 후 나머지를 구한다.

#### 시프트(Shift) 연산자

- <<는 비트를 왼쪽으로 이동시킨다.
- \>>는 비트를 오른쪽으로 이동시킨다.

#### 관계 연산자

- < : ~보다 작다.
- \> : ~보다 크다.
- <= : ~보다 작거나 같다.
- \>\ : ~보다 크거나 같다.
- == : ~와 같다.
- != : ~와 같지 않다.

#### 비트 연산자

- & : 논리곱(AND)
- | : 논리합(OR)
- ^ : 배타적 논리합(XOR)

```C

#include <stdio.h>
int main(int argc, char *argv[]) {
    int a = 4;
    int b = 7;
    int c = a|b;
    printf("%d", c);
    return 0;
}
// 1. 변수 a와 b의 4, 7을 (2진수)비트 연산자 |(OR)로 연산한다.
// 2. 비트 연산자는 2진수로 변환 후 계산한다.
// 3. OR 연산자는 두 비트 중 1개라도 1이면 1이 출력된다.
//     0100 (10진수: 4)
// OR  0111 (10진수: 7)
// =   0111(둘 중 1개라도 1이면 1이기 때문에 10진수: 7)
// 4. 0111는 "%d" 출력 형식 지정 문자에 의해 10진수로 변환하면 7이 되어 출력된다.
//
// 2와 5를 가정할때
//     0010
// OR  0101
// =   0111

```

#### 논리 연산자

- ! : 논리 부정(NOT)
- && : 논리곱(AND)
- || : 논리합(OR)

#### 조건 연산자

- C언어에서 유일하게 3개의 피연산자를 갖는 삼항 연산자이다.
- 조건식 ? 참일 경우 값 : 거짓일 경우 값
- ex. big = a > b ? a:b; -> a와 b 중에서 큰 수가 big에 저장됨

# Java 언어

- 객체지향 언어이다.
- 추상화, 상속화, 다형성과 같은 특징을 가진다.
- 네트워크 환경에서 분산 작업이 가능하도록 설계되었다.
- 특정 컴퓨터 구조와 무관한 가상 바이트 머신 코드를 사용하므로 플랫폼이 독립적이다.

### Garbage Collector

- S/W 개발 중 유효하지 않은 가비지 메모리가 발생한다. Java에서는 C언어와 달리 JVM 가비지 컬렉터가 불필요 메모리를 알아서 정리해준다.

### Java 언어의 기본 자료형

|  분류  | 예약어  | 바이트 수 |                          비고                           |
| :----: | :-----: | :-------: | :-----------------------------------------------------: |
| 정수형 |  byte   |   1byte   |                       -127 ~ +128                       |
|        |  short  |   2byte   |                    -32,768 ~ +32,767                    |
|        |   int   |   4byte   |             -2,147,483,648 ~ +2,147,483,648             |
|        |  long   |   8byte   | -9,223,372,036,854,775,808 ~ +9,223,372,036,854,775,808 |
| 실수형 |  float  |   4byte   |           단정도 실수형 (유효 자리는 7정도임)           |
|        | double  |   8byte   |           배정도 실수형 (유효 자리는 15정도)            |
| 문자형 |  char   |   2byte   |                   유니코드 문자열 1자                   |
| 논리형 | boolean |   1byte   |                       true,false                        |

### 이스케이프 시퀀스(Escape Sequence)

| 문자 |      의미       |               기능                |
| :--: | :-------------: | :-------------------------------: |
|  \n  |    new line     | 커서를 다음 줄 처음으로 이동한다. |
|  \r  | carriage return | 커서를 현재 줄 처음으로 이동한다. |
|  \t  |       tab       |   커서를 일정 간격만큼 띄운다.    |
|  \b  |    backspace    |    커서를 뒤로 한 칸 이동한다.    |
|  \f  |    form feed    |         한 페이지 넘긴다.         |
|  \'  |  single quote   |      작은따옴표를 출력한다.       |
|  \"  |  double quote   |       큰따옴표를 출력한다.        |
| \ \  |    backslash    |       역슬래시를 출력한다.        |

### Java 접근 제한자(접근 제어자)

- public : 모든 접근을 허용한다.
- private : 같은 패키지에 있는 객체와 상속 관계의 객체들만 허용한다.
- default : 같은 패키지에 있는 객체들만 허용한다.
- protected : 현재 객체 내에서만 허용한다.

### Java의 출력 함수

- System.out.print() : 괄호 안을 출력하고 줄 바꿈을 안 한다.
- System.out.printIn() : 괄호 안을 출력하고 줄 바꿈을 한다.
- System.out.printf() : 변환 문자를 사용하여 출력한다.
- 변환 문자(출력 형식 지정 문자)
- %d : 10진 정수
- %o : 8진 정수
- %x : 16진 정수
- %f : 실수형
- %e : 지수형
- %c : 문자
- %s : 문자열

### Java 언어 변수명 작성 규칙

- 영문 대소문자(A~Z, a~z), 숫자(0~9), '\_', '$'를 혼용하여 사용할 수 있다.
- 첫 글자는 영문자나 '\_', '$'로 시작해야 한다.
- 영문자는 대소문자를 구분한다.
- 공백을 포함할 수 없다.
- 예약어(Reserved Word)를 사용할 수 없다.

### 오버로딩(Overloading)과 오버라이딩(Overiding)

#### 오버로딩(Overloading - 과적, 과부하)

- 한 클래스 내에서 같은 메서드를 사용하는 것이다.
- 같은 이름의 메서드를 여러 개 정의하면서 매개 변수의 유형과 개수가 달라지도록 하는 기술이다.

#### 오버라이딩(Overriding - 다른 것보다 우선인)

- 상속 관계의 두 클래스의 상위 클래스에서 정의한 메서드를 하위 클래스에서 변경(재정의)하는 것이다.
- Java 언어에서는 static 메ㅓㅅ드의 오버라이딩을 허용하지 않는다.
- 오버라이딩의 경우 하위 객체의 매개 변수 개수와 타입은 상위 객체와 같아야 한다.

# 스크립트 언어

- 소스 코드를 컴파일 과정을 거치지 않고 실행할 수 있는 프로그래밍 언어이다.
- 스크립트 언어에 내장된 번역기에 의해 번역되어 실행된다.
- 실행 단계에서 구분을 분석한다.

### 스크립트 언어의 종류

1. 서버 측 스크립트 언어
   - ASP(Active Server Page)
     - 서버 측에서 동적으로 수행되는 페이지를 만들기 위한 언어로 Windows 계열의 운영체제에서 실행 가능하다.
   - JSP(Java Server Page)
     - Java를 기반으로 하고 서버 측에서 동적으로 수행하는 페이지를 만드는 언어이다.
   - PHP(Professional Hypertext Preprocessor)
     - 소스 코드가 HTML 파일에 포함되는 언어이다.
     - 데이터베이스와의 연동이 매우 용이하다.
     - Linux, UNIX, Window 등의 다양한 운영 체제에서 사용 가능하다.
       - PHP 연산자
         - 산술 연산자 : +, -, \*, /, %, \*\*
         - 할당 연산자 : =, +=, -=, \*=, /=, %=
         - 증감 연산자 : ++, --
         - 관계 연산자 : ==, ===, !=, <>, !==, >, <, >=, <=
         - 논리 연산자 : and, or, xor, &&, ||, !
   - 파이썬(Python)
     - 인터프리터 방식의 객체지향 언어이다.
     - 실행 시점에 데이터 타입을 결정하는 동적 타이핑 기능을 갖는다.
2. 클라이언트 측 스크립트 언어
   - JavaScript
     - HTML 문서에서 HTML이나 CSS로 표현하기 어렵거나 불가능한 작업을 수행하기 위해 개발되었다.
     - 소스 코드가 HTML 문서에 포함되어 있다.
     - 클래스가 존재하지 않으며 변수 선언도 필요 없다.(?)
     - 사용자의 웹 브라우저에서 직접 번역되고 시랳ㅇ된다.
   - VBScript
     - 마이크로소프트가 개발한 액티브 스크립트 언어이다.
     - VBScript의 구분은 비주얼 베이직(Visual Basic) 프로그래밍 언어를 일부 반영한다.

# 파이썬(Python)

### 파이썬 변수명 작성 규칙

- 영문 대소문자(A~Z, a~z), 숫자(0~9), '\_'를 혼용하여 사용할 수 있다.
- 첫 글자는 영문자나 '\_'로 시작해야 한다.
- 영문자는 대소문자를 구분한다.
- 공백을 포함할 수 없다.
- 예약어(Reserved Word)를 사용할 수 없다.

### 문자열 추출

- 하나의 문자를 추출하려면 추출하려는 문자의 인덱스(0부터 시작)을 지정한다.

```python

string = 'hello python'

s1 = string[0]
print(s1) # 'h'

s2 = string[4]
print(s2) # 'o'

# 역순으로 맨 오른쪽의 인덱스는 -1이다.

s3 = string[-1]
print(s3) # 'n'

s4 = string[-6]
print(s4) # 'p'

# [:]는 처음부터 끝까지 추출한다.

s5 = string[:]
print(s5) # 'hello python'

# [x:] 인덱스 x부터 끝까지 추출한다.

s6 = string[6:]
print(s6) # 'python'

s7 = string[-6:]
print(s7) # 'python'

# [:y] 처음부터 인덱스 y-1 까지 추출한다.

s8 = string[:5]
print(s8) # 'hello'

# [x:y] 인덱스 x부터 y-1까지 추출한다.
s9 = string[4:7]
print(s9) # 'o p'

# [x:y:z] 인덱스 x부터 y-1까지 z만큼 건너뛰면서 추출한다.
s10 = string[:10:2]
print(s10) # 'hlopt'

s11 = string[1:10:2]
print(s11) # 'el yh'

```

# 운영체제(OS : Operating System)

- 운영체제는 컴퓨터 사용자와 컴퓨터 하드웨어 간의 인터페이스로서 동작하는 시스템 소프트웨어이다.
- 운영체제는 컴퓨터를 편리하게 사용하고 컴퓨터 하드웨어를 효율적으로 사용할 수 있도록 한다.
- 운영체제는 스스로 어떤 유용한 기능도 수행하지 않고 다른 응용 프로그램이 유용한 작업을 할 수 있도록 환경을 마련해준다.
- 운영체제의 종류로는 MS-DOS, Windows 10, Linux, UNIX, OS/2, 안드로이드, IOS 등이 있다.

### 운영체제의 기능

- 사용자와 시스템 간의 편리한 인터페이스를 제공한다.
- 컴퓨터의 시스템의 성능을 최적화시킨다.
- 자원의 효과적인 경영을 위해 스케줄링 기능을 제공한다.
- 자원 보호 기능을 제공한다.
- 시스템에서 발생하는 오류로부터 시스템을 보호한다.
- 사용자들 간에 데이터를 공유할 수 있도록 한다.

### 운영체제의 목적

1. 처리 능력(Throughput) 향상
   - 처리 능력은 일정 시간 내에 시스템이 처리하는 일의 양이다.
   - 처리 능력이 높을수록 처리하는 일의 양이 많아진다.
2. 반환 시간(Turnaround Time)감소
   - 반환 시간은 컴퓨터 센터에 작업을 지시하고 나서부터 결과를 받을 때까지의 경과 시간이다.
   - 반환 시간이 감소될수록 처리 속도가 빨라진다.
3. 신뢰도(Reliability) 향상
   - 신뢰도는 시스템이 주어진 문제를 정확하게 해결하는 정도이다.
   - 신뢰도가 높을수록 일을 정확하게 처리한다.
4. 사용 가능도(Availability) 향상
   - 사용 가능도는 한정된 자원을 여러 사용자가 요구할 때, 어느 정도 신속하고 충분히 지원해 줄 수 있는지의 정도이다.
   - 사용 가능도가 높을수록 반환 시간이 감소한다.

### 운영체제의 운영 방식

1. 일괄 처리 시스템(Batch Processing System)
   - 일정량 또는 일정 기간 동안 데이터를 한꺼번에 모아서 처리하는 방식이다.
   - 운영체제 운용 방식 중 시대적으로 가장 먼저 생겨났다.
   - ex. 수도요금 계산 업무, 월급 계산 업무 등
2. 다중 프로그래밍 시스템(Multi programming System)
   - 컴퓨터 시스템 자원 활용률을 극대화하기 위해 2개 이상의 프로그램을 주기억 장치에 기억시키고 CPU를 번갈아 사용하면서 처리하는 방식이다.
3. 시분할 시스템(Time Sharing System)
   - CPU의 전체 사용 시간을 작은 작업 시간량(Time Slice)으로 나누어서 그 시간량 동안만 번갈아 가면서 CPU를 할당하여 각 작업을 처리하는 방식이다.
   - 실제로 많은 사용자가 하나의 컴퓨터를 공유하고 있지만 마치 자신만이 컴퓨터 시스템을 독점하여 사용하고 있는 것처럼 느끼게 된다.
4. 다중 처리 시스템(Multi-Processing System)
   - 동시에 프로그램을 수행할 수 있는 CPU를 두 개 이상 두고 각각 그 업무를 분담하여 처리할 수 있는 방식이다.
5. 실시간 처리 시스템(Real Time Processing System)
   - 데이터 발생 즉시, 또는 데이터 처리 요구가 있는 즉시 처리하여 결과를 산출하는 방식이다.
   - 정해진 시간에 반드시 수행되어야 하는 작업들을 처리할 때 가장 정합하다.
   - ex. 항공기 예약 업무, 은행 창구 업무, 조회 및 질의 업무 등
6. 다중 모드 시스템(Multi-mode System)
   - 일괄 처리 + 시분할 + 다중 처리 + 실시간 처리
7. 분산 처리 시스템(Distributed Processing System)
   - 여러 대의 컴퓨터로 작업을 나누어 처리하여 그 내용이나 결과를 통신망을 이용하여 상호 교환되도록 연결하는 방식이다.

# 프로세스(Process)

### 프로세스의 정의

- 실행 중인 프로그램이다.
- 실행 가능한 PCB를 가진 프로그램이다.
- 프로세서가 할당되는 실체이다.
- 프로시저가 활동 중인 것이다.
- 비동기적 행위를 일으키는 주체이다.

### 프로세스 제어 블록(PCB: Process Control Block)

- 운영체제가 프로세스를 관리하기 위해 프로세스에 대한 중요한 정보를 저장해 놓은 곳이다.
- 프로세스가 생성될 때마다 고유의 PCB가 생성되며, 프로세스가 소멸되면 PCB도 소멸된다.
- PCB에 저장되어 있는 정보 : 프로세스의 현재 상태, 프로세스의 우선순위, 프로세스에 할당된 자원에 대한 정보, CPU 레지스터 정보

### 프로세스 상태 전이

```
생성(New) -> 준비(Ready) -(디스패치-Dispatch)-> 실행(Run) -> 종료(Exit)
                ↑        <-(Timer Runout)-    ↙
             Wake Up            Block ←-------
                |           ↙
           대기(Blocked) ←--
```

- 준비 상태(Ready State)
  - 프로세스가 CPU를 할당받기 위해 준비하고 있는 상태이다.
- 실행 상태(Running State)
  - 준비 상태의 프로세스가 CPU를 할당받아 실행 중인 상태이다.
  - 디스패치(Dispatch) : 우선순위가 가장 높은 프로세스가 준비 상태에서 실행 상태로 전환되는 것이다.
  - 할당 시간 종료(Time Runout) : 실행 상태의 프로세스가 할당 시간(타이머)이 종료되어 준비 상태로 전환되는 것이다.
- 대기 상태(Blocked State)
  - 실행 상태의 프로세스가 종료되기 전에 입/출력 등의 다른 작업이 필요할 경우 CPU를 반납하고 작업의 완료를 기다리는 상태이다.
  - 블록(Block) : 실행 상태에서 대기 상태로 전환되는 것이다.
  - 웨이크 업(Wake Up) : 대기 상태의 프로세스가 웨이크업(조건 만족)되면 준비 상태로 전환된다.

### 스레드(Thread)

- 프로세스 내에서의 작업 단위로서 시스템의 여러 자원을 할당받아 실행하는 프로그램의 단위를 의미한다.
- 하드웨어, 운영체제의 성능과 응용 프로그램의 처리율을 향상시킬 수 있다.
- 한 개의 프로세스는 여러 개의 스레드를 가질 수 있다.

## 프로세스 스케줄링(Process Scheduling)

- 프로세스의 생성 및 실행에 필요한 시스템의 자원을 해당 프로세스에 할당하는 작업이다.
- 다중 프로그래밍 운영체제에서 자원의 성능을 향상시키고 효율적인 프로세서의 관리를 위해 작업 순서를 결정하는 것이다.

### 프로세스 스케줄링 기법

#### 비선점(Non-Preemptive) 스케줄링

1. FIFO(First in Fist Out)
   - 준비 상태 큐에 도착한 순서대로 CPU를 할당하는 기법이다.
   - FCFS(Fist Come First Service)라고도 한다.
2. SJF(Shortest Job First)
   - 준비 상태 큐에서 기다리고 있는 프로세스들 중에서 실행 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 스케줄링 기법이다.
   - 평균 대기 시간을 최소화한다.
3. HRN(Highest Responseratio Next)
   - 어떤 작업이 서비스받을 시간과 그 작업이 서비스를 기다린 시간으로 결정되는 우선순위에 따라 CPU를 할당하는 기법이다.
   - 우선순위 계산식 = (대기 시간 + 서비스를 받을 시간) / 서비스를 받을 시간
4. 우선순위(Priority)
   - 준비 상태 큐에서 대기하는 프로세스에게 부여된 우선순위가 가장 높은 프로세스에게 먼저 CPU를 할당하는 기법이다.
   - 우선순위가 낮은 프로세스는 무한 정지(Indefinite Blocking)가 발생할 수 있으며, 에이징(Aging) 기법으로 이를 해결할 수 있다.

#### 선점(Preemptive) 스케줄링

- 한 프로세스가 CPU를 할당받아 실행 중이라도 우선순위가 높은 다른 프로세스가 CPU를 강제적으로 뺴앗을 수 있는 방식이다.
- 긴급하고 높은 우선순위의 프로세스들이 빠르게 처리될 수 있다.
- 선점을 위한 시간 배당에 대한 인터럽트용 타이머 클럭(Clock)이 필요하다.
- 온라인 응용에 적합한 스케줄링이다.
- 종류
  - RR(Round Robin)
    - 주어진 시간 할당량(Time Slice) 안에 작업을 마치지 않으면 준비 상태 큐의 가장 뒤로 배치된다.
    - 시분할 시스템(Time-sharing System)을 위해 고안된 방식이다.
    - 시간 할당량이 커지면 FCFS 스케줄링과 같은 효과를 얻을 수 있다.
    - 시간 할당이 작아지면 프로세스 문맥 교환이 자주 일어난다.
  - SRT(Shortest Remainig Time)
    - 작업이 끝나기까지의 실행시간 추정치가 가장 작은 작업을 먼저 실행시키는 기법이다.
    - FIFO 기법보다 평균 대기 시간이 감소된다.
    - 작업 시간이 큰 경우 오랫동안 대기하여야 한다.
  - 다단계 큐(Multi-Level Queue)
    - 프로세스들을 우선순위에 따라 상위, 중위, 하위 단계의 단계별 준비 상태 큐를 배치하는 기법이다.
  - 다단계 피드백 큐(Multi-Level Feedback Queue)
    - 각 준비 상태 큐마다 부여된 시간 할당량 안에 완료하지 못한 프로세스는 다음 단계의 준비 상태 큐로 이동하는 기법이다.

# OST(Open Systems Interconnection) 7계층 ★★★

1. 물리 계층(Physical Layer)
   - 물리적인 장치와 인터페이스가 전송을 위해 필요한 기계적, 전기적, 기능적, 절차적 기능을 정의하는 계층이다.
   - 장치와 전송 매체 간의 인터페이스 특성 규정, 전송 매체의 유형 규정, 전송로의 연결, 유지 및 해제를 담당한다.
   - 프로토콜 종류 : RS-232C, V.24, X.21
2. 데이터 링크 계층(Data Link Layer)
   - 인접한 두 개의 통신 시스템 간에 신뢰성 있는 효율적인 데이터를 전송하는 계층이다.
   - 링크의 설정과 유지 및 종료를 담당한다.
   - 전송 데이터의 흐름 제어, 프레임 동기, 오류 제어 등을 수행한다.
   - 링크의 효율성을 향상시킨다.
   - 프로토콜 종류 : HDLC, PPP, LLC, LAPB, LAPD, ADCCP
3. 네트워크 계층(Network Layer)
   - 통신망을 통해 패킷을 목적지까지 전달하는 계층.
   - 경로 설정 및 네트워크 연결 관리를 수행.
   - 과도한 패킷 유입에 대한 폭주 제어 기능을 한다.
   - 프로토콜 종류 : X.25, IP, ICMP, IGMP
4. 전송 계층(Transport Layer)
   - 통신 종단 간(End-to-End) 신뢰성 있고 효율적인 데이터를 전송하는 계층이다.
   - 투명한 데이터 전송을 제공한다.
   - 에러 제어 및 흐름 제어를 담당한다.
   - 프로토콜 종류 : TCP, UDP
5. 세션 계층(Session Layer)
   - 프로세스 간에 대한 연결을 확립, 관리, 단절시키는 수단을 제공한다.
   - 논리적 동기 제어, 긴급 데이터 전송, 통신 시스템 간의 회화 기능 등을 제공한다.
6. 표현 계층(Presentation Layer)
   - 응용 간의 대화 제어(Dialogue Control)을 담당한다.
   - 응용 계층과 세션 계층 사이에서 데이터 변환을 담당한다.
   - 정보의 형식 설정, 암호화, 데이터 압축, 코드 변환, 문맥 관리 등의 기능을 수행한다.
   - 긴 파일 전송 중에 통신 상태가 불량하여 트랜스포트 연결이 끊어지는 경우 처음부터 다시 전송하지 않고 어디까지 전송이 진행되었는지를 나타내는 동기점을 이용하여 오류를 복구한다.
7. 응용 계층(Application Layer)
   - 사용자에게 서비스를 제공한다.
   - 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행한다.
   - 프로토콜 종류 : HTTP, FTP, SMTP, Telnet, DNS

# TCP/IP 프로토콜(Transmission Control Protocol/Internet Protocol)

- 인터넷에 연결된 서로 다른 기종의 컴퓨터 간에 데이터 송/수신이 가능하도록 도와주는 표준 프로토콜이다.
- TCP 프로토콜과 IP 프로토콜의 결합적 의미로서 TCP가 IP보다 상위층에 존재한다.
- 접속형 서비스, 전이중 전송 서비스, 신뢰성 서비스를 제공한다.
- 네트워크 환경에 따라 여러 개의 프로토콜을 허용한다.
- TCP 프로토콜의 기본 헤더 크기는 20byte이고 60byte까지 확장 가능하다.
- OSI 표준 프로토콜과 가까운 네트워크 구조를 가진다.
  - OSI 7계층 : 물리, 데이터, 네트워크, 전송, 세션, 표현, 응용 계층
  - TCP/IP 4계층 : 링크, 인터넷, 전송, 응용 계층

### TCP(Transmission Control Protocol)

- OSI 7계층의 전송 계층의 역할을 수행한다.
- 서비스 처리를 위해 Multiplexing과 DeMultiplexing을 이용한다.
- 전이중 서비스와 스트림 데이터 서비스를 제공한다.

### IP(Internet Protocol)

- OSI 7계층의 네트워크 계층에 해당하며 비신뢰성 서비스를 제공한다.

## TCP/IP의 구조

### 링크 계층(Link Layer)

- 프레임을 송/수신한다.
- 프로토콜의 종류 : Ethernet, IEEE 802, HDLC, X.25, RS-232C 등

### 인터넷 계층(Internet Layer)

- 주소 지정, 경로 설정을 제공한다.
- 네트워크 계층이라고도 한다.
- 프로토콜 종류 : IP, ICMP, IGMP, ARP, RARP 등
  - IP(Internet Protocol)
    - 비연결형 및 비신뢰성 전송 서비스를 제공한다.
    - 라우팅과 단편화 기능을 수행한다.
    - 데이터그램(Datagram)이라는 데이터 전송 형식을 가진다.
    - 각 데이터그램이 독립적으로 처리되고 목적지까지 다른 경로를 통해 전송될 수 있어 데이터그램은 전송 순서와 도착 순서가 다를 수 있다.
    - 비연결성이기 때문에 송신지가 여러 개인 데이터 그램을 보내면서 순서가 뒤바뀌어 도달할 수 있으며 IP 프로토콜의 헤더 길이는 최소 20~60byte이다.
  - ICMP(Internet Control Message Protocol)
    - IP 프로토콜에서는 오류 보고와 수정을 위한 메커니즘이 없기 때문에 이를 보완하기 위해 설계된 프로토콜이다.
    - 메시지는 크게 오류 보고(Error-Reporting) 메시지와 질의(Query) 메시지로 나눌 수 있다.
    - 메시지 형식은 8바이트의 헤더와 가변 길이의 데이터 영역으로 분리된다.
    - 에코 메시지는 호스트가 정상적으로 동작하는지를 결정하는데 사용할 수 있다.
    - 수신지 도달 불가 메시지는 수신지 또는 서비스에 도달할 수 없는 호스트를 통지하는데 사용한다.
  - IGMP(Internet Group Management Protocol)
    - 시작지 호스트에서 여러 목적지 호스트로 데이터를 전송할 때 사용되는 프로토콜이다.
    - 멀티캐스트 그룹에 가입한 네트워크 내의 호스트를 관리한다.
  - ARP 20.9(Address Resolution Protocol)
    - 논리 주소(IP 주소)를 물리 주소(MAC 주소)로 변환하는 프로토콜이다.
    - 네트워크에서 두 호스트가 성공적으로 통신하기 위해 각 하드웨워의 물리적인 주소 문제를 해결해 줄 수 있다.
  - RARP(Reverse Address Resolution Protocol)
    - 호스트의 물리 주소(MAC 주소)로부터 논리 주소(IP 주소)를 구하는 프로토콜이다.
    - IP 호스트가 자신의 물리 네트워크 주소(MAC)는 알지만 IP 주소를 모르는 경우, 서버에게 IP 주소를 요청하기 위해 사용한다.

### 전송 계층(Transport Layer)

- 호스트 간 신뢰성 있는 통신을 제공한다.
- 프로토콜 종류 : TCP, UDP
  - TCP 20.8(Transmission Control Protocol)
    - 신뢰성 있는 연결 지향형 전달 서비스를 제공한다.
    - 순서 제어, 에러 제어, 흐름 제어 기능을 제공한다.
    - 전이중 서비스와 스트림 데이터 서비스를 제공한다.
    - 메시지를 캡슐화(Encapsulation)와 역캡슐화(Decapsulation)한다.
    - 서비스 처리를 위해 다중화(Multiplexing)와 역다중화(Demultiplexing)를 이용한다.
  - UDP 20.9(User Datagram Protocol)
    - 비연결형 및 비신뢰성 전송 서비스를 제공한다.
    - 흐름 제어나 순서 제어가 없어 전송 속도가 빠르다.
    - 수신된 데이터의 순서 재조정 기능을 지원하지 않는다.
    - 복구 기능을 제공하지 않는다.

# IP 주소 ★★★

### IPv4(Internet Protocol version 4)

- 32비트 길이의 IP주소이다.
- 주소의 각 부분을 8비트씩 4개로 나눠서 10진수로 표현한다.
- IP 주소 = 네트워크 주소(Netid) + 호스트 주소

#### IPv4의 주소 체계

- 클래스 A
  - 0.0.0.0 ~ 127.255.255.255
  - 기본 서브넷 마스크 : 255.0.0.0
  - 국가나 대형 통신망에서 사용한다.
- 클래스 B
  - 128.0.0.0 ~ 191.255.255.255
  - 기본 서브넷 마스크 : 255.255.0.0
  - 중대형 통신망에서 사용한다.
- 클래스 C
  - 192.0.0.0 ~ 223.255.255.255
  - 기본 서브넷 마스크 : 255.255.255.0
  - 소규모 통신망에서 사용한다.
- 클래스 D
  - 224.0.0.0 ~ 239.255.255.255
  - 멀티캐스트용으로 사용한다.
- 클래스 E
  - 240.0.0.0 ~ 255.255.255.255
  - 실험용으로 사용한다.

### IPv6(Internet Protocol version 6)

- IPv4의 주소 부족 문제를 해결하기 위해 개발되었다.
- 128비트 길이의 IP 주소이다.
- 16비트씩 8개의 필드로 분리 표기된다.

#### IPv6의 장점

- 인증 보안 기능을 포함하고 있어 IPv4보다 보안성이 강화되었다.
- IPv6 확장 헤더를 통해 네트워크 기능 확장이 용이하다.
- 임의의 크기의 패킷을 주고받을 수 있도록 패킷 크기 제한이 없다.
- 멀티미디어의 실시간 처리가 가능하다.
- 자동으로 네트워크 환경 구성이 가능하다.
- 주소체계는 유니캐스트(Unicast), 애니캐스트(Anycast), 멀티캐스트(Multicast) 등 세 가지로 나뉜다.

#### IPv6의 통신 방식 20.6

- 유니캐스트(Unicast)
  - 하나의 호스트에서 다른 하나의 호스트에게 전달하는 1:1 통신 방식이다.
- 애니캐스트(Anycast)
  - 하나의 호스트에서 그룹 내의 가장 가까운 곳에 있는 수신자에게 전달하는 '1: 가장 가까운 1' 통신 방식이다.
- 멀티캐스트(Multicast)
  - 하나의 호스트에서 네트워크상의 특정 그룹 호스트들에게 전달하는 1:N 통신 방식이다.

### 서브넷 마스크(Subnet Mask)

- 네트워크를 작은 내부 네트워크로 분리하여 효율적으로 네트워크를 관리하기 위한 수단이다.
- 서브넷 마스크는 32비트의 값으로 IP 주소를 네트워크와 호스트 IP 주소를 구분하는 역할을 한다.
- 네트워크 ID에 해당하는 모든 비트를 1로 설정하며, 호스트 ID에 해당하는 모든 비트를 0으로 설정한다.
- CIDR 표기 형식 : 10진수의 IP/네트워크 ID의 1비트의 개수

---

참조 : [Github repository](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/4.%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EC%96%B8%EC%96%B4%20%ED%99%9C%EC%9A%A9)