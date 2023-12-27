---
title: nestjs use bcrypt
description: Nestjs에서 bcrypt 사용하기
category: nestjs
keyword: Nestjs, bcrypt
date: "2023-04-13"
---

## bycrypt란?

비밀번호 등을 안전하게 암호화하여 저장하고 검증할 수 있도록 도와주는 라이브러리로, 랜덤한 salt를 생성하고 이를 비밀번호와 함께 암호화하여 저장한다. 이후 비밀번호 검증 시에도 같은 salt를 사용하여 입력받은 비밀번호를 암호화한 후, 저장된 암호화된 비밀번호와 비교하여 일치하는지 검증한다.

bcrypt는 암호화 강도를 선택할 수 있는 기능을 제공한다. 기본값은 10으로, 숫자가 클수록 강도가 높아지며 암호화에 소요되는 시간도 늘어난다. 보안을 위해 기본값 이상의 값을 권장한다.

## 사용법

```bash
yarn add bcrypt @types/bcrypt # nestjs는 타입스크립트가 기본이기 때문에 타입으로 설치
```

따로 module이나 main에 등록할 필요 없이 사용하고자 하는 파일에 불러오면 된다.

```typescript
import * as bcrypt from 'bcrypt';

// 암호화 후 저장
const someFN = async (userData:UserData) => {
	const hashPassword = await bcrypt.hash(userData.password,10)
	const saveData = {
    	email:userData.email,
        password: hashPassword,
    }
    // 정보 저장 로직
}

// 저장된 데이터를 통해 비밀번호 확인
const checkFN = async (userData:UserData) =>{
	const hashedPassword = // 저장된 정보 불러오는 로직

    // true or false
    const match = await bcrypt.compare(userData.password,hashedPassword)
    if(match) // 인증 후 로직
}
```

---

참조 : https://github.com/kelektiv/node.bcrypt.js#readme
