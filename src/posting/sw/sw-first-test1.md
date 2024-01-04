---
title: sw first test1
description: 정보처리기사 필기(1) - 소프트웨어 설계
category: sw
keyword: 정보처리기사, 정처기, 필기, 소프트웨어 설계
date: "2023-12-24"
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

# 소프트웨어

### 소프트웨어(SW)의 개념

- 컴퓨터를 동작시키고 어떤 일의 처리 순서와 방법을 지시하는 명령어의 집합인 프로그램과 프로그램의 수행에 필요한 절차, 규칙, 관련 문서 등의 총칭
- 프로그램(Program) : 컴퓨터를 통해 일련의 작업을 처리하기 위한 명령어와 관련된 데이터의 집합
- 자료 구조(Data Structure) : 컴퓨터 기억 장치 내에 자료의 표현, 처리, 저장 방법 등을 총칭하는 것으로, 데이터 간의 논리적 관계나 처리 알고리즘
- 문서(Paper) : 소프트웨어를 개발함에 있어 사용자 설명서, 소프트웨어 요구분석서, 평가서, 명세서, 프로젝트 계획서, 검사 계획서 등

### 소프트웨어의 특징

- 상품성 : 소프트웨어를 개발하면 상품이 되어 판매가 된다.
- 복잡성 : 개발하는 과정이 복잡하고 관리가 어렵다.
- 변경 가능성 : 프로그램을 일부 수정하여 업그레이드 및 오류 수정 등을 할 수 있다.
- 복제성 : 복제가 용이해 쉽게 복사, 유통이 가능하다.

### 시스템(System)의 개요와 기본 요소

- 시스템의 개요
  - 컴퓨터로 처리 가능한 자료를 입력하고 저장, 처리, 가공해 출력할 수 있도록 설계/구현된 정보 체계를 의미한다.
  - 하나의 목적을 위해 다양한 요소가 유기적으로 결합된 것을 의미한다.
- 기본 요소
  - 입력, 처리, 출력, 제어, 피드백으로 구성된다.

### 소프트웨어 위기(Software Crisis)

- 컴퓨터의 발달 과정에서 소프트웨어의 개발 속도가 하드웨어의 개발 속도를 따라가지 못해 사용자들의 요구사항을 감당할 수 없는 문제가 발생함을 의미한다.
- 소프트웨어 위기의 원인
  - 하드웨어 비용을 초과하는 개발 비용의 증가
  - 개발 기간의 지연
  - 개발 인력 부족 및 인건비 상승
  - 성능 및 신뢰성 부족
  - 유지보수의 어려움에 따른 엄청난 비용

# 소프트웨어 공학

### 소프트웨어 공학이란?

- 경제적으로 신뢰도 높은 소프트웨어를 만들기 위한 방법, 도구와 절차들의 체계를 말한다.
- IEEEE(전기/전자기술협회)는 소프트웨어의 개발, 운용, 유지보수 및 파기에 대한 체계적인 접근 방법이라 정의하였다.

### 소프트웨어 공학의 기본 원칙

- 현대적인 프로그래밍 기술을 적용해야 한다.
- 신뢰성이 높아야 한다.
- 사용의 편리성과 유지보수성이 높아야 한다.
- 지속적인 검증 시행을 해야 한다.

### 소프트웨어 공학 계층 구조

- 도구 : 프로세스와 방법을 처리하는 기능을 제공하는 것
- 방법론 : 소프트웨어를 설계하는데 기술적인 방법을 제공하는 것
- 프로세스 : 소프트웨어의 가장 기초가 되며 개발에 사용되는 방법론과 도구가 적용되는 순서를 의미한다.

### 소프트웨어 품질

- 사용자의 요구대로 만들어져야 한다.
- 유지보수가 쉬워야 한다.
- 에러를 최소화해야 한다.
- 초반에 정한 비용에 맞춰 개발해야 한다.
- 정확한 결과가 도출되어야 한다.
- 원하는 시간에 원하는 기능을 수행할 수 있어야 한다.

### 소프트웨어 공학의 목표

- 소프트웨어의 생산성과 품질을 향상시킨다.
- 최소의 비용으로 단기간에 시스템에 적합한 소프트웨어를 개발하는 것이 소프트웨어 공학의 궁극적 목적이다.

### 소프트웨어 재공학(Software Reengineering)

- 재공학의 개념
  - 소프트웨어 위기를 개발의 생산성이 아닌 유지보수의 생산성으로 해결하려는 방법을 의미한다.
  - 현재의 시스템을 변경하거나 재구조화(Restructuring)하는 것이다.
    - 재구조화: 재공학의 한 유형으로 사용자의 요구사항이나 기술적 설계의 변경 없이 프로그램을 개선하는 것
  - 소프트웨어 재공학 관점에서 가장 연관 싶은 유지보수 유형은 예방 유지보수(Preventive Maintenance)이다.
- 재공학의 장점
  - 개발 시간 및 비용 감소
  - 품질 향상
  - 생산성 향상
  - 신뢰성 향상
  - 구축 방법에 대한 지식의 공유
  - 프로젝트 실패 위험 감소
- 재공학의 목표
  - 소프트웨어의 유지보수성 향상이 최우선
  - 복잡한 시스템을 다루는 방법 구현, 다른 뷰의 생성, 잃어버린 정보의 복구 및 제거
  - 수월한 재사용과 소프트웨어의 수명 연장
- 과정
  - 분석(Analysis) => 구성(Restructuring) => 역공학(Reverse Engineering) => 이식(Migration)

### 역공학

- 소프트웨어를 분석하여 소프트웨어 개발 과정과 데이터 처리 과정을 설명하는 분석 및 설계 정보를 재발견하거나 다시 만들어내는 작업
- 역공학의 가장 간단하고 오래된 형태 == 재문서화

# CASE (Computer Aided Software Engineering) ★★★

### CASE란?

- 소프트웨어 개발 과정에서 사용되는 요구분석, 설계, 구현, 검사 및 디버깅 과정을 컴퓨터와 전용 소프트웨어 도구를 사용하여 자동화하는 작업이다.
- 자료 흐름도 등의 다이어그램을 쉽게 작성하게 해주는 소프트웨어 CASE 도구이다.
- 작업 과정 및 데이터 공유를 통해 작업자 간의 커뮤니케이션을 증대한다.

### CASE가 제공하는 기능

- 개발을 신속하게 할 수 있고, 오류 수정이 쉬워 소프트웨어 품질이 향상된다.
- 소프트웨어 생명주기의 전체 단계를 연결해 주고 자동화시켜 주는 통합된 도구를 제공해주는 기술이다.
- 소프트웨어 시스템의 문서회 및 명세화를 위한 그래픽 기능을 제공한다.
- 소프트웨어 개발 단계의 표준화를 기할 수 있으며, 자료 흐름도 작성 기능을 제공한다.
- 모델들 사이의 모순 검사 기능을 제공하며 다양한 소프트웨어 개발 모형을 지원한다.
- 원천 기술 : 구조적 기법, 프로토타이핑 기술, 정보 저장소 기술

### CASE 사용의 장점

