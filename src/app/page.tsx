import Card from './components/Card'
import styles from './page.module.sass'

export default function Home() {
  const cardsData = [
    {
      title: 'Supervisor',
      text: 'Monitors activity to identify project roadblocks',
      icon: '/images/icon-supervisor.svg',
    },
    {
      title: 'Team Builder',
      text: 'Scans our talent network to create the optimal team for your project',
      icon: '/images/icon-team-builder.svg',
    },
    {
      title: 'Karma',
      text: 'Regularly evaluates our talent to ensure quality',
      icon: '/images/icon-karma.svg',
    },
    {
      title: 'Calculator',
      text: 'Uses data from past projects to provide better delivery estimates',
      icon: '/images/icon-calculator.svg',
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <h1>Reliable, efficient delivery</h1>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project
          data points to ensure that your project is successful
        </p>

      </div>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  )
}
