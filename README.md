# Mining Center

## Стек разработки

React + TypeScript + Vite

## Запуск проекта

`npm run dev`

## CodeStyle

1. ### Шаблон компонента:

```tsx
export const App = () => {...}
```

2. В качестве форматера выступает prettierrc с настройками:

```json
{
	"trailingComma": "es5",
	"useTabs": true,
	"tabWidth": 4,
	"semi": true,
	"singleQuote": true
}
```

3. Глобальные константы выносим в `.env`, локальные в файл `fileName.constants.ts`

### При выполнении задачи, создается новая ветка с названием "MC-n" n - номер задачи