- 소프트웨어 개발 기간 단축 및 개발 비용을 절약하여 소프트웨어 생산성을 향상시킨다.
- 자동화된 검사를 통해 소프트웨어 품질이 향상된다.
- 프로그램의 유지보수가 간편해지고 소프트웨어 모듈의 재사용성이 향상된다.
- 소프트웨어 개발 주기의 표준안 확립, 소프트웨어 개발 기법의 실용화, 문서화의 용이성 제공, 시스템 수정 및 유지보수 축소 등의 효과를 얻을 수 있다.

### CASE의 분류

- 상위(Upper) CASE : 요구분석 및 설계 단계 지원
- 하위(Lower) CASE : 소스 코드 작성, 테스트, 문서화 과정 지원
- 통합(Integrate) CASE : 소프트웨어 개발 주기 전체 과정 지원

### 요구사항 분석을 위한 CASE 도구

- SADT(Structured Analysis and Design Technique) : SoftTech 사에서 개발한 것으로 시스템 정의, 소프트웨어 요구사항 분석, 시스템/소프트웨어 설계를 위해 널리 이용되어 온 구조적 분석 및 설계 도구이다. 구조적 요구분석을 하귀 위해 블록 다이어그램을 채택한 자동화 도구다.
- REM( Software Requirements Engineering Methodolohy) = RSL/REVS : TRW 사가 우주 국방 시스템 그룹에 의해 실시간 처리 소프트웨어 시스템에서 요구사항을 명확히 기술하도록 할 목적으로 개발한 것으로, RSL과 REVS를 사용하는 자동화 도구다.
  - RSL(Requirement Statement Language) : 요소, 속성, 관계, 구조들을 기술하는 요구사항 기술 언어이다.
  - REVS(Requirement Engineering and Validation System) : RSL로 기술된 요구사항들을 자동으로 분석하여 요구사항 분ㅅ거 명세서를 출력하는 요구사항 분석기다.

# 소프트웨어 개발 방법론 ★★★

### 소프트웨어 생명주기(Software Life Cycle)

- 소프트웨어 제품의 개념 형성에서 시작하여 운용/유지보수에 이르기까지 변화의 모든 과정이다.
- 당성 검토 => 개발 계획 => 요구사항 분석 => 설계 => 구현 => 테스트 => 운용 => 유지보수

### 폭포수 모형(Waterfall Model) - 순차적 모델

- 선형 순차적 모델이라고도 하며, Boehm이 제시한 고전적 생명주기 모형으로, 소프트웨어 개발 과정의 각 단계가 순차적으로 진행되는 모형이다.

### 나선형 모형(Spiral Model) - 점증적 위험관리 모델

- Boehm이 제시하였으며, 반복적인 작업을 수행하는 점증적 생명주기 모형이다.
- 점증적 모형, 집중적 모형이라고도 하며 유지보수 과정이 필요 없다.
- 소프트웨어 개발 중 발생할 수 있는 위험을 관리하고 최소화하는 것이 목적이다.
- 나선을 따라서 돌아가면서 각 개발 순서를 반복하여 수행하는 점진적 방식으로 누락된 요구사항을 추가할 수 있다.
  - 목표설정 => 위험분석 => 개발과 검증 => 고객평가/다음단계 수립 => 목표설정

### 하향식/상향식 설계

- 하향식 설계 : 소프트웨어 설계 시 제일 상위에 있는 Main User Function에서 시작하여 기능을 하위 기능들로 나눠가며 설계하는 방식이다.
- 상향식 설계 : 가장 기본적인 컴포넌트를 먼저 설계한 다음 이것을 사용하는 상위 수준의 컴포넌트를 설계하는 방식이다.

### 프로토타입 모형(Prototype Model)

- 실제 개발될 시스템의 견본(Prototype)을 미리 만들어 최종 결과물을 예측하는 모형이다.
- 개발이 완료되고 나서 사용을 하면 문제점을 할 수 있는 폭포수 모형의 단점을 보완하기 위한 모형으로 요구사항을 충실히 반영할 수 있다.

### HIPO(Hierarchy Input Process Output)

- 입력, 처리, 출력으로 구성되는 시스템 분석 및 설계와 시스템 문서화용 기법이다.
- 일반적으로 가시적 도표(Visual Table of Contents), 총체적 다이어그램(Overview Diagram), 세부적 다이어그램(Detail Diagram)으로 구성된다.
- 구조도(가시적 도표, Visual Table of Contents), 개요, 도표(Index Diagram), 상세 도표(Detail Diagram)로 구성된다.
- 가시적 도표는 전체적인 기능과 흐름을 보여주는 구조이다.
- 기능과 자료의 의존 관계를 동시에 표현할 수 있다.
- 보기 쉽고 이해하기 쉬우며 유지보수가 쉽다.
- 하향식 소프트웨어 개발을 위한 문서화 도구이다.

### V-모델

- 폭포수 모형에 시스템 검증과 테스트 작업을 강조한 모델이다.
- 세부적인 프로세스로 구성되어 있어서 신뢰도 높은 시스템 개발에 효과적이다.
- 개발 단계의 작업을 확인하기 위해 테스트 작업을 수행한다.
- 생명주기 초반부터 테스트 작업을 지원한다.
- 코드뿐만 아니라 요구사항과 설계 결과도 테스트할 수 있어야 한다.
- 폭포수 모형보다 반복과 재처리 과정이 명확하다.
- 테스트 작업을 단계별로 구분하므로 책임이 명확해진다.

### 애자일(Agile) 개발 방법론

- 날렵한, 재빠른 이란 사전적 의미가 있다.
- 특정 방법론이 아닌 소프트웨어를 빠르고 낭비 없이 제작하기 위해 고객과의 협업에 초점을 두고 소프트웨어 개발 중 설계 변경에 신속히 대응하여 요구사항을 수용할 수 있다.
- 절차와 도구보다 개인과 소통을 중요시하고 고객과의 피드백을 중요하게 생각한다.
- 소프트웨어가 잘 실행되는데 가치를 두며, 소프트웨어 배포 시차를 최소화할 수 있다.
  - 특징 : 짧은 릴리즈와 반복, 점증적 설계, 사용자 참여, 문서 최소화, 비공식적인 커뮤니케이션 변화
  - 종류
    - 익스트림 프로그래밍(XP, eXtreame Programming)
    - 스크럼(SCRUM)
    - 린(Lean)
    - DSDM(Dynamic System Development, 동적 시스템 개발 방법론)
    - FDD(Feature Driven Development, 기능 중심 개발)
    - Crystal
    - ASD(Adaptive Software Development, 적응형 소프트웨어 개발방법론)
    - DAD(Disciplined Agile Delivery, 학습 애자일 배포)
- Agile 선언문
  - 프로세스나 도구보다 개인과의 소통이 더 중요하다.
  - 완벽한 문서보다 실행되는 소프트웨어가 더 중요하다.
  - 계약 협상보다 고객과의 협업이 더 중요하다.
  - 계획을 따르는 것보다 변경에 대한 응답이 더 중요하다.

#### XP (eXtream Programming)

