import styles from "./Footer.module.css"
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
        <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p>
          © {year} • Made by <strong>Sinan</strong> using <span>React</span> & <span>Node.js</span>
        </p>
      </div>
    </footer></div>
    
  );
}