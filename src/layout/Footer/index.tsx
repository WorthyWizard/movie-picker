import s from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.FooterInner}>
        <p className={s.CopyRight}>MoviePicker &copy; 2021</p>
        <p className={s.Developer}>Designed and developed by WorthyWizard</p>
      </div>
    </footer>
  );
};
