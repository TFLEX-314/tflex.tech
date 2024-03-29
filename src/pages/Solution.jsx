import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/image/TFLEX-logo.svg';

const Solution = () => {
  return (
    <div class="container m-auto px-6 text-center md:px-12 lg:px-20">
      <div class="relative mx-auto flex h-56 w-56 items-center justify-center">
        <div class="it absolute inset-0 flex flex-wrap opacity-40 blur-3xl dark:opacity-70">
          <div aria-hidden="true" class="h-1/2 w-1/2 bg-primary"></div>
          <div aria-hidden="true" class="h-1/2 w-1/2 bg-purple-500"></div>
          <div aria-hidden="true" class="h-1/2 w-1/2 rounded-bl-full bg-secondary"></div>
          <div aria-hidden="true" class="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"></div>
        </div>

      </div>
      <div className="relative -mt-12 flex flex-col items-center">
  <Link className="flex-none text-xl font-semibold dark:text-white" to="/">
    <img src={Logo} alt="Sadain" />
  </Link>
  <h2 className="mb-8 text-4xl font-bold text-blue-900 dark:text-white md:text-6xl">
    Improve your
    <span className="relative">
      <span className="relative px-2 text-blue-800 dark:text-indigo-200">workflow</span>
    </span>
  </h2>
  <p className="mb-12 mt-6 text-gray-600 dark:text-gray-300 md:mx-auto md:w-5/6 lg:w-1/2">Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse aspernatur impedit nihil quisquam, voluptates placeat architecto adipisci id cum enim.</p>
  <a className="relative mx-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight" href="/pages/contact">
    <span className="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
  </a>
</div>
</div>
  )
}

export default Solution