- 개념
  - 1999년 Kent Beck이 제안하였으며, 개발 단계 중 요구사항이 시시각각 변동이 심한 경우 적합한 방법론
  - 요구에 맞는 양질의 소프트웨어를 신속하게 제공하는 것을 목표로 함
  - 요구사항을 모두 정의해 놓고 작업을 진행하는 것이 아니라, 요구사항이 변경되는 것을 적용하는 방식으로, 예측성보다는 적응성에 더 높은 가치를 부여한 방법
  - 고객의 참여와 개발 과정의 반복을 극대화하여 생산성을 향상하는 방법
- 핵심 가치
  - 소통(Communication) : 개발자, 관리자, 고객 간의 원활한 소통을 지향한다.
  - 단순성(Simplicity) : 부가적 기능 또는 미사용 구조와 알고리즘은 배제한다.
  - 피드백(Feedback) : 소프트웨어 개발에서 변화는 불가피하므로 지속적 테스트와 통합, 반복적 결함 수정 등 빠르게 피드백한다.
  - 용기(Courage) : 고객 요구사항 변화에 능동적으로 대응한다.
  - 존중(Respect) : 개발 팀원 간의 상호 존중을 기본으로 한다.
- 효과적인 프로젝트 관리를 위한 3대 요소
  - 사람(People) : 인적 자원
  - 문제(Problem) : 문제 인식
  - 프로세스(Process) : 작업 계획

#### SCRUM

- 개념과 특징
  - 요구사항 변경에 신속하게 대처할 수 있는 반복적이고 점진적인 소규모 팀원 간 활발한 소통과 협동심이 필요한 팀 중심의 소프트웨어 개발 방법론
  - 신속하게 반복적으로 실제 작동하는 소프트웨어를 제공
  - 개발자들의 팀 구성과 각 구성원의 역할, 일정 결과물 및 그 외 규칙을 정하는 것을 의미
  - 기능 개선점에 우선순위를 부여하고, 개발 주기 동안 실제 동작 가능한 결과를 제공
  - 개발 주기마다 적용된 기능이나 개선점의 리스트를 제공
  - 커뮤니케이션을 위해 팀은 개방된 공간에서 개발하고, 매일 15분 정도 짧은 회의를 함
  - 팀원 스스로 팀을 구성해야 함(Self Organizing)
- 기본 원리
  - 기능 협업을 기준으로 배치된 팀은 스프린트 단위로 소프트웨어를 개발한다.
  - 스프린트는 고정된 30일의 반복이며, 스프린트를 시행하는 작업은 고정된다.
  - 요구사항, 아키텍처, 설계가 프로젝트 전반에 걸쳐 잘 드러나야 한다.
  - 정해진 시간을 철저히 지켜야 하며, 완료된 모든 작업은 제품 백로그에 기록된다.
  - 가장 기본적인 정보 교환 수단은 일일 스탠드 업 미팅, 또는 일일 스크럼이다.

# 요구사항 개발 ★★★

### 요구공학(Requirements Engineering)

- 요구공학의 개념
  - 소프트웨어 개발 시 사용자 요구가 정확히 반영된 시스템 개발을 위해 사용자의 요구를 추출, 분석, 명세, 검증, 관리하는 구조화된 활동 집합이다.
  - 요구사항을 정의하고, 문서로 만들고 관리하는 프로세스를 의미한다.
  - 효과적인 의사소통을 통하여 공통 이해를 설정하며, 불필요한 비용 절감, 요구사항 변경 추적이 가능해진다.
  - 분석 결과의 문서화를 통해 향후 유지보수에 유용하게 활용할 수 있다.
  - 자료 흐름도, 자료 사전 등이 효과적으로 이용될 수 있으며, 더 구체적인 명세를 위해 소단위 명세서(Mini-Spec)가 활용될 수 있다.
- 요구공학의 목적
  - 소프트웨어 개발 시 이해관계자 사이의 원활한 의사소통 수단을 제공한다.
  - 요구사항 누락 방지, 상호 이해 오류 등의 제거로 경제성을 제공한다.
  - 요구사항 변경 이력 관리를 통하여 개발 비용 및 시간을 절약할 수 있다.
  - 비용과 일정에 대한 제약설정과 타당성 조사, 요구사항 정의 문서화 등을 수행한다.
- 요구공학(개발) 프로세스
  - 요구사항을 명확히 분석하여 검증하는 진행 순서를 의미한다.
  - 개발 대상에 대한 요구사항을 체계적으로 도출한다.
  - 도출된 요구사항을 분석하여 분석 결과를 명세서에 정리한다.
  - 정리된 명세서를 마지막으로 확인, 검증하는 일련의 단계를 말한다.
  - 경제성, 기술성, 적법성, 대안성 등 타당성 조사가 선행되어야 한다.

### 요구사항 분류 기준

- 기능적 요구사항 : 시스템이 실제로 어떻게 동작하는지에 관점을 둔 요구사항(ex. A라는 기능이 있어야 한다.)
- 비기능적 요구사항 : 시스템 구축에 대한 성능, 보안, 품질, 안정성 등으로 실제 수행에 보조적인 요구사항(ex. 몇 초 내로 A라는 화면이 보였으면 좋겠다 등)

### 요구사항 명세(Requirement Specification)

- 시스템 정의, 시스템 요구사항, 소프트웨어 요구사항을 작성한다.
- 체계적으로 검토, 평가, 승인될 수 있도록 문서로 만드는 것을 의미한다.
- 기능 요구사항은 빠지는 부분 없이 명확하게 기술한다.
- 비기능 요구사항은 필요한 것만 명확하게 기술한다.
- 개발자가 효과적으로 설계할 수 있고 사용자가 쉽게 이해할 수 있도록 한다.

### 요구사항 명세 속성

- 정확성 : 요구사항은 정확해야 한다.
- 명확성 : 단 한 가지로만 해설되어야 한다.
- 완전성 : 모든 것이 표현(기능+비기능) 가능해야 한다.
- 일관성 : 요구사항 간 충돌이 없어야 한다.
- 수정 용이성 : 요구사항 변경이 가능해야 한다.
- 추적성 : RFP, 제안서를 통해 추적 가능해야 한다.

### 형상관리(Configuration Management)

- 애플리케이션 개발 단계에서 도출되는 프로그램, 문서, 데이터 등의 모든 자료를 형상 단위라고 하며, 이러한 자료의 변경을 관리함으로써 애플리케이션 버전 관리 등을 하는 활동이다.(ex. Git, SVN(subversion), Apache CVS 등)

# UML (Unified Modeling Language) ★★★

### 개념 모델링(Conceptual Modeling)

- 요구사항을 이해하기 쉽도록 실 세계의 상황을 단순화하여 개념적으로 표현한 것을 모델이라고 하고, 이렇게 표현된 모델을 생성해 나가는 과정을 개념 모델링이라고 한다.
- 모델은 문제가 발생하는 상황에 대한 이해를 증진하고 해결책을 설명하므로 소프트웨어 요구사항 분석의 핵심이라 할 수 있다.
- 개발 대상 도메인의 엔티티(Entity)들과 그들의 관계 및 종속성을 반영한다.
- 요구사항별로 관점이 다르므로 개념 모델도 다양하게 표현되어야 한다.
- 대부분 UML(Unified Modeling Language)을 사용한다.
- 종류 : Use Case Diagram, Data Flow Model, State Model, Goal-Based Model, User Interactions, Object Model, Data Model

