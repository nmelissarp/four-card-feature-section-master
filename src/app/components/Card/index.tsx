import styles from './Card.module.sass'

const Card = ({
  title,
  text,
  icon,
}: {
  title: string
  text: string
  icon: string
}) => (
  <div className={styles.card}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.text}>{text}</p>
    <img src={icon} alt="icon" className={styles.image} />
  </div>
)

export default Card
