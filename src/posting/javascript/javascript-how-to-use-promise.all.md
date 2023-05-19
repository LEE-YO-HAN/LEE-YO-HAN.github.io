---
title: javascript how to use promise.all
description: Promise.all()은 언제 쓰고 왜 쓰나요? - 여러 비동기 요청 한 번에 처리하기
category: javascript
date: "2023-05-19"
---

javascript를 통해 비동기 코드를 처리하는 기본적인 방법으로는 Callback 함수, Promise, async/await 등이 있다. 하지만 다수의 비동기 요청의 실행이 필요한 경우 Promise.all()을 사용해볼 수 있다.

## **Promise.all()이란?**

여러 개의 Promise를 동시에 처리하고, 모든 Promise가 완료되었을 때 그 결과들을 반환하는 javascript의 메서드이다.

Promise.all()은 배열형태의 Promise들을 인자로 받고, 이 Promise들은 병렬적으로 실행된다. Promise.all()은 해당 Promise들의 결과를 배열로 반환한다.

**만약 하나라고 Promise가 거부되면, 첫 번째 거부된 Promise를 반환하고, 나머지 Promise들은 무시된다.**

## **Promise.all()을 사용하는 이유**

Promise.all()을 사용하면 병렬적으로 실행되는 Promise들을 효율적으로 관리하고, 모든 Promise의 결과를 한 번에 처리할 수 있다. 이는 비동기 작업을 동시에 처리하고 작업이 완료되었을 때 결과를 수집해야 하는 상황에서 유용하다.

예를 들어 3초가 소요되는 비동기 요청 a, 2초가 소요되는 비동기 요청 b, 1초가 소요되는 비동기요청 c를 async/await을 통해 순차적으로 처리하게 되는 경우 총 6초가 소요되지만, Promise.all()을 통해 이전 요청이 완료되는 것을 기다리지 않고 비동기적으로 병렬로 실행시킨다면 3초만에 실행을 완료시킬 수 있는 것이다.

```javascript

// acyns/await

cosnt test1 = async () =>{
	await a() // 3000ms
    await b() // 2000ms
    await c() // 1000ms
}
// 약 6초 소요

const test2 = async () =>{
	const [res1, res2, res3] = await Promise.all([
    	a(),
        b(),
        c()
    ])
    return [res1, res2, res3]
}
// 약 3초 소요

```

## **Promise.all() 사용 상황**

아래와 같이 특정 DB의 데이터를 연속적으로 도출하기 위해 async/await과 Promise.all()을 사용해봤다.

```javascript

// 1) async/await
async func1(){
	const community_with_likes = await community.map(async (item) => {
      const like_list = await this.communityLikesRepository.find({
        where: {
          community_id: item.community_id,
        },
      });
      return like_list;
    });
}

// 2) Promise.all()
async func2(){
	const community_with_likes = await Promise.all(
      community.map(async (item) => {
        const like_list = await this.communityLikesRepository.find({
          where: {
            community_id: item.community_id,
          },
        });
        return like_list;
      }),
    );
}

```

### **1. async/await**

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOMvFZ%2FbtsgB32dgj6%2FbaANEHQzX0hxTVckIjOPiK%2Fimg.png)

async/await을 사용해 결과를 출력하려고 할 때는 위와 같이 원하는 방식대로 데이터가 출력되지 않았다.

### **2. Promise.all()**

하지만 Promise.all()을 사용해 결과를 도출하니 아래와 같이 원하는 결과값을 볼 수 있었다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo73VZ%2FbtsgCGeohNN%2F42YW4sTfKAiXcl3VeJgP51%2Fimg.png)

비동기 처리를 다루는 방법은 여러가지가 있지만, 내가 적용하고자 하는 작업의 특성에 맞게 알맞는 방법을 골라서 사용하는 것이 좋겠다.

---

참조

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

https://code-masterjung.tistory.com/91