### UML (Unified Modeling Language)

- UML 개념
  - 객체지향 소프트웨어 개발 과정에서 시스템 분석, 설계, 구현 등의 산출물을 명세화, 시각화, 문서화 할 때 사용하는 모델링 기술과 방법론을 통합하여 만든 범용 모델링 언어이다.
  - Rumbaugh의 OMT 방법론과 Booch의 Booch 방법론, Jacobson의 OOSE 방법론을 통합하여 만든 모델링 개념의 공통 집합으로, 객체지향 분석 및 설계 방법론의 표준 지정을 목표로 제안된 모델링 언어이다.
  - OMG(Object Management Group)에서 표준화 공고 후 Microsoft, Oracle 등이 참여하여 1997.1 버전 1.0을 Release 하였다.
- 럼바우(Rumbaugh) 객체지향 분석 기법
  - 소프트웨어 구성 요소를 그래픽으로 모형화하였다.
  - 객체 모델링 기법이라고도 한다.
    - 객체 모델링 : 정보 모델링이라고도 한다. 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 객체를 다이어그램으로 표시한다.(OMT : Object Modeling Technique)
    - 동적 모델링 : 제어 흐름, 상호작용, 동작 순서 등의 상태를 시간 흐름에 따라 상태 다이어그램으로 표시한다.
    - 기능 모델링 : 여러 프로세스 간의 자료 흐름을 표시한다. 어떤 데이터를 입력하여 어떤 결과를 가져올 수 있을지를 표현한다.
- UML의 특성
  - 비주얼화 : 소프트웨어 구성 요소 간의 관계 및 상호작용을 시각화한 것이다.
  - 문서화 : 소프트웨어 생명주기의 중요한 작업을 추적하고 문서화할 수 있다. 개발 프로세스 및 언어와 무관하게 개발자 간의 의사소통 도구를 제공한다.
  - 명세화 : 분석, 설계, 구현의 완벽한 모델을 제공한다. 분석 단계-기능 모델, 설계 단계-동작 수준 모델, 구현 단계-상호작용 모델 수준으로 명세화할 수 있다. 단순 표기법이 아닌 구현에 필요한 개발적 요소 및 기능에 대한 명세를 제공한다.
  - 구축 : 객체지향 언어와 호환되는 프로그래밍 언어는 아니지만, 모델이 객체지향 언어로 매핑될 수 있다.
- UML 소프트웨어에 대한 관점
  - 기능적 관점 : 사용자 측면에서 본 소프트웨어의 기능을 나타낸다. 사용 사례 모델링이라고도 한다. 요구분석 단계에서 사용한다. UML에서는 Use Case Diagram을 사용한다.
  - 정적 관점 : 소프트웨어 내부의 구성 요소 사이의 구조적 관계를 나타낸다. 객체, 속성, 연관 관계, 오퍼레이션의 시스템 구조를 나타내며, UML에서는 Class Diagram을 사용한다. (ex. 클래스 사이의 관계, 클래스 구성과 패키지 사이의 관계)
  - 동적 관점 : 시스템의 내부 동작을 말하며, UML에서는 Sequence Diagram, State Diagram, Activity Diagram을 사용한다.
- UML의 기본 구성
  - 사물(Things)
  - 관계(Relationship)
  - 다이어그램(Diagram)

### Use Case Diagram

- 객체지향 초반기 분석 작업에 작성되는 사용자의 요구를 기능적 측면에서 기술할 때 사용되는 도구로 Actor와 User Case로 구성된다.
- 얻어지는 결과는 개발 대상 시스템이 제공해야 하는 서비스 목록이 된다.

#### Use Case Diagram 요소

- 시스템 경계(System Boundary)
- 액터(Actor)
- 유스케이스(Use Case)
- 접속 관계(Communication Association)
- 사용 관계(Uses Association)
- 확장 관계(Extends Association)

#### Use Case Diagram 작성단계

- 액터 식별
- Use Case 식별
- 관계 정의
- Use Case 구조화

# UI (User Interface) / UX (User eXperience) ★★★

### UI

- 인간, 디지털 기기, 소프트웨어 사이에서 의사소통할 수 있도록 만들어진 매개체이다.
- 인간과 컴퓨터의 상호작용(HCI)에 필요한 화상, 문자, 소리, 수단(장치)을 의미한다.

#### UI 분야

- 표현에 관한 분야 : 전체적인 구성과 콘텐츠의 상세 표현을 위한 분야이다.
- 정보 제공과 전달 분야 : 물리적 제어를 통한 정보 제공과 전달을 위한 분야이다.
- 기능 분야 : 기능적으로 사용자가 쉽고 간편하게 사용하도록 하는 분야이다.

#### UI의 특징

- 사용자 입력의 검증
- 에러 처리의 에러 메시지 처리
- 도움과 프롬프트(Prompt) 제공
  - 프롬프트 : 사용자의 명령을 받아들일 준비가 되었음을 모니터에 나타내는 표시(커서 등)

#### UI 설계 원칙

- 직관성 : 누구나 쉽게 이해하고 사용할 수 있도록 한다.
- 유효성 : 사용자의 목적을 정확히 달성할 수 있도록 유용하고 효과적이어야 한다.
- 학습성 : 사용자가 쉽게 배우고 익힐 수 있어야 한다.
- 유연성 : 사용자의 요구를 최대한 수용하면서 오류를 최소화해야 한다.

#### UI 설계 도구

- 와이어 프레임(Wire Frame) : UI 중심의 화면 레이아웃을 선(Wire)을 이용하여 대략적으로 작성한다.
- 목업(Mockup) : 실물과 흡사한 정적인 모형을 의미한다.
- 프로토타입(Prototype) : Interaction(상호작용)이 결합하여 실제 작동하는 모형이다.
- 스토리보드(StoryBoard) : 정책, 프로세스, 와이어 프레임, 설명이 모두 포함된 설계 문서이다.

### UX

#### UX 사용자 경험

- 사용자가 제품을 대상으로 직/간접적으로 사용하면서 느끼고 생각하게 되는 지각과 반응, 행동 등 모든 경험을 의미한다.
- UI는 사람과 시스템 간의 상호작용을 의미하지만, UX는 제품과 서비스, 회사와 상호작용을 통해서 전체적인 느낌이나 경험을 말한다.
- UX에 영향을 주는 요소 : 성능, 시간

#### 모바일 사용자 UX 설계 시 고려사항(행정안전부 고시)

- 시스템을 사용하는 대상, 환경, 목적, 빈도 등을 고려한다.
- 사용자가 직관적으로 서비스 이용 방법을 파악할 수 있도록 한다.
- 입력의 최소화, 자동 완성 기능을 제공한다.
- 사용자의 입력 실수를 수정할 수 있도록 되돌림 기능을 제공한다.
- 모바일 서비스의 특성에 적합한 디자인을 제공한다.

# 모듈과 결합도, 응집도 ★★★

### 모듈

