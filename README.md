## 🚀 배포

🔗 https://krungy.github.io/renewal-simple-editor/

## Getting started

```sh
yarn install
yarn start
```

<br>

## 🧰 기술 스택

TypeScript / React / Redux-Toolkit

## 📚 구현사항

- 재귀 형태의 객체 배열 데이터를 통한 트리 리스트 CRUD 기능이 있는 간단한 텍스트 에디터
```
// 데이터 형태
post = {
  id: string;
  title: string;
  content: string;
  parentsId: string[];
  child: post[] | [];
}

posts = post[];
```
- 탐색 알고리즘을 활용한 데이터 변경 로직 구현
- 자동 저장 및 불러오기(로컬 스토리지) 기능
