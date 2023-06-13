import battleship from '../public/assets/images/battleship.png';
import cvApplication from '../public/assets/images/cv-application.png';
import memoryCard from '../public/assets/images/memory-card.png';
import reactivePhysio from '../public/assets/images/reactive-physio.png';
import shoppingCart from '../public/assets/images/shopping-cart.png';
import todoList from '../public/assets/images/todo-list.png';
import weatherApp from '../public/assets/images/weather-app.png';
import adminDashboard from '../public/assets/images/admin-dashboard.png';
import signupForm from '../public/assets/images/sign-up-form.png';
import personalPortfolio from '../public/assets/images/personal-portfolio.png';
import uniqid from 'uniqid';

export const projectList = [
    {
        id: uniqid(),
        name: 'Battleship',
        description: 'Implementation of a classic game "Battleship".',
        tech: 'Javascript HTML CSS',
        src: battleship,
        demo: 'https://htmlpreview.github.io/?https://github.com/dcksn-c/battleship/blob/main/dist/index.html',
        github: 'https://github.com/dcksn-c/battleship',
    },
    {
        id: uniqid(),
        name: 'CV Application',
        description: 'A simple CV application that allows users to build their CV dynamically by submitting after filling up the form.',
        tech: 'React Javascript HTML CSS',
        src: cvApplication,
        demo: 'https://dcksn-c.github.io/cv-application/',
        github: 'https://github.com/dcksn-c/cv-application'
    },
    {
        id: uniqid(),
        name: 'Memory Card',
        description: 'A memory game with scoring system that keeps going and reset when players clicked on the same card twice.',
        tech: 'React Javascript HTML CSS',
        src: memoryCard,
        demo: 'https://dcksn-c.github.io/memory-card/',
        github: 'https://github.com/dcksn-c/memory-card'
    },
    {
        id: uniqid(),
        name: 'Shopping Cart',
        description: 'Implementation of shopping cart that simulates online shopping experience.',
        tech: 'React Javascript HTML CSS FramerMotion',
        src: shoppingCart,
        demo: 'https://dcksn-c.github.io/shopping-cart/',
        github: 'https://github.com/dcksn-c/shopping-cart',
    },
    {
        id: uniqid(),
        name: 'Todo List',
        description: "A todo list app to manage personal tasks and projects, while saving them on users' browser.",
        tech: 'Javascript HTML CSS date-fns',
        src: todoList,
        demo: 'https://htmlpreview.github.io/?https://github.com/dcksn-c/todo-list/blob/main/dist/index.html',
        github: 'https://github.com/dcksn-c/todo-list'
    },
    {
        id: uniqid(),
        name: 'Weather App',
        description: 'A weather app that fetches current weather information of a city from Weather API.',
        tech: 'Javascript HTML CSS',
        src: weatherApp,
        demo: 'https://htmlpreview.github.io/?https://github.com/dcksn-c/weather-app/blob/main/dist/index.html',
        github: 'https://github.com/dcksn-c/weather-app'
    },
    {
        id: uniqid(),
        name: 'Admin Dashboard',
        description: 'Full dashboard design built with CSS Grid & Flex Box.',
        tech: 'Javascript HTML CSS',
        src: adminDashboard,
        demo: 'https://htmlpreview.github.io/?https://github.com/dcksn-c/admin-dashboard/blob/main/index.html',
        github: 'https://github.com/dcksn-c/admin-dashboard'
    },
    {
        id: uniqid(),
        name: 'Sign-Up Form',
        description: 'Simple sign-up form with form validations.',
        tech: 'Javascript HTML CSS',
        src: signupForm,
        demo: 'https://htmlpreview.github.io/?https://github.com/dcksn-c/sign-up-form/blob/main/index.html',
        github: 'https://github.com/dcksn-c/sign-up-form'
    },
    {
        id: uniqid(),
        name: 'Reactive Physio',
        description: "An actual live site that I built for my friend's new business using Wordpress.",
        tech: '',
        src: reactivePhysio,
        demo: 'https://reactivephysio.com.my/',
        github: ''
    },
    {
        id: uniqid(),
        name: 'Personal Portfolio',
        description: '...and last but not least, this responsive portfolio site that also supports dark & light modes.',
        tech: 'Javascript HTML CSS Next React FramerMotion Tailwind',
        src: personalPortfolio,
        demo: '',
        github: 'https://github.com/dcksn-c/personal-portfolio'
    },
]