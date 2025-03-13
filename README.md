# Merge Three Sorted Arrays (Bun + TypeScript)

โปรเจกต์นี้เป็น TypeScript ที่ใช้ Bun เป็น runtime และ package manager 
เป็นการพัฒนา ฟังก์ชัน merge(collection_1, collection_2, collection_3): number[] ที่ใช้รวม 3 อาร์เรย์ที่เรียงลำดับไว้แล้ว ให้อยู่ในอาร์เรย์เดียวกัน โดย ไม่ใช้ฟังก์ชันจัดเรียง (sort)
- collection_1 และ collection_2 ถูกเรียงลำดับ จากน้อยไปมาก (ascending order)
- collection_3 ถูกเรียงลำดับ จากมากไปน้อย (descending order)

## Installation
```sh
bun install
```

## Usage
Run the program:
```sh
bun run src/index.ts
```

## Testing
Run tests using Bun's test runner:
```sh
bun test
```

## Project Structure
```
PRIMO/
├── node_modules/
├── src/
│   ├── index.ts      # Entry point
│   ├── merge.ts      # Merge function
├── test/
│   ├── merge.test.ts # Unit tests
├── .gitignore
├── bun.lock
├── index.ts
├── package.json
├── README.md
├── tsconfig.json
```


