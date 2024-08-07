# JavaScript grade calculator <Badge type="tip" text="JS"/>

## What is the project purpose ?

The purpose of this website is to calculate a student's grades, determining all the necessary averages.
It serves as a tool to help the student keep track of their grades during their learning.

## How it looks like

### Without grades added :

![grade calculator screenshot](../images/grade-calculator-image.png)

### With grades added :

![semester row with grades](../images/grade-calculator-exemple.png)

## How did I do it

To help me with that, the [React documentation](https://react.dev/learn) really helped me.

### Here is an exemple of my code

```tsx
// Function to render SemesterRow components based on the semesters array
const renderSemesterRows = () => {
  // Map through the semesters array to create SemesterRow components
  return semesters.map((_average, index) => (
    // Each SemesterRow is associated with a unique key and a semester number
    <SemesterRow
      // Callback function to handle the addition of a new average for the current semester
      onNewAverageAdded={(g) => newAverage(index, g)}
      key={index} // Unique key for React to efficiently identify each SemesterRow0
      semesterNumber={index + 1} // Semester number is one-based, so index + 1
    />
  ));
};
```

This code create a new semester each time you click on the button "add semester"

![show the add semester button](../images/addsemesterbutton.png)

## How to initiate project

This project is made with the framework called [React.js](https://react.dev) used with
[TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). For the aspect of the website,
I used a framework called [Tailwind.css](https://tailwindcss.com/)
\
\
And to connect all that,
we need to use [Vitejs](https://vitejs.dev/guide/), which propose file template for your project with different framework.
In this case, we're going to use the React-ts template. Which will give us this :

```shell
# Project creation
npm create vite@latest  grades-view-react -- --template react-ts

# Install dependencies needed for the project
npm i

# Install Tailwind.css
npm install -D tailwindcss

```

For configuring Tailwind.css in your files, follow [these instructions](https://tailwindcss.com/docs/installation)

Then, you can start working on your project, separating your html code in different component which look like that for me :

![project file tree](../images/gradesviewreact-filetree.png)

## You can find the [GitHub depot here](https://github.com/Alex-zReeZ/grades-calculator-react)
