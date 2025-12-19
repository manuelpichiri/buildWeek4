import { customNewsData } from "./customNewsData"
import './style.css'
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import { useState } from "react"

const CustomNews = () => {

  const numberOfData = 5

  const [showMoreData, setShowMoreData] = useState(numberOfData)

  const handleShowMoreData = () => {

    if (showMoreData === numberOfData) {

      setShowMoreData(customNewsData.length)

    } else {

      setShowMoreData(numberOfData)

    }

  }

  return (

    <div
      className="custom-news-main-container mt-4"
    >
      <div
        className="d-flex align-items-center justify-content-between"
      >
        <h4>LinkedIn Notizie</h4>
        <svg
          className="me-3"
          width="14"
          height="14"
          viewBox="0 0 256 256"
        >
          <g
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            style={{
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "none",
              fillRule: "nonzero",
              opacity: 1
            }}
          >
            <path
              d="M 82.236 0 H 7.764 C 3.476 0 0 3.476 0 7.764 v 74.473 C 0 86.524 3.476 90 7.764 90 h 74.473 C 86.524 90 90 86.524 90 82.236 V 7.764 C 90 3.476 86.524 0 82.236 0 z M 52.103 71.55 c -1.987 1.589 -3.641 2.763 -4.919 3.489 c -2.655 1.51 -4.825 2.307 -6.634 2.438 c -1.66 0.12 -3.037 -0.234 -4.091 -1.05 c -1.041 -0.804 -1.624 -1.974 -1.733 -3.48 c -0.32 -4.429 1.989 -15.083 7.059 -32.569 c 0.213 -0.752 0.302 -1.417 0.262 -1.975 c -0.03 -0.419 -0.157 -0.41 -0.409 -0.391 c -0.683 0.049 -1.485 0.356 -2.383 0.911 c -0.842 0.521 -2.626 2.047 -5.303 4.537 c -0.201 0.188 -0.515 0.26 -0.796 0.182 c -0.28 -0.078 -0.474 -0.289 -0.492 -0.537 c -0.218 -3.025 1.262 -5.998 3.96 -7.954 c 1.023 -0.742 2.035 -1.395 3.005 -1.941 c 3.396 -1.908 6.395 -2.967 8.914 -3.149 c 1.495 -0.108 2.699 0.098 3.579 0.613 c 0.924 0.544 1.429 1.335 1.503 2.354 c 0.049 0.683 -0.221 2.799 -3.129 13.238 c -3.463 12.482 -5.129 20.055 -4.952 22.507 c 0.026 0.353 0.14 0.625 0.352 0.831 c 0.169 0.167 0.296 0.221 0.354 0.217 c 0.458 -0.033 2.151 -0.667 7.959 -5.822 c 0.208 -0.18 0.52 -0.245 0.791 -0.169 c 0.277 0.08 0.467 0.29 0.485 0.535 C 55.679 67.056 54.446 69.674 52.103 71.55 z M 51.463 25.186 c -3.499 0.253 -6.54 -2.379 -6.792 -5.877 c -0.253 -3.499 2.379 -6.54 5.877 -6.792 c 3.499 -0.253 6.54 2.379 6.792 5.877 C 57.593 21.893 54.961 24.934 51.463 25.186 z"
              fill="black"
            />
          </g>
        </svg>
      </div>

      <h6>Storie principali</h6>

      <ul
        className="custom-news-list m-0 list-unstyled"
      >
        {customNewsData.slice(0, showMoreData).map((article, index) => (

          <li
            key={`${article.title} ${index}`}
          >
            <a
              className="d-flex flex-column"
              href="#"
            >
              <p className="m-0">{article.title}</p>
              <p className="m-0">{article.timeAgo} • {article.readers}</p>
            </a>
          </li>

        ))}

      </ul>

      <div
        as="button"
        className="show-hide-news-button"
        onClick={handleShowMoreData}
      >
        <p
          className="m-0"
        >
          {showMoreData === numberOfData ? "Mostra altro" : "Meno dettagli"}
        </p>

        {showMoreData === numberOfData ?
          <ChevronDown
            className="show-hide-news-icon"
          />
          :
          <ChevronUp
            className="show-hide-news-icon"
          />
        }

      </div>

      <h6
        className="mt-3"
      >Rompicapo di LinkedIn in Evidenza</h6>

      <div
        className="game-card-container d-flex align-items-center gap-2"
      >

        <div
          className="game-img-container"
        >
          <img
            className="w-100 d-block object-fit-cover"
            src="https://static.licdn.com/aero-v1/sc/h/3nbta1n5ale6ewdbbwf38ki6d"
            alt="linkedin game picture" />
        </div>


        <div
          className="d-flex flex-column"
        >
          <p className="m-0">Zip - un rompicapo veloce</p>
          <p className="m-0">Risolvilo in 60 secondi o meno!</p>
        </div>

        <ChevronRight />

      </div>

      <div>

      </div>

    </div>

  )

}

export default CustomNews