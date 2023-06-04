import React from "react";

const Test = () => {
  return (
    <section
      class="min-h-screen flex items-stretch bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url(data:image/jpeg;base64,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)",
      }}
    >
      <div class="lg:flex w-1/2 hidden relative items-center bg-black/50">
        {/* <div class="absolute inset-0 z-0"></div> */}
        <div class="w-full px-24 z-10">
          <h1 class="text-5xl font-bold text-left tracking-wide">
            kol it special
          </h1>
          <p class="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
        {/* <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </span>
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </span>
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
          </div> */}
      </div>
      <div class="lg:w-1/2 w-full flex items-center  justify-center bg-black/50 text-center md:px-16 px-0 z-0">
        <div class="absolute lg:hidden z-10 inset-0 items-center">
          <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div class="w-full py-6 z-20">
          <h1 class="my-6">
            <svg viewBox="0 0 247 31" class="w-auto h-7 sm:h-8 inline-flex">
              <path
                fill="rgba(99,102,241, .8)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#06B6D4"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                fill="#000"
              ></path>
            </svg>
          </h1>
          <div class="py-6 space-x-2">
            <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              f
            </span>
            <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              G+
            </span>
            <span class="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              in
            </span>
          </div>
          <p class="text-gray-100">or use email your account</p>
          <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div class="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                class="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div class="pb-2 pt-4">
              <input
                class="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="#">Forgot your password?</a>
            </div>
            <div class="px-4 pb-2 pt-4">
              <button class="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                sign in
              </button>
            </div>

            <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Test;
