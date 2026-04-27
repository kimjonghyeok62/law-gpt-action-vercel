# Korean Law GPT Action API

국가법령정보센터 기반 법령·판례·자치법규 조회 API입니다.  
ChatGPT Custom GPT Action으로 사용하도록 설계되었습니다.

## Endpoints

| 엔드포인트 | 설명 |
|---|---|
| `/law/search` | 법령 검색 |
| `/law/text` | 조문 조회 |
| `/law/three-tier` | 법령 3단 비교 |
| `/law/ordinance/search` | 자치법규 검색 |
| `/law/ordinance/text` | 자치법규 조문 조회 |
| `/law/precedent/search` | 판례 검색 |
| `/law/precedent/text` | 판례 원문 조회 |
| `/law/annex` | 별표·서식 조회 |
| `/law/history` | 법령 연혁 조회 |
| `/law/article-history` | 조문 연혁 조회 |

## 배포

- Vercel Serverless (Hobby Plan)
- Node.js 20+, Express 5

---

## Privacy Policy

**Last updated: 2026-04-27**

This API service ("Service") is operated for personal use as a ChatGPT Custom GPT Action.

**Data Collection**  
This Service does not collect, store, or process any personal information from users. All requests are forwarded to the Korean Law Information Center (law.go.kr) public API and no user data is retained.

**Data Usage**  
Query parameters (e.g., law names, article numbers) are transmitted solely to law.go.kr for the purpose of retrieving legal information. These queries are not logged or stored by this Service.

**Third-Party Services**  
This Service uses the National Law Information Center API (law.go.kr) operated by the Ministry of Government Legislation of Korea.

**Contact**  
For any questions regarding this privacy policy, please contact: hyok96@gmail.com
