export default function Footer() {
    return (
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pl-20 pr-20 pt-1">
          <p className="text-sm">&copy; {new Date().getFullYear()} EngiTrack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current text-black hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.32 4.32 0 0 0 1.89-2.37 8.75 8.75 0 0 1-2.75 1.06A4.3 4.3 0 0 0 16.11 4c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.11.98A12.2 12.2 0 0 1 3.1 5.18a4.35 4.35 0 0 0-.59 2.19c0 1.52.77 2.86 1.93 3.65-.71-.02-1.38-.22-1.97-.54v.06c0 2.13 1.52 3.91 3.53 4.32a4.33 4.33 0 0 1-1.95.07c.55 1.72 2.14 2.97 4.02 3a8.69 8.69 0 0 1-5.38 1.85 12.26 12.26 0 0 0 6.65 1.95c7.98 0 12.35-6.61 12.35-12.35l-.01-.56A8.84 8.84 0 0 0 22.46 6z" />
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current text-black hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.2 3H4.8C4.36 3 4 3.36 4 3.8v16.4c0 .44.36.8.8.8h14.4c.44 0 .8-.36.8-.8V3.8c0-.44-.36-.8-.8-.8zM8.54 17.3H6.31V10.8h2.23v6.5zM7.42 9.68c-.7 0-1.28-.57-1.28-1.28 0-.7.57-1.28 1.28-1.28s1.28.57 1.28 1.28c0 .7-.57 1.28-1.28 1.28zM17.69 17.3h-2.23v-3.19c0-.76-.61-1.37-1.37-1.37-.75 0-1.37.61-1.37 1.37v3.19h-2.23V10.8h2.23v.99c.43-.67 1.19-1.14 2.02-1.14 1.43 0 2.6 1.17 2.6 2.6v4.05z" />
              </svg>
            </a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current text-black hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.165c-3.338.726-4.043-1.613-4.043-1.613-.547-1.387-1.334-1.757-1.334-1.757-1.09-.746.082-.73.082-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.808 1.304 3.494.996.11-.776.417-1.304.76-1.603-2.665-.307-5.467-1.334-5.467-5.933 0-1.312.469-2.383 1.238-3.225-.123-.305-.537-1.537.117-3.202 0 0 1.01-.323 3.303 1.23a11.36 11.36 0 0 1 3.003-.404c1.018.004 2.046.137 3.003.404 2.292-1.553 3.302-1.23 3.302-1.23.655 1.665.241 2.897.118 3.202.769.842 1.238 1.913 1.238 3.225 0 4.61-2.806 5.622-5.48 5.923.43.372.812 1.102.812 2.22v3.293c0 .319.194.69.799.573C20.564 21.797 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }