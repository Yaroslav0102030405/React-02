# React-02
- styling components 📘

- 1 Добавляем Create React App npx create-react-app ./

2 Установка зависимостей (3 пакета)
- npm instal --save-dev prettier husky lint-staged

3 Добавляем файлы в корень проекта три файла - .huskyrc
{
    "hooks": {
        "pre-commit": "lint-staged"
    }
}

 добавляем файл - .lintstagedrc
{
    "src/**/*.{json,css,scss,md}": {"prettier --write"},
    "src/**/*.{js,jsx,ts,tsx}": {"prettier --write", "eslint --fix"}
}

добавляем файл - .prettierrc.json
{
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "arrowParens": "avoid",
    "proseWrap": "always"
  }

  3 Настраиваем VS Code 
  заходим в настройки codeActionOnSave
  заходим в setting.json и добавляем
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

4 Налаштуванння modern-normalize
- link - https://www.npmjs.com/package/modern-normalize 

- Install
$ npm install modern-normalize

Підключаємо файл в папку src - index.js
Usage
import 'modern-normalize/modern-normalize.css';

5 Добавляем SASS - npm install sass

Добавить глобальные стили
в папке src создать файл - styles.css
и потом подключаем в файл index.js
