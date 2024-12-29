type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  x: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <title>X</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.5 21.5l7.548-7.548m0 0L3.5 3.5h5l5.452 7.548m-2.904 2.904L16.5 21.5h5l-7.548-10.452M21.5 3.5l-7.548 7.548"
      />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 25 25"
      {...props}
    >
      <title>Instagram</title>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12.5c0-4.478 0-6.718 1.391-8.109S8.021 3 12.5 3c4.478 0 6.718 0 8.109 1.391S22 8.021 22 12.5c0 4.478 0 6.718-1.391 8.109C19.217 22 16.979 22 12.5 22c-4.478 0-6.718 0-8.109-1.391C3 19.217 3 16.979 3 12.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M17 12.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.009 7H18"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <title>Facebook</title>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12.5c0-4.478 0-6.718 1.391-8.109S8.021 3 12.5 3c4.478 0 6.718 0 8.109 1.391S22 8.021 22 12.5c0 4.478 0 6.718-1.391 8.109C19.217 22 16.979 22 12.5 22c-4.478 0-6.718 0-8.109-1.391C3 19.217 3 16.979 3 12.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.427 8.527h-2.945a1.9 1.9 0 00-1.9 1.886l-.086 11.515m-1.914-7.425h4.803"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <title>YouTube</title>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12.5 21c1.81 0 3.545-.179 5.153-.507 2.01-.41 3.014-.614 3.93-1.792.917-1.179.917-2.532.917-5.238v-1.926c0-2.706 0-4.06-.917-5.238-.916-1.178-1.92-1.383-3.93-1.792A25.884 25.884 0 0012.5 4c-1.81 0-3.545.179-5.153.507-2.01.41-3.014.614-3.93 1.792C2.5 7.478 2.5 8.831 2.5 11.536v1.928c0 2.705 0 4.058.917 5.237.916 1.178 1.92 1.383 3.93 1.792 1.608.328 3.343.507 5.153.507z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.462 12.813c-.148.606-.938 1.04-2.517 1.911-1.718.947-2.577 1.42-3.272 1.237a1.692 1.692 0 01-.635-.317C9.5 15.209 9.5 14.306 9.5 12.5s0-2.709.538-3.144c.182-.147.4-.256.635-.317.695-.183 1.554.29 3.272 1.237 1.58.87 2.369 1.305 2.517 1.911.05.206.05.42 0 .626z"
      />
    </svg>
  ),
  copyright: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <title>Copyright</title>
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        clipPath="url(#clip0_8952_2946)"
      >
        <path d="M18.33 10a8.333 8.333 0 11-16.666 0 8.333 8.333 0 0116.667 0z" />
        <path
          strokeLinecap="round"
          d="M12.5 11.666c0 .92-.746 1.667-1.667 1.667H10c-.777 0-1.165 0-1.471-.127a1.666 1.666 0 01-.902-.902c-.127-.306-.127-.695-.127-1.471V9.166c0-.777 0-1.165.127-1.471.169-.409.493-.733.902-.902.306-.127.694-.127 1.471-.127h.833c.92 0 1.667.746 1.667 1.667"
        />
      </g>
      <defs>
        <clipPath id="clip0_8952_2946">
          <path fill="currentColor" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Menu</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Close</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.293 16.707a1 1 0 001.414-1.414L13.414 12l3.293-3.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 101.414 1.414L12 13.414l3.293 3.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  download: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <title>Download</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15.235v-10m0 10c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.008-1.994 2.5-2.5M20 17.235c0 2.482-.518 3-3 3H7c-2.482 0-3-.518-3-3"
      />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 13 13"
      {...props}
    >
      <title>Check</title>
      <path
        fill="currentColor"
        d="M11.374 3.791l-6.5 6.5-2.98-2.98.764-.763 2.216 2.21 5.736-5.73.764.763z"
      />
    </svg>
  ),
  motorbike: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <title>Motorbike</title>
      <path
        stroke="currentColor"
        strokeWidth="2.5"
        d="M32.503 31.667a4.167 4.167 0 100-8.333 4.167 4.167 0 000 8.333zM7.503 31.667a4.167 4.167 0 100-8.333 4.167 4.167 0 000 8.333z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M33.727 13.117c2.136 2.599 2.878 5.07 2.941 6.377a8.87 8.87 0 00-3.695-.798c-4.076 0-7.734 2.71-8.608 6.32-.208.863-.313 1.295-.54 1.473-.226.178-.592.178-1.323.178h-4.798c-.737 0-1.106 0-1.334-.18-.227-.181-.327-.611-.526-1.472-.826-3.563-4.18-6.66-7.671-6.398-.352.026-.528.04-.649.013-.12-.027-.242-.096-.485-.233-.701-.396-1.419-.772-2.107-1.192a3.333 3.333 0 01-1.595-2.734c-.022-.638.346-1.273 1.087-1.098l10.701 2.518c.804.19 1.206.284 1.552.22.345-.065.768-.354 1.615-.933 2.147-1.469 5.55-2.856 8.942-1.63.929.335 1.393.503 1.658.511.264.009.652-.104 1.427-.33a15.776 15.776 0 013.408-.612zm0 0c-1.338-1.63-3.225-3.309-5.835-4.783"
      />
    </svg>
  ),
  license: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <title>License</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M3.336 20c0-7.071 0-10.607 2.44-12.803C8.218 5 12.147 5 20.004 5c7.856 0 11.785 0 14.225 2.197C36.67 9.393 36.67 12.929 36.67 20c0 7.071 0 10.607-2.44 12.803C31.787 35 27.858 35 20.002 35c-7.857 0-11.786 0-14.226-2.197C3.336 30.607 3.336 27.071 3.336 20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
        d="M8.336 27.5c2.014-4.302 9.52-4.585 11.667 0m-2.5-11.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M25 16.667h6.667M25 23.333h6.667"
      />
    </svg>
  ),
  photo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <title>Photo</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M20.003 5.834c-7.857 0-11.786 0-14.226 2.197-2.441 2.196-2.441 5.732-2.441 12.803 0 7.071 0 10.607 2.44 12.803 2.441 2.197 6.37 2.197 14.227 2.197 7.856 0 11.785 0 14.225-2.197 2.441-2.196 2.441-5.732 2.441-12.803v-6.667"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
        d="M8.336 28.334c2.014-4.302 9.52-4.585 11.667 0m-2.5-11.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M23.336 10.833s1.667 0 3.333 3.333c0 0 5.294-8.333 10-10"
      ></path>
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <title>Phone</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
        d="M8.336 15c0-5.5 0-8.249 1.708-9.957 1.709-1.709 4.459-1.709 9.959-1.709s8.25 0 9.958 1.709C31.669 6.75 31.669 9.5 31.669 15v10c0 5.5 0 8.25-1.708 9.958-1.709 1.708-4.459 1.708-9.958 1.708-5.5 0-8.25 0-9.959-1.708C8.336 33.25 8.336 30.5 8.336 25V15z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M18.336 31.666h3.333"
      ></path>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M15 3.333l.148.89c.322 1.929.482 2.893 1.144 3.48.69.612 1.668.63 3.708.63s3.018-.018 3.708-.63c.662-.587.822-1.551 1.144-3.48l.148-.89"
      ></path>
    </svg>
  ),
  chevronDown: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 13"
      {...props}
    >
      <title>ChevronDown</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 1.5s-6.26 10-8.5 10S1 1.5 1 1.5"
      />
    </svg>
  ),
  snapchat: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <path
        d="M6.57556 7.42444C6.57556 4.42861 9.00416 2 12 2C14.9958 2 17.4244 4.42861 17.4244 7.42444C17.4244 12.1722 17.6611 14.5456 22 16.4444C19.7778 17 19.2222 17.5556 18.6667 19.7778C14.7778 19.7778 14.2222 22 12 22C9.77778 22 9.22222 19.7778 5.33333 19.7778C4.77778 17.5556 4.22222 17 2 16.4444C6.33889 14.5456 6.57556 12.1722 6.57556 7.42444Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 16C5.82356 13.9171 5.82356 11.9503 2.95589 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 16C18.1764 13.9171 18.1764 11.9503 21.0441 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  prev: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  ),
  next: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
  insurance: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <path
        d="M10.3371 10.38C9.25714 10.38 8.71714 11.16 8.59714 11.64C8.47714 12.12 8.47714 13.86 8.54914 14.58C8.78914 15.48 9.38914 15.852 9.97714 15.972C10.5171 16.02 12.7971 16.002 13.4571 16.002C14.4171 16.02 15.1371 15.66 15.4371 14.58C15.4971 14.22 15.5571 12.24 15.4071 11.64C15.0891 10.68 14.2971 10.38 13.6971 10.38H10.3371Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.25 9.95854C10.25 9.89854 10.2582 9.55312 10.2596 9.11854C10.2609 8.72145 10.226 8.33854 10.4156 7.98814C11.126 6.57454 13.166 6.71854 13.67 8.15854C13.7573 8.39562 13.7626 8.77146 13.76 9.11854C13.7567 9.56203 13.766 9.95854 13.766 9.95854"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  carRent: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <path
        d="M22 15.4222V18.5C22 18.9659 22 19.1989 21.9239 19.3827C21.8224 19.6277 21.6277 19.8224 21.3827 19.9239C21.1989 20 20.9659 20 20.5 20C20.0341 20 19.8011 20 19.6173 19.9239C19.3723 19.8224 19.1776 19.6277 19.0761 19.3827C19 19.1989 19 18.9659 19 18.5C19 18.0341 19 17.8011 18.9239 17.6173C18.8224 17.3723 18.6277 17.1776 18.3827 17.0761C18.1989 17 17.9659 17 17.5 17H6.5C6.03406 17 5.80109 17 5.61732 17.0761C5.37229 17.1776 5.17761 17.3723 5.07612 17.6173C5 17.8011 5 18.0341 5 18.5C5 18.9659 5 19.1989 4.92388 19.3827C4.82239 19.6277 4.62771 19.8224 4.38268 19.9239C4.19891 20 3.96594 20 3.5 20C3.03406 20 2.80109 20 2.61732 19.9239C2.37229 19.8224 2.17761 19.6277 2.07612 19.3827C2 19.1989 2 18.9659 2 18.5V15.4222C2 14.22 2 13.6188 2.17163 13.052C2.34326 12.4851 2.67671 11.9849 3.3436 10.9846L4 10L4.96154 7.69231C5.70726 5.90257 6.08013 5.0077 6.8359 4.50385C7.59167 4 8.56112 4 10.5 4H13.5C15.4389 4 16.4083 4 17.1641 4.50385C17.9199 5.0077 18.2927 5.90257 19.0385 7.69231L20 10L20.6564 10.9846C21.3233 11.9849 21.6567 12.4851 21.8284 13.052C22 13.6188 22 14.22 22 15.4222Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8.5L4 10L5.76114 10.4403C5.91978 10.4799 6.08269 10.5 6.24621 10.5H17.7538C17.9173 10.5 18.0802 10.4799 18.2389 10.4403L20 10L22 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14V14.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14V14.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ticket: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <path
        d="M19.7085 7.65038C19.8657 7.49323 20.1365 7.47721 20.2957 7.65093C21.2284 8.66824 21.7446 9.42151 21.9146 10.2557C22.0124 10.7357 22.0263 11.2242 21.9557 11.6994C21.7649 12.9836 20.7244 14.0241 18.6434 16.1051L16.1051 18.6434C14.0241 20.7244 12.9836 21.7649 11.6994 21.9557C11.2242 22.0263 10.7357 22.0124 10.2557 21.9146C9.4216 21.7446 8.66841 21.2285 7.65127 20.296C7.47734 20.1366 7.49342 19.8655 7.65074 19.7082C8.52693 18.832 8.48529 17.3698 7.55776 16.4422C6.63022 15.5147 5.16802 15.4731 4.29183 16.3493C4.13451 16.5066 3.86341 16.5227 3.70395 16.3487C2.77146 15.3316 2.25536 14.5784 2.08539 13.7443C1.98759 13.2643 1.97368 12.7758 2.04429 12.3006C2.23513 11.0164 3.27561 9.97588 5.35657 7.89492L7.89492 5.35657C9.97588 3.27561 11.0164 2.23513 12.3006 2.04428C12.7758 1.97368 13.2643 1.98759 13.7443 2.08539C14.5785 2.25538 15.3318 2.77157 16.3491 3.70427C16.5228 3.86355 16.5068 4.13432 16.3496 4.29147C15.4734 5.16765 15.5151 6.62985 16.4426 7.55739C17.3701 8.48493 18.8324 8.52656 19.7085 7.65038Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 15L9 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tempCover: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M11.6769 8.67348C11.8274 8.43697 12.1726 8.43697 12.3231 8.67348L12.7586 9.35767C13.2401 10.1143 13.8818 10.756 14.6384 11.2375L15.3226 11.6729C15.5591 11.8235 15.5591 12.1687 15.3226 12.3192L14.6384 12.7547C13.8818 13.2362 13.2401 13.8779 12.7586 14.6345L12.3231 15.3187C12.1726 15.5552 11.8274 15.5552 11.6769 15.3187L11.2414 14.6345C10.7599 13.8779 10.1182 13.2362 9.36157 12.7547L8.67738 12.3192C8.44087 12.1687 8.44087 11.8235 8.67738 11.6729L9.36157 11.2375C10.1182 10.756 10.7599 10.1143 11.2414 9.35767L11.6769 8.67348Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.9068 5.28387C6.87149 5.4984 8.78311 2.49713 12.0262 2.49713C15.2208 2.43341 16.784 5.32395 20.059 5.32395C21.8147 14.2606 18.1622 19.8743 12.053 21.4961C6.38992 20.15 2.13481 14.4788 3.9068 5.28387Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
