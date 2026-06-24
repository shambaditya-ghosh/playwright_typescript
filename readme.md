# Playwright Installation

## Steps
1. **Check if Node.js is installed:**✅
```sh
node -v
```
- Returns a valid node version (e.g. `v22.16.0`). If not, install Node.js first.

2. **Navigate to your project directory:**✅
```sh
cd /path/to/your/project
```

3. **Initialize Playwright:**✅
```sh
npm init playwright@latest
```
- When prompted:
  - Select `TypeScript` as the language
  - Choose to install **all browsers**

4. **Verify Playwright installation:**✅
```sh
npx playwright --version
```
- Shows the installed Playwright version.

---



# Naming Convention - Best Practice:

### 16.2. File & Code Naming Conventions

| Item                    | Convention                                     | Example                                               |
|-------------------------|------------------------------------------------|-------------------------------------------------------|
| **Folders / Files**     | kebab-case                                     | `page-objects/`, `file-helper.ts`                    |
| **Page and Spec files** | dot-separated                                  | `nopcommerce.home.page.ts`, `nopcommerce.e2e.spec.ts` |
| **Class Names**         | PascalCase (each word capitalized)             | `LoginPage`, `DashboardActions`                       |
| **Variables**           | camelCase                                      | `loginButton`, `userNameInput`                        |
| **Constants**           | UPPER_SNAKE_CASE                               | `BASE_URL`, `API_TIMEOUT_MS`                          |

---

🎯 **Consistent naming improves readability and reduces confusion across teams.**

---


# Local Git Setup

1. **Initialize a Local Git repository:**

```sh
git init
```

2. **Check which files are to be staged:**

```sh
git status
```
- This command shows the changes in the current directory.

3. **Add or check project-specific files in the `.gitignore` file.**
   1. You can use the `VS Code` extention to create the content

4. **Stage all files for commit:**

```sh
git add .
```

2. **Check which files are staged or ready to be committed:**

```sh
git status
```

3. **Commit the staged files:**

```sh
git commit -m "Your commit message here"
```
- This command commits all staged changes with a descriptive message.

---



#Instructions & notes

1. Target web app: "https://www.saucedemo.com/"
2. Steps:
    1. Go to the home page
    2. Assert if the title is correct
    3. Assert Header text
 3. Done 🎉

//CodeGen

** Option 2 - CLI 
- Help --> 'npx playright codegen --help'
- CLI Basic Command - npx playwright codegen
- With URL - 'npx playwright codegen https://saucedemo.com'