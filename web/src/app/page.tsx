import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
  {
    title: "تجربه کاربری انسانی",
    description:
      "طراحی بر پایه تحقیق و درک عمیق از مخاطب فارسی‌زبان تا هر کلیک به هدف برسد.",
  },
  {
    title: "هویت بصری منحصربه‌فرد",
    description:
      "پالت رنگ، تایپوگرافی و تصویرسازی‌های هماهنگ برای ساختن برندی فراموش‌نشدنی.",
  },
  {
    title: "آمادگی برای رشد",
    description:
      "ساختار ماژولار و توسعه‌پذیر که در آینده نیز به راحتی قابل گسترش است.",
  },
  {
    title: "بارگذاری سریع",
    description:
      "بهینه‌سازی عملکرد برای ارائه تجربه‌ای روان روی همه دستگاه‌ها و شبکه‌ها.",
  },
];

const timeline = [
  {
    title: "شناخت و کشف",
    description:
      "هم‌فکری درباره اهداف، مخاطب و پیام اصلی برند تا مسیر با شفافیت آغاز شود.",
  },
  {
    title: "طراحی و نمونه اولیه",
    description:
      "خلق وایرفریم و طرح‌های تعاملی برای بررسی تجربه کاربری قبل از توسعه نهایی.",
  },
  {
    title: "تحویل و پشتیبانی",
    description:
      "پیاده‌سازی بر پایه Next.js، بهینه‌سازی برای سئو و همراهی در استقرار روی ورسل.",
  },
];

const faqs = [
  {
    question: "چقدر زمان نیاز است؟",
    answer:
      "بسته به دامنه پروژه، طراحی و توسعه اولیه بین دو تا چهار هفته زمان می‌برد و با برنامه زمانی شفاف پیش می‌رویم.",
  },
  {
    question: "آیا محتوای فارسی را هم آماده می‌کنید؟",
    answer:
      "در صورت نیاز، محتوای اولیه با لحن مناسب آماده می‌شود و امکان همکاری با تیم شما برای ویرایش نهایی وجود دارد.",
  },
  {
    question: "پشتیبانی بعد از تحویل چگونه است؟",
    answer:
      "دو هفته پشتیبانی رایگان برای بهبودهای جزیی و راه‌اندازی در نظر گرفته شده و امکان قرارداد نگهداری بلندمدت نیز هست.",
  },
];

const metrics = [
  { value: "۳ سال", label: "همراهی با استارتاپ‌های ایرانی" },
  { value: "۵۰+", label: "صفحه طراحی و توسعه‌شده" },
  { value: "۹۲٪", label: "میزان رضایت مشتریان" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.heroBadge}>
          <span className={styles.pulse} aria-hidden="true" />
          فرود خلاقانه فارسی
        </span>
        <h1 className={styles.heroTitle}>
          سلام! <span className={styles.gradientText}>حس تازه‌ای از حضور آنلاین</span>
        </h1>
        <p className={styles.heroSubtitle}>
          با یک صفحه فرود دلنشین و تمام‌عیار، برند شما در ذهن مخاطب ماندگار می‌شود.
          طراحی واکنش‌گرا، متن‌های دقیق و اجرای سریع؛ همه در خدمت روایت داستان شما.
        </p>
        <div className={styles.actions}>
          <Link href="#contact" className={styles.primaryAction}>
            شروع همکاری
          </Link>
          <Link href="#features" className={styles.secondaryAction}>
            مشاهده امکانات
          </Link>
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </header>

      <main className={styles.main}>
        <section id="features" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ویژگی‌های کلیدی</h2>
            <p className={styles.sectionSubtitle}>
              یک تجربه لحظه‌ای که پیام شما را واضح منتقل می‌کند و مخاطب را به اقدام دعوت
              می‌کند.
            </p>
          </div>
          <div className={styles.grid}>
            {highlights.map((highlight) => (
              <article key={highlight.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{highlight.title}</h3>
                <p className={styles.cardDescription}>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>مسیر همکاری</h2>
            <p className={styles.sectionSubtitle}>
              با یک فرآیند شفاف و مرحله‌به‌مرحله، از ایده تا اجرا در کنار شما هستیم.
            </p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div key={item.title} className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>پرسش‌های رایج</h2>
            <p className={styles.sectionSubtitle}>
              اگر سوال دیگری دارید خوشحال می‌شویم در تماس اولیه پاسخ دهیم.
            </p>
          </div>
          <div className={styles.faq}>
            {faqs.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.contactCard}>
            <h2 className={styles.sectionTitle}>برای صحبت آماده‌ام</h2>
            <p className={styles.sectionSubtitle}>
              چند خط درباره نیازتان بفرستید تا در کمتر از ۲۴ ساعت با یک پیشنهاد دقیق
              برگردم.
            </p>
            <div className={styles.contactActions}>
              <Link href="mailto:hello@example.com">ارسال ایمیل</Link>
              <Link href="https://cal.com" target="_blank" rel="noreferrer">
                رزرو جلسه آنلاین
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>ساخته شده با عشق به جزئیات و احترام به زبان فارسی.</p>
        <nav>
          <Link href="#features">ویژگی‌ها</Link>
          <Link href="#contact">ارتباط</Link>
        </nav>
      </footer>
    </div>
  );
}
