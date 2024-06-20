import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy Node Setup',
    Svg: require('@site/static/img/landing/web-docs-home-1.svg').default,
    description: (
      <>
        Stereum simplifies the process of setting up Ethereum nodes, providing a streamlined and user-friendly interface to get your node up and running with minimal hassle.
      </>
    ),
  },
  {
    title: 'Robust Monitoring Tools',
    Svg: require('@site/static/img/landing/web-docs-home-2.svg').default,
    description: (
      <>
        Keep track of your node's performance and status with Stereum's comprehensive monitoring tools. Stay informed and proactive in maintaining node health and efficiency.
      </>
    ),
  },
  {
    title: 'Flexible Configuration',
    Svg: require('@site/static/img/landing/web-docs-home-3.svg').default,
    description: (
      <>
        Customize and configure your node to match your specific requirements. Stereum offers a variety of configuration options to tailor your node's operation.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