- 전체 프로그램에서 어떠한 기능을 수행할 수 있는 실행 코드를 의미한다.
- 재사용이 가능하며 자체적으로 컴파일할 수 있다.
- 시스템 개발 시 기간과 노동력을 절감할 수 있다.
- 모듈의 독립성은 결합도와 응집도에 의해 측정된다.
- 서브루틴 = 서브 시스템 = 작업 단위
- 변수의 선언을 효율적으로 할 수 있어 기억 장치를 유용하게 사용할 수 있다.
- 모듈마다 사용할 변수를 정의하지 않고 상속하여 사용할 수 있다.
- 각 모듈의 기능이 서로 다른 모듈과의 과도한 상호 작용을 회피함으로서 이루어지는 것을 기능적 독립성이라 한다.

### 결합도(Coupling)

- 서로 다른 두 모듈 간의 상호 의존도로서 두 모듈 간의 기능적인 연관 정도를 나타낸다.
- 모듈 간의 결합도를 약하게 하면 모듈 독립성이 향상되어 시스템을 구현하고 유지보수 작업이 쉬워진다.
- 자료 결합도가 설계 품질이 가장 좋다.

| 결합도 수준 |              분류              | 특징                                                                                                                                                                                                                                                                                        |
| :---------: | :----------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 결합도 약함 |   자료 결합도(Data Coupling)   | 모듈 간의 인터페이스가 자료 요소로만 구성된 경우로 다른 모듈에 영향을 주지 않는 가장 바람직한 결합도이다. 모듈 간의 내용을 전혀 알 필요가 없다.                                                                                                                                             |
|             | 스탬프 결합도(Stamp Coupling)  | 두 모듈이 같은 자료 구조를 조회하는 경우의 결합도이며, 자료 구조의 어떠한 변화 즉 포맷이나 구조의 변화는 그것을 조회하는 모든 모듈 및 변화되는 필드를 실제로 조회하지 않는 모듈까지도 영향을 미치게 된다. 배열, 레코드, 구조 등이 모듈 간 인터페이스로 전달되는 경우와 관계된다.            |
| 결합도 보통 | 제어 결합도(Control Coupling)  | 어떤 모듈이 다른 모듈의 내부 논리 조작을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우이며, 하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에 처리 명령을 부여하는 권리 전도 현상이 발생하게 된다.                                                                     |
|             | 외부 결합도(External Coupling) | 어떤 모듈에서 외부로 선언한 변수(데이터)를 다른 모듈에서 참조할 경우와 관계된다.                                                                                                                                                                                                            |
|             |  공통 결합도(Common Coupling)  | 여러 모듈이 공통 자료 영역을 사용하는 경우로 공통 데이터 영역 내용을 수정하면 이 데이터를 사용하는 모든 모듈에 영향을 준다.                                                                                                                                                                 |
| 결합도 강함 | 내용 결합도(Content Coupling)  | 가장 강한 결합도를 가지고 있으며, 한 모듈이 다른 모듈의 내부 기능 및 그 내부 자료를 조회하도록 설계되었을 경우와 관계된다. 한 모듈에서 다른 모듈의 내부로 제어 또는 이동된다. 한 모듈이 다른 모듈 내부 자료의 조회 또는 변경이 가능하다. - 두 모듈이 같은 문자(Literals)의 공유가 가능하다. |

### 응집도(Cohesion)

- 명령어, 명령어의 모임, 호출문, 특정 작업 수행 코드 등 모듈 안의 요소들이 서로 관련된 정도를 말한다.
- 구조적 설계에서 기능 수행 시 모듈 간 최소한의 상호작용을 하여 하나의 기능만을 수행하는 정도를 표현한다.
- 모듈이 독립적인 기능으로 구성됨의 정도를 의미한다.
- 응집도가 높다는 것은 필요한 요소들로 구성됨을 의미한다.
- 응집도가 낮다는 것은 요소 간의 관련성이 적음을 의미한다.

| 응집도      | 분류                                            | 특징                                                                                                     |
| ----------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 응집도 약함 | 우연적 응집도(Coincidental Cohesion)            | 모듈 내부의 각 기능 요소들이 서로 관련이 없는 요소로만 구성된 경우와 관계된다.                           |
|             | 논리적 응집도(Logical Cohesion)                 | 유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 하나의 모듈이 형성되는 경우와 관계된다.          |
|             | 시간적 응집도(Temporal Cohesion)                | 특정 시간에 처리되는 여러 기능을 모아 한 개의 모듈로 작성할 경우와 관계된다.                             |
|             | 절차적 응집도(Procedural Cohesion)              | 모듕리 다수의 관련 기능을 가질 때 모듈 내부의 기능 요소들이 그 기능을 순차적으로 수행할 경우와 관계된다. |
|             | 통신적(교환적) 응집도(Communicational Cohesion) | 같은 입력과 출력을 사용하는 소 작업이 모인 경우와 관계된다.                                              |
|             | 순차적 응집도(Sequential Cohesion)              | 한 모듈 내부의 한 기능 요소에 의한 출력 자료가 다음 기능 요소의 입력 자료로 제공되는 경우와 관계된다.    |
| 응집도 강함 | 기능적 응집도(Functional Cohesion)              | 모듈 내부의 모든 기능 요소들이 한 문제와 연관되어 수행되는 경우와 관계된다.                              |

#### 모듈 설계의 특징

바람직한 소프트웨어 설계는 응집도는 강하게, 결합도는 약하게 설계하여 모듈의 독립성을 확보할 수 있도록 한다.

- 유지보수가 수월해야 하며 복잡도와 중복을 피하며 입구와 출구는 하나씩 갖도록 한다.
- 모듈 간의 접속 관계를 분석하여 복잡도와 중복을 줄인다.
- 모듈 간의 효과적인 제어를 위해 설계에서 계층적 자료 조직이 제시되어야 한다.
- 적당한 모듈의 크기를 유지하고 모듈 간의 접속 관계를 분석하여 복잡도와 중복을 줄인다.
- 모듈의 크기가 작으면 모듈 개수가 증가하여 모듈 간 통합 비용이 증가하고, 모듈의 크기가 크면 단위 모듈 개발에 큰 비용과 시간이 소요된다.
- 모듈 독립성이 높다는 것은 단위 모듈을 변경하더라도 타 모듈에 영향이 적다는 의미이며, 오류 발견과 해결이 쉬워진다.

### 모듈과 컴포넌트

- 모듈
  - 자신만으로 동작할 수 있는 명령의 집합이다.
  - 실제로 가장 맨 앞에 위치하는 구현된 단위이며 자료 구조, 알고리즘 등 이를 제공하는 인터페이스다.
  - 정의하지 않는 이상 바로 재활용할 수 없다.
- 컴포넌트
  - SW 시스템에서 독립적인 업무 또는 기능을 수행하는 모듈로 교체가 가능한 부품이다.
  - 모듈화로 생산성을 향상했으나 모듈의 소스 코드 레벨의 재활용으로 인한 한계성을 극복하기 위하여 등장하였다.
  - 인터페이스를 통해서 연결된다.

### 공통 모듈 - 명세 기법

