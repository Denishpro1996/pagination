import React, { useState, useEffect } from "react";
import "./Pagination.css";
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );
  const abc = showPerPage * counter;
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <div className="paginat_list">
          <ul class="pagination">
            <li class="prev_button">
              <a
                class="page-link"
                href="!#"
                onClick={() => onButtonClick("prev")}
              >
                ArrowLeftIcon
              </a>
            </li>

            {new Array(numberOfButtons).fill("").map((el, index) => (
              <li class={`page-item ${index + 1 === counter ? "abc" : null}`}>
                <a
                  class="page-link"
                  href="!#"
                  onClick={() => setCounter(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li class="page-item">
              <a
                class="page-link"
                href="!#"
                onClick={() => onButtonClick("next")}
              >
                Next
              </a>
            </li>
          </ul>
          <div className="total_page">
            page {counter} of {numberOfButtons}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
