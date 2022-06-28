import s from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={s.Spinner}>
      <div className={s.SpinnerInner}>
        <svg width="215" height="215" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse
              className={s.SpinnerBorder}
              fill="transparent"
              cx="107.26997"
              cy="107.53511"
              rx="100"
              ry="100"
              strokeWidth="10"
            />
            <g className={s.Reel} stroke="null">
              <ellipse cx="54.2203" cy="91.78243" rx="22" ry="22" />
              <ellipse cx="106.61118" cy="51.48026" rx="22" ry="22" />
              <ellipse cx="160.67" cy="91.46553" rx="22" ry="22" />
              <ellipse cx="139.36354" cy="154.6449" rx="22" ry="22" />
              <ellipse cx="74.73383" cy="153.93665" rx="22" ry="22" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