- 정확성(Correctness) : 실제 구현 시 꼭 필요한 기능인지 확인할 수 있도록 정확히 작성한다.
- 명확성(명료성, Clearity) : 해당 기능에 대한 일관된 이해와 하나로 해석될 수 있도록 작성한다.
- 완전성(Completeness) : 시스템 구현 시 필요한 것, 요구되는 것을 모두 작성한다.
- 일관성(Consistency) : 공통 기능 간 서로 충돌이 발생하지 않도록 작성한다.
- 추적성(Traceability) : 공통 기능에 대한 요구사항 출처, 관련 시스템이 유기적 관계 구분이 가능하도록 작성한다.

# 소프트웨어 아키텍처(Software Architecture)

- 요구사항을 기반으로 개발 대상 소프트웨어의 기본 틀(뼈대)을 만드는 것이다.
- 다수의 이해관계자가 참여하는 복잡한 개발에서 상호 이해, 타협, 의사소통을 체계적으로 접근하기 위한 것이다.
- 전체 시스템의 전반적인 구조를 체계적으로 설계하는 것이다.
- 권형도(2004) : "소프트웨어를 구성하는 컴포넌트들의 상호작용 및 관계, 각각의 특성을 기반으로 컴포넌트들이 상호 유기적으로 결합하는 소프트웨어의 여러 가지 원칙들의 집합"이다.
- 역할 : 설계 및 구현을 위한 구조적/비구조적인 틀(Frame)을 제공한다.
- Structure Frame : 시스템 개발을 위하여 결정된 컴포넌트의 구조 모델이다.
- Non Structure frame : 해당 구조 모델 이외 다른 아키텍처 설계의 결정들이다.

### Software Architecture 특징

- 간략성 : 이해하고 추론할 수 있을 정도로 간결해야 한다.
- 추상화 : 시스템의 추상적인 표현을 사용한다.
- 가시성 : 시스템이 포함해야 하는 것들을 가시화해야 한다.
- 복잡도 관리 종류 : 과정 추상화, 데이터 추상화, 제어 추상화

### MVC(Model View Controller) 패턴

대화형 애플리케이션을 아래와 같이 3부분으로 분류한다.

- Model : 핵심 기능 + 데이터
- View : 사용자에게 정보 표시(다수 뷰가 정의될 수 있다.)
- Controller : 사용자로부터 입력을 처리한다.

### 클라이언트 서버(Client Server) 패턴

- 하나의 서버와 다수 클라이언트로 구성되며, 클라이언트가 서버에 서비스를 요청하면 커뮤니케이션이 이루어진다. 서버는 응답을 위해 항상 대기 중이어야 한다.
- 여러 컴포넌트에 걸쳐서 데이터와 데이터를 처리하는 애플리케이션에 적합하다.
- 장점 : 직접 데이터 분산, 위치 투명성을 제공한다.
- 단점 : 서비스와 서버의 이름을 관리하는 레지스터가 없어 이용 가능한 서비스 시간에 불편함을 초래한다.
- 활용 : 이메일, 문서 공유, 은행 등 온라인 애플리케이션

### 파이프 필터(Pipe-Filters)

- 데이터 흐름(Data Stream - 데이터 송/수신이나 처리의 연속적 흐름)을 생성하고 처리하는 시스템을 위한 구조이다.
- 필터는 파이프를 통해 받은 데이터를 변경시키고 그 결과를 파이프로 전송한다.
- 각 처리 과정은 필터 컴포넌트에서 이루어지며, 처리되는 데이터는 파이프를 통해 흐른다. 이 파이프는 버퍼링 또는 동기화 목적으로 사용될 수 있다.
- 컴파일러, 연속한 필터들은 어휘 분석, 파싱, 의미 분석 그리고 코드 생성을 수행한다.
- 장점 : 필터 교환과 재조합을 통해서 높은 유연성을 제공한다.
- 단점 : 상태정보 공유를 위해 비용이 소요되며 데이터 변환에 과부하가 걸릴 수 있다.
- 활용 : 컴파일러, 어휘 분석, 구문 분석, 의미 분석, 코드 생성

### Peer To Peer

- 분산 컴퓨팅 애플리케이션 구축 시 유연성을 제공한다.
- 클라이언트/서버 스타일레 대칭적 특징을 추가한 형태이다.
- Peer가 하나의 컴포넌트로 대응되며 컴포넌트는 클라이언트, 서버 역할 모두 수행한다.

### 이벤트 버스(Event - Bus)

- 이벤트 버스 : 이벤트 생성(소스), 이벤트 수행(리스너), 이벤트 통로(채널), 채널 관리(버스)
- 소스 이벤트가 메시지를 발행하면 해당 채널 구독자가 메시지 수신 후 해당 이벤트를 처리하는 방식으로 주로 이벤트를 처리하며 이벤트 소스, 이벤트 리스너(Event Listener), 채널, 이벤트 버스 등 4가지 주요 컴포넌트들을 갖는다.
- 소스는 이벤트 버스를 통해 특정 채널로 메시지를 발행하고, 리스너는 특정 채널에서 메시지를 구독한다. 리스너는 이전에 구독한 채널에 발행된 메시지에 대해 알림을 받는다.

### 인터프리터(InterPreter)

- SQL과 같은 데이터베이스 쿼리 언어, 통신 프로토콜을 정의하기 위한 언어
- 특정 언어로 작성된 프로그램을 해석하는 컴포넌트를 설계할 때 사용된다.
- 주로 특정 언어로 작성된 문장 혹은 표현식이라고 하는 프로그램의 각 라인을 수행하는 방법을 지정한다. 기본 아이디어는 언어의 각 기호에 대해 클래스를 만드는 것이다.

# 객체지향 설계 ★★★

### 구조적 프로그래밍(Structured Programming)

- 프로그램의 이해가 쉽고 디버깅 작업이 쉽다.
- 한 개의 입구(입력)와 한 개의 출구(출력) 구조를 갖도록 한다.
- GOTO(분기) 문은 사용하지 않는다.
- 구조적 프로그래밍의 기본 구조 : 순차(Sequence) 구조, 선택(Selection) 구조, 반복(Iteration) 구조

### 절차적 프로그래밍(Procedural Programming)

- 순서대로 일련의 명령어를 나열하여 프로그래밍한다.
- Function 기반의 프로그래밍이며, 프로시저로써 Function 외에도 Subroutine이 문법적으로 구현되어 있다.
- 절차형 언어의 경우 규모가 커지면 커질수록 함수가 기하급수적으로 늘어난다.
- 함수가 타 프로그램과 문제를 일으킬 수 있는 문제점을 가지고 있다.
- 프로그램과 별개로 데이터 취급이 되므로 완전하지 않고 현실 세계 문제를 프로그램으로 표현하는데 제약이 있다.

### 객체지향 프로그래밍(Object Oriented Programming)

- 컴퓨터 소프트웨어를 구조적인 코드 단위로 보는 것이 아니라 Object 단위로 구분하고 Object 간의 모음으로 설계하는 것이다.
- 소프트웨어 내의 Object는 서로 Message를 주고받는다.
- 처리 요구를 받은 객체가 자기 자신 안에 있는 내용을 가지고 처리하는 방식이다.
- 프로그램이 단순화되고 생산성, 신뢰성이 높아져 대규모 개발에 많이 사용된다.

