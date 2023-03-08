---
title: nestjs custom repository
description: Entityrepository()를 대신한 Repository 생성
category: nestjs
date: "2023-03-04"
---

## 포스팅 시점 nestjs 버전 : 9.x.x

새로운 토이 프로젝트를 만들면서 백엔드를 구축할 프레임워크로 nestjs를 이용하기로 마음먹었다.

원래 사용하고 있던 javascript/typescript와 동일한 언어를 사용하기 때문에 백엔드 구축에 비교적 진입장벽이 낮다고 생각했기 때문에다.

# nest 작동순서

request -> controller -> service -> controller -> response 순으로 작동하나, DB와 관련된 일을 시키기 위해서는 repository를 생성해야한다고 한다. 즉,

request -> controller -> service -> repo\* -> service -> controller -> response
로 한 단계가 추가된다. (Repostitory pattern)

@EntityRepository를 통해 레포지토리를 설정해주는 방식이 많이 보였지만

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlkldE%2FbtrUQbTjKZA%2FA6hFzyRy8SsueBbUk8cTA1%2Fimg.png)

현재 버전에서는 사용할 수 없어 다른 방법을 알아봤다.

## 기본 설정

config 설정

```typescript
// src/configs/typeorm.configs.ts

export const typeORMConfig: TypeOrmModuleOptions = {
  // Database Type
  type: "postgres", // 본인은 pg를 사용
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "database",
  entities: [__dirname + "/../**/*.entity.{js,ts}"], // 해당 경로 + 엔티티이름.entity.{js.ts}로 된 엔티티를 이용
  // autoLoadEntities: true, // 위와 다르게 entity들 알아서 찾아줌
  synchronize: true, // @@@@@@@@ 배포할때 true 사용 시 데이터 삭제될 수 있음. production 단계에서는 필히 false로 해줄 것 권장 @@@@@@
};
```

config 설정 후 root 모듈에 import

```typescript
// app.module.ts

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PostlistModule } from "./postlist/postlist.module";
import { typeORMConfig } from "./configs/typeorm.configs";
import { TypeOrmModule } from "@nestjs/typeorm/dist";

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), PostlistModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
```

entity 생성

```typescript
// src/postlist/entities/postlist.entity.ts

import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Postlist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  nickname: string;

  @Column()
  imageUrl?: string;
}
```

> config 설정 시 entities에 이름을 ~~.entity.{js.ts} 로 설정해놓고, 정작 entity 파일 이름을 설정한 형식과 다르게 작성하면 [EntityMetadataNotFound] 에러를 띄우게 되기 때문에 설정한대로 이름을 지어줘야 한다.

참조 : https://github.com/typeorm/typeorm/issues/1327

## custumRepository 만들기

본인은 src에 database 디렉토리를 만들어, 데코레이터와 모듈을 그 안에 넣어줬다.

```typescript
// src/database/typeorm-ex.decorator.ts

import { SetMetadata } from "@nestjs/common";

export const TYPEORM_EX_CUSTOM_REPOSITORY = "TYPEORM_EX_CUSTOM_REPOSITORY";

export function CustomRepository(entity: Function): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}

// typeorm-ex.module.ts

import { DynamicModule, Provider } from "@nestjs/common";
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { TYPEORM_EX_CUSTOM_REPOSITORY } from "./typeorm-ex.decorator";

export class TypeOrmExModule {
  public static forCustomRepository<T extends new (...args: any[]) => any>(
    repositories: T[],
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(
        TYPEORM_EX_CUSTOM_REPOSITORY,
        repository,
      );

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(
            baseRepository.target,
            baseRepository.manager,
            baseRepository.queryRunner,
          );
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}
```

## 사용할 repository 생성

```typescript
// src/postlist/repository/postlist.repository.ts

import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Postlist } from "../entities/postlist.entity";

@CustomRepository(Postlist)
export class PostlistRepository extends Repository<Postlist> {}
```

## module에 생성한 repository import

```typescript
// src/postlist/postlist.module.ts

import { Module } from "@nestjs/common";
import { PostlistController } from "./postlist.controller";
import { PostlistService } from "./postlist.service";
import { PostlistRepository } from "./repository/postlist.repository";
import { TypeOrmExModule } from "src/database/typeorm-ex.module";

@Module({
  imports: [TypeOrmExModule.forCustomRepository([PostlistRepository])],
  controllers: [PostlistController],
  providers: [PostlistService],
})
export class PostlistModule {}
```

### Module에 import 후 service 비즈니스 로직에만 repository를 넣어주면 된다.

```typescript
// src/postlist/postlist.service.ts

import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdatePostDto } from "./dto/update-postlist.dto";

import { PostlistRepository } from "./repository/postlist.repository";
import { Postlist } from "./entities/postlist.entity";
import { CreatePostDto } from "./dto/create-postlist.dto";

@Injectable()
export class PostlistService {
  constructor(private readonly postlistRepository: PostlistRepository) {}

  async getAllPost(): Promise<Postlist[]> {
    const found = await this.postlistRepository.find();
    return found;
  }

  async getPostById(id: number): Promise<Postlist> {
    const found = await this.postlistRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Cannot find post with id ${id}`);
    }
    return found;
  }
}

// src/postlist/postlist.controller.ts

import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-postlist.dto";
import { PostlistService } from "./postlist.service";
import { UpdatePostDto } from "./dto/update-postlist.dto";
import { Delete } from "@nestjs/common/decorators";
import { Postlist } from "./entities/postlist.entity";

@Controller("postlist")
export class PostlistController {
  constructor(readonly postlistService: PostlistService) {}

  @Post()
  createOne(@Body() createPostDto: CreatePostDto): Promise<Postlist> {
    return this.postlistService.createPost(createPostDto);
  }

  @Get()
  getAll(): Promise<Postlist[]> {
    return this.postlistService.getAllPost();
  }

  @Get(":id")
  getOne(@Param("id") id: number): Promise<Postlist> {
    return this.postlistService.getPostById(id);
  }

  @Patch(":id")
  updateOne(
    @Param("id") id: number,
    @Body() updateData: UpdatePostDto,
  ): Promise<Postlist> {
    return this.postlistService.updatePost(id, updateData);
  }

  @Delete(":id")
  deleteOne(@Param("id") id: number): Promise<void> {
    return this.postlistService.deletePost(id);
  }
}
```

필요한 로직을 설정한 후 postman을 작동시켜주면 정상적으로 실행되는 것을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMxspb%2FbtrUIZG6vWP%2F0dVetFuaUfkfuI9EXCKeN0%2Fimg.png)

nextjs와 동시에 작업하기 위해 nestjs 포트를 3001로 설정했지만, 보통은 nest 설치 시 app에 3000으로 설정된다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOfHG5%2FbtrUOQBYHjX%2FoGOqOJtiF2KbPiyKu9JCdK%2Fimg.png)

DB는 postgreSQL을 이용했다.
정상적으로 테이블에 있는 데이터가 추출되는 것이 잘 확인된다.

### 참고 :

https://orkhan.gitbook.io/typeorm/readme_ko

https://docs.nestjs.com/techniques/database