### 객체지향의 특징

- 캡슐화(Encapsulation)
  - 서로 관련성이 높은 데이터(속성)와 그와 관련된 기능(메서드, 함수)을 묶는 기법이다.
  - 결합도가 낮아져 소프트웨어 개발에 있어 재사용성이 높아진다.
  - 정보 은닉을 통하여 타 객체와 메시지 교환 시 인터페이스가 단순해진다.
  - 변경 발생 시 오류의 파급 효과가 적다.
- 상속성(Inheritance)
  - 상위 클래스의 모든 속성, 연산을 하위 클래스가 재정의 없이 물려받아 사용하는 것이다.
  - 상위 클래스는 추상적 성질을, 자식 클래스는 구체적 성질을 가진다.
  - 하위 클래스는 상속받은 속성과 연산에 새로운 속성과 연산을 추가하여 사용할 수 있다.
  - 다중 상속 : 다수 상위 클래스에서 속성과 연산을 물려받는 것이다.
- 다형성(Polymorphism)
  - 객체가 다양한 모양을 가지는 성질을 뜻한다.
  - 오퍼레이션이나 속성의 이름이 하나 이상의 클래스에서 정의되고 각 클래스에서 다른 형태로 구현될 수 있는 개념이다.
  - 속성이나 변수가 서로 다른 클래스에 속하는 객체를 지칭할 수 있는 성질이다.
- 추상화(Abstraction)
  - 시스템 내의 공통 성질을 추출한 뒤 추상 클래스를 설정하는 기법이다.
  - 현실 세계를 컴퓨터 시스템에 자연스럽게 표현할 수 있다.
  - 종류 : 기능 추상화, 제어 추상화, 자료 추상화
- 정보은닉(Information Hiding)
  - 객체 내부의 속성과 메서드를 숨기고 공개된 인터페이스를 통해서만 메시지를 주고받을 수 있도록 하는 것을 의미한다.
  - 예기치 못한 SideEffect를 줄이기 위해 사용한다.

### 오버로딩(Overloading)과 오버라이딩(Overriding)

- 오버로딩
  - 사전적 의미 : 과적, 과부하
  - 한 클래스 내에서 같은 이름의 메서드를 사용하는 것
  - 같은 이름의 메서드를 여러 개 정의하면서 매개 변수의 유형과 개수가 달라지도록 하는 기술
- 오버라이딩
  - 사전적 의미 : 가장 우선되는, 최우선으로 되는, 다른 것보다 우선인
  - 상속 관계의 두 클래스의 상위 클래스에서 정의한 메서드를 하위 클래스에서 변경(재정의)하는 것
  - JAVA 언어에서는 static 메서드의 오버라이딩을 허용하지 않는다.
  - 오버라이딩의 경우 하위 객체의 매개 변수 개수와 타입은 상위 객체와 같아야 한다.

### 객체지향 설계 원칙(SOLID)

1. 단일 책임의 원칙
   - (SRP : Single Responsibility Principle)
   - 모든 클래스는 단일 목적으로 생성되고, 하나의 책임만 가져야 한다.
2. 개방 - 폐쇄의 원칙
   - (OCP : Open Closed Principle)
   - 소프트웨어 구성 요소는 확장에 대해서는 개방되어야 하나 수정에 대해서는 폐쇄적이어야 한다.
3. 리스코프치환 원칙
   - (LSP : Liskov Substitution Principle)
   - 부모 클래스가 들어갈 자리에 자식 클래스를 대체하여도 계획대로 작동해야 한다.
4. 인터페이스 분리 원칙
   - (ISP : Interface Segregation Principle)
   - 클라이언트는 자신이 사용하지 않는 메서드와 의존 관계를 맺으면 안 된다.
   - 클라이언트가 사용하지 않는 인터페이스 때문에 영향을 받아서는 안 된다.
5. 의존 역전 원칙
   - (DIP : Dependency Inversion Principle)
   - 의존 관계를 맺으면 변하기 쉽고 변화 빈도가 높은 것보다 변하기 어렵고 변화 빈도가 낮은 것에 의존한다.

# 디자인 패턴

- 자주 사용하는 설계 형태를 정형화하여 유형별로 설계 템플릿을 만들어 두고 소프트웨어 개발 중 나타나는 과제를 해결하기 위한 방법 중 한 가지다.
- 다양한 응용 소프트웨어 시스템들을 개발할 때 서로 간에 공통점이 있으며, 이러한 유사점을 패턴이라 한다.
- 개발자 간 원활한 의사소통, 소프트웨어 구조 파악 용이, 설계 변경에 대한 유연한 대처, 개발의 효율성, 유지보수성, 운용성 등 소프트웨어 품질 향상에 도움을 준다.
- 객체지향 프로그래밍 설계 시 유사한 상황에서 구조적인 문제를 해결할 수 있도록 방안을 제공해주며, Gof(Gang of Four) 분류가 가장 많이 사용된다.

### 디자인 패턴을 사용할 때의 장/단점

장점

- 개발자 간의 월활한 의사소통을 지원한다.
- 소프트웨어 구조 파악이 쉽다.
- 재사용을 통한 개발 시간을 단축할 수 있다.
- 설계 변경 요청에 대해 유연하게 대처할 수 있다.
- 객체지향 설계 및 구현의 생산성을 높이는 데 적합하다.

단점

- 객체지향 설계/구현 위주로 사용된다.
- 초기 투자 비용이 부담된다.

### 디자인 패턴의 구성 요소

- 필수 요소
  - 패턴의 이름 : 패턴을 부를 때 사용하는 이름과 패턴의 유형
  - 문제 및 배경 : 패턴이 사용되는 분야 또는 배경, 해결하는 문제를 의미
  - 해법 : 패턴을 이루는 요소들, 관계, 협동(Collaboration) 과정
  - 결과 : 패턴을 사용하면 얻게 되는 이점이나 영향
- 추가 요소
  - 알려진 사례 : 간단한 적용 사례
  - 샘플 코드 : 패턴이 적용된 원시 코드
  - 원리, 정당성, 근거

### GoF(Gangs of Four) 디자인 패턴

- 에릭 감마, 리처드 헬름, 랄프 존슨, 존 브리시데스가 제안
- 객체지향 설계 단계 중 재사용에 관한 유용한 설계를 디자인 패턴화하였다.
- 생성 패턴, 구조 패턴, 행위 패턴으로 분류한다.

#### 생성 패턴

- 객체를 생성하는 것과 관련된 패턴이다.
- 객체의 생성과 변경이 전체 시스템에 미치는 영향은 최소화하도록 만들어주어 유연성을 높일 수 있고 코드를 유지하기가 쉬운 편이다.
- 객체의 생성과 참조 과정을 추상화함으로써 시스템을 개발할 때 부담을 덜어준다.
- 구성
  - Factory Method
    - 상위 클래스에서 객체를 생성하는 인터페이스를 정의하고, 하위 클레스에서 인스턴스를 생성하도록 하는 방식이다.
    - Virtual-Constructor 패턴이라고도 한다.
  - Singleton
    - 전역 변수를 사용하지 않고 객체를 하나만 생성하도록 한다.
    - 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴이다.
  - Prototype
    - prototype을 먼저 생성하고 인스턴스를 복제하여 사용하는 구조이다.
    - 일반적인 방법으로 객체를 생성한다.
    - 비용이 많이 소요되는 경우 주로 사용한다.
  - Builder
    - 작게 분리된 인스턴스를 조립하듯 조합하여 객체를 생성한다.
  - Abstraction Factory
    - 구체적인 클래스에 의존하지 않고 서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공하는 패턴이다.
    - 관련된 서브 클래스를 그룹 지어 한 번에 교체할 수 있다.

#### 구조 패턴

- 클래스나 객체를 조합해 더 큰 구조를 만드는 패턴이다.
- 복잡한 형태의 구조를 갖는 시스템을 개발하기 쉽게 만들어주는 패턴이다.
- 새로운 기능을 가진 복합 객체를 효과적으로 작성할 수 있다.
  - ex. 서로 다른 인터페이스를 지닌 2 개의 객체를 묶어 단일 인터페이스를 제공하거나 객체들을 서로 묶어 새로운 기능을 제공하는 패턴이다. 프로그램 내의 자료 구조나 인터페이스 구조 등 구조를 설계하는데 많이 활용된다.
- 구성
  - Adapter
    - 클래스의 인터페이스를 사용자가 기대하는 다른 인터페이스로 변환하는 패턴으로, 호환성이 없는 인터페이스 때문에 함께 동작할 수 없는 클래스들이 함께 작동하도록 해준다.
    - 기존에 구현되어 있는 클래스에 기능 발생 시 기존 클래스를 재사용할 수 있도록 중간에서 맞춰주는 역할을 한다.
  - Bridge
    - 큰 클래스 또는 밀접하게 관련된 클래스들의 집합을 두 개의 개별 계층구조(추상화 및 구현)로 나눈 후 각각 독립적으로 개발할 수 있도록 하는 구조 디자인 패턴
    - 기능 클래스 계층과 구현 클래스 계층을 연결하고, 구현부에서 추상 계층을 분리하여 각자 독립적으로 변혈할 수 있도록 해주는 패턴이다.
  - Composite(복합체)
    - 객체들을 트리 구조들로 구성한 후, 이러한 구조들과 개별 객체들처럼 작업할 수 있도록 하는 구조 패턴
  - Decorator
    - 객체들을 새로운 행동들을 포함한 특수 래퍼 객체들 내에 넣어서 위 행동들을 해당 객체들에 연결시키는 구조적 디자인 패턴
  - Facade(퍼사드)
    - 라이브러리에 대한, 프레임워크에 대한 또는 다른 클래스들의 복잡한 집합에 대한 단순화된 인터페이스를 제공하는 구조적 디자인 패턴
  - Flyweight
    - 각 객체에 모든 데이터를 유지하는 대신 여러 객체들 간에 상태의 공통 부분들을 공유하여 사용할 수 있는 RAM에 더 많은 객체들을 포함할 수 있도록 하는 구조 디자인 패턴
  - Froxy
    - 다른 객체에 대한 대체 또는 자리표시자를 제공할 수 있는 구조 디자인 패턴
    - 프록시는 원래 객체에 대한 접근을 제어하므로, 자신의 요청이 원래 객체에 전달되기 전 또는 후에 무언가를 수행할 수 있도록 함.

### 행위 패턴

- 반복적으로 사용되는 객체들의 상호작용을 패턴화한 것으로, 클래스나 객체들이 상호작용하는 방법과 책임을 분산하는 방법을 정의한다.
- 메시지 교환과 관련된 것으로, 객체 간의 행위나 알고리즘 등과 관련된 패턴을 말한다.
- 구성
  - Chain of Responsibility(책임 연쇄)
    - 핸들러들의 체인(사슬)을 따라 요청을 전달할 수 있게 해주는 행동 디자인 패턴
    - 각 핸들러는 요청을 받으면 요청을 처리할지 아니면 체인의 다음 핸들러로 전달할지를 결정
  - Iterator(반복자)
    - 컬렉션의 요소들의 기본 표현(리스트, 스택, 트리 등)을 노출하지 않고 그들을 하나씩 순회할 수 있도록 하는 행동 디자인 패턴
  - Command(명령)
    - 요청을 요청에 대한 모든 정보가 포함된 독립실행형 객체로 변환하는 행동 디자인 패턴
    - 이 변환은 다양한 요청들이 있는 메서드들을 인수화 할 수 있도록 하며, 요청의 실행을 지연 또는 대기열에 넣을 수 있도록 하고, 또 실행 취소할 수 있는 작업을 지원할 수 있도록 함.
  - Interpreter(해석자)
    - 단순한 언어를 해석할 때 유용한 패턴
    - 간단한 언어의 문법을 정의하고 해석하는 패턴
    - 언어가 주어지면 해당 표현을 사용하여 언어로 문장을 해석하는 인터프리터를 사용하여 문법 표현을 정의하는 방법
  - Memento(기록)
    - 메멘토 패턴은 객체를 이전 상태로 되돌릴 수 있는 기능을 제공하는 패턴
    - 오리지네이터, 케어테이커, 메멘토 등 3개의 객체로 구현된다.
    - 오리지네이터 : 내부 상태를 보유하고 있는 일부 객체
  - Observer(감시자)
    - 여러 객체에 자신이 관찰 중인 객체에 발생하는 모든 이벤트에 대해 알리는 구독 매커니즘을 정의할 수 있도록 하는 행동 디자인 패턴(관찰자)
  - State(상태)
    - 객체의 내부 상태가 변경될 때 해당 객체가 그의 행동을 변경할 수 있도록 하는 행동 디자인패턴
    - 객체가 행동을 변경할 때 객체가 클래스를 변경한 것처럼 보일 수 있음
  - Strategy(전략)
    - 패턴은 알고리즘들의 패밀리를 정의하고, 각 패밀리를 별도의 클래스에 넣은 후 그들의 객체들을 상호교환할 수 있도록 하는 행동 디자인 패턴
  - Visitor(방문자)
    - 알고리즘들을 그들이 작동하는 객체들로부터 분리할 수 있도록 하는 행동 디자인 패턴
  - Template Method
    - 부모 클래스에서 알고리즘의 골격을 정의하지만, 해당 알고리즘의 구조를 변경하지 않고 자식 클래스들이 알고리즘의 특정 단계들을 오버라이드(재정의)할 수 있도록 하는 행동 디자인 패턴
  - Mediator(중재자)
    - 객체 간의 통제와 지시의 역할을 하는 중재자를 두어 객체지향의 목표를 달성하게 해준다.
    - Virual-Constructor 패턴이라고도 한다.
    - 객체 간의 혼란스러운 의존 관계들을 줄일 수 있는 행동 디자인 패턴
    - 패턴은 객체 간의 직접 통신을 제한하고 중재자 객체를 통해서만 협력하도록 한다.

---

참조 : [Github repository](https://github.com/CS-AL-SW/SW/tree/main/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC/1.%20%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%20%EC%84%A4%EA%B3%84